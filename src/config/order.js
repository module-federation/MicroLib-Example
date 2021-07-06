"use strict";

console.log("loading models.order module...");
import {
  makeOrderFactory,
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
import { DataSourceAdapterMongoDb } from "../datasources/datasource-mongodb";

/**
 * @type {import('../models/index').ModelSpecification}
 */
export const Order = {
  modelName: "order",
  endpoint: "orders",
  factory: makeOrderFactory,
  datasource: {
    factory: DataSourceAdapterMongoDb,
    url: "mongodb://localhost:27017",
    cacheSize: 2000,
    baseClass: "DataSourceMongoDb",
  },
  dependencies: { uuid: () => nanoid(8) },
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
    },
    authorizePayment: {
      service: "Payment",
      type: "outbound",
      keys: "paymentAuthorization",
      consumesEvent: "startWorkflow",
      producesEvent: "paymentAuthorized",
      undo: cancelPayment,
    },
    pickOrder: {
      service: "Inventory",
      type: "outbound",
      keys: "pickupAddress",
      consumesEvent: "pickOrder",
      producesEvent: "orderPicked",
      undo: returnInventory,
    },
    shipOrder: {
      service: "Shipping",
      type: "outbound",
      callback: orderShipped,
      consumesEvent: "orderPicked",
      producesEvent: "orderShipped",
      undo: returnShipment,
    },
    trackShipment: {
      service: "Shipping",
      type: "outbound",
      keys: ["trackingStatus", "trackingId"],
      consumesEvent: "orderShipped",
      producesEvent: "orderDelivered",
    },
    verifyDelivery: {
      service: "Shipping",
      type: "outbound",
      keys: "proofOfDelivery",
      consumesEvent: "orderDelivered",
      producesEvent: "deliveryVerified",
      undo: returnDelivery,
    },
    completePayment: {
      service: "Payment",
      type: "outbound",
      callback: paymentCompleted,
      consumesEvent: "deliveryVerified",
      producesEvent: "workflowComplete",
      undo: refundPayment,
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
