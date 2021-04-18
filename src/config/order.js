"use strict";

import {
  orderFactory,
  readyToDelete,
  handleOrderEvent,
  orderShipped,
  paymentCompleted,
  OrderStatus,
  recalcTotal,
  requiredForCompletion,
  statusChangeValid,
  freezeOnApproval,
  freezeOnCompletion,
  orderTotalValid,
  returnInventory,
  returnShipment,
  refundPayment,
  returnDelivery,
  cancelPayment,
  updateSignature,
  requiredForGuest,
  requiredForApproval,
  approve,
  cancel,
} from "../models/order";

import {
  requireProperties,
  freezeProperties,
  updateProperties,
  validateProperties,
  validateModel,
} from "../models/mixins";

import { uuid } from "../lib/utils";
import { DataSourceAdapterMongo } from "../datasources/datasource-mongodb";

/**
 * @type {import('../models/index').ModelSpecification}
 */
export const Order = {
  modelName: "order",
  endpoint: "orders",
  factory: orderFactory,
  datasource: {
    factory: DataSourceAdapterMongo,
    url: "mongodb://localhost:27017",
    cacheSize: 2000,
    baseClass: "DataSourceMongoDb",
  },
  dependencies: { uuid },
  mixins: [
    requireProperties(
      "orderItems",
      requiredForGuest([
        "lastName",
        "firstName",
        "billingAddress",
        "shippingAddress",
        "creditCardNumber",
        "email",
      ]),
      requiredForApproval("paymentAuthorization"),
      requiredForCompletion("proofOfDelivery")
    ),
    freezeProperties(
      "orderNo",
      "customerId",
      freezeOnApproval([
        "email",
        "lastName",
        "firstName",
        "orderItems",
        "orderTotal",
        "billingAddress",
        "shippingAddress",
        "creditCardNumber",
        "paymentAuthorization",
      ]),
      freezeOnCompletion("*")
    ),
    updateProperties([
      {
        propKey: "orderItems",
        update: recalcTotal,
      },
      {
        propKey: "orderItems",
        update: updateSignature,
      },
    ]),
    validateProperties([
      {
        propKey: "orderStatus",
        values: Object.values(OrderStatus),
        isValid: statusChangeValid,
      },
      {
        propKey: "orderTotal",
        maxnum: 99999.99,
        isValid: orderTotalValid,
      },
      {
        propKey: "email",
        regex: "email",
      },
      {
        propKey: "creditCardNumber",
        regex: "creditCard",
      },
      {
        propKey: "phone",
        regex: "phone",
      },
    ]),
  ],
  validate: validateModel,
  onDelete: readyToDelete,
  eventHandlers: [handleOrderEvent],
  ports: {
    listen: {
      service: "Event",
      type: "outbound",
      timeout: 0,
    },
    notify: {
      service: "Event",
      type: "outbound",
      timeout: 0,
    },
    save: {
      service: "Persistence",
      type: "outbound",
      timeout: 0,
    },
    find: {
      service: "Persistence",
      type: "outbound",
      timeout: 0,
    },
    validateAddress: {
      service: "Address",
      type: "outbound",
      keys: "shippingAddress",
      producesEvent: "addressValidated",
      disabled: true,
      timeout: 2000,
      maxRetry: 2,
      circuitBreaker: {
        default: {
          errorRate: 20,
          callVolume: 30,
          intervalMs: 10000,
          retryDelay: 30000,
        },
        portRetryFailed_order: {
          errorRate: 100,
          callVolume: 2,
          intervalMs: 60000,
          retryDelay: 30000,
        },
      },
    },
    authorizePayment: {
      service: "Payment",
      type: "outbound",
      keys: "paymentAuthorization",
      consumesEvent: "startWorkflow",
      producesEvent: "paymentAuthorized",
      undo: cancelPayment,
      timeout: 2000,
      maxRetry: 2,
      circuitBreaker: {
        default: {
          errorRate: 20,
          callVolume: 10,
          intervalMs: 100000,
          retryDelay: 30000,
        },
        portRetryFailed_order: {
          errorRate: 100,
          callVolume: 2,
          intervalMs: 60000,
          retryDelay: 30000,
        },
      },
    },
    pickOrder: {
      service: "Inventory",
      type: "outbound",
      keys: "pickupAddress",
      consumesEvent: "pickOrder",
      producesEvent: "orderPicked",
      undo: returnInventory,
      timeout: 2000,
      maxRetry: 2,
      circuitBreaker: {
        default: {
          errorRate: 20,
          callVolume: 10,
          intervalMs: 100000,
          retryDelay: 30000,
        },
      },
    },
    shipOrder: {
      service: "Shipping",
      type: "outbound",
      callback: orderShipped,
      consumesEvent: "orderPicked",
      producesEvent: "orderShipped",
      undo: returnShipment,
      timeout: 2000,
      maxRetry: 2,
      circuitBreaker: {
        default: {
          errorRate: 20,
          callVolume: 10,
          intervalMs: 100000,
          retryDelay: 30000,
        },
      },
    },
    trackShipment: {
      service: "Shipping",
      type: "outbound",
      keys: ["trackingStatus", "trackingId"],
      consumesEvent: "orderShipped",
      producesEvent: "orderDelivered",
      timeout: 2000,
      maxRetry: 2,
      circuitBreaker: {
        default: {
          errorRate: 20,
          callVolume: 10,
          intervalMs: 100000,
          retryDelay: 30000,
        },
        portRetryFailed_order: {
          errorRate: 100,
          callVolume: 2,
          intervalMs: 60000,
          retryDelay: 30000,
        },
      },
    },
    verifyDelivery: {
      service: "Shipping",
      type: "outbound",
      keys: "proofOfDelivery",
      consumesEvent: "orderDelivered",
      producesEvent: "deliveryVerified",
      undo: returnDelivery,
      timeout: 2000,
      maxRetry: 2,
      circuitBreaker: {
        default: {
          errorRate: 20,
          callVolume: 10,
          intervalMs: 100000,
          retryDelay: 30000,
        },
        portRetryFailed_order: {
          errorRate: 100,
          callVolume: 2,
          intervalMs: 60000,
          retryDelay: 30000,
        },
      },
    },
    completePayment: {
      service: "Payment",
      type: "outbound",
      callback: paymentCompleted,
      consumesEvent: "deliveryVerified",
      producesEvent: "workflowComplete",
      undo: refundPayment,
      timeout: 2000,
      maxRetry: 2,
      circuitBreaker: {
        default: {
          errorRate: 20,
          callVolume: 10,
          intervalMs: 100000,
          retryDelay: 30000,
        },
        portRetryFailed_order: {
          errorRate: 100,
          callVolume: 2,
          intervalMs: 60000,
          retryDelay: 30000,
        },
      },
    },
    cancelShipment: {
      service: "Shipping",
      type: "outbound",
    },
    refundPayment: {
      service: "Payment",
      type: "outbound",
    },
    oauthCallback: {
      type: "inbound",
      adapter: "endpoints.oauthCallback",
      keys: ["nonce"],
      producesEvent: "refreshToken",
    },
    refreshToken: {
      type: "outbound",
      service: "oauth",
      settings: {
        urls: [
          "facebook.com/oauth",
          "oauth.google.com",
          "indentity.service.com/oauth",
        ],
      },
      consumesEvent: "refreshToken",
      producesEvent: "tokenRefreshed",
    },
  },
  endpoints: {
    oauthCallback: {
      uri: "oauth-callback",
      callback: (order, payload) => order.refreshToken(payload.nonce),
    },
  },
  relations: {
    customer: {
      modelName: "customer",
      foreignKey: "customerId",
      type: "manyToOne",
      desc: "Many orders per customer, just one customer per order",
    },
  },
  commands: {
    decrypt: {
      command: "decrypt",
      acl: ["read", "decrypt"],
    },
    approve: {
      command: approve,
      acl: ["write", "approve"],
    },
    cancel: {
      command: cancel,
      acl: ["write", "cancel"],
    },
  },
  accessControlList: {
    admin: {
      allow: ["read", "delete", "decrypt"],
      type: "role",
    },
    owner: {
      allow: "*",
      deny: "delete",
      type: "role",
    },
    delegate: {
      allow: delegator => [...delegator.permissions],
      deny: "delete",
      type: "role",
    },
    approver: {
      allow: "approve",
      type: "role",
    },
    orders: {
      allow: "read",
      type: "relation",
      desc: "Allow customer model to see orders",
    },
  },
  serializers: [
    {
      on: "deserialize",
      key: "creditCardNumber",
      type: "string",
      value: (key, value) => decrypt(value),
      enabled: false,
    },
    {
      on: "deserialize",
      key: "shippingAddress",
      type: "string",
      value: (key, value) => decrypt(value),
      enabled: false,
    },
    {
      on: "deserialize",
      key: "billingAddress",
      type: "string",
      value: (key, value) => decrypt(value),
      enabled: false,
    },
  ],
};
