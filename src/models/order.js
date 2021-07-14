"use strict";

import { prevmodel } from "./mixins";
import checkPayload from "./check-payload";
import { async, encrypt } from "../lib/utils";

/** @typedef {string|RegExp} topic*/
/** @typedef {function(string)} eventCallback*/
/** @typedef {import('../adapters/index').adapterFunction} adapterFunction*/
/** @typedef {string} id */
/** @typedef {import("./customer").Customer} Customer */

/**
 * @typedef {Object} Order
 * @property {function(topic,eventCallback)} listen - listen for events
 * @property {import('../adapters/event-adapter').notifyType} notify
 * @property {adapterFunction} validateAddress - returns valid address or throws exception
 * @property {adapterFunction} completePayment - completes payment for an authorized charge
 * @property {adapterFunction} verifyDelivery - verify the order was received by the customer
 * @property {adapterFunction} trackShipment
 * @property {adapterFunction} refundPayment
 * @property {adapterFunction} undo - undo all transactions up to this point
 * @property {function():Promise<Order>} pickOrder - pick the items and get them ready for shipment
 * @property {adapterFunction} authorizePayment - verify payment info, credit avail
 * @property {import('../adapters/shipping-adapter').shipOrder} shipOrder -
 * calls shipping service to request delivery
 * @property {function(Order):Promise<void>} save - saves order
 * @property {function():Promise<Order>} find - finds order
 * @property {string} shippingAddress
 * @property {string} orderNo = the order number
 * @property {string} trackingId - id given by tracking status for this `orderNo`
 * @property {function():Order} decrypt - decrypts encypted properties
 * @property {function({key1:any,keyN:any}, boolean):Promise<Order>} update - update the order,
 * set the second arg to false to turn off validation.
 * @property {'PENDING'|'APPROVED'|'SHIPPING'|'CANCELED'|'COMPLETED'} orderStatus
 * @property {function(...args):Promise<import("../models/index").Model>} customer - retrieves related customer object,
 * or if args are provided, creates a new customer object, using the provided args as the input.
 * @property {function(string,Order):Promise} emit - broadcast domain event
 * @property {function():boolean} paymentAccepted - payment approved and funds reserved
 * @property {function():boolean} autoCheckout - whether or not to immediately submit the order
 * @property {boolean} saveShippingDetails save customer shipping and payment details as a customer record
 * @property {{itemId:string,price:number,qty:number}[]} orderItems
 * @property {Symbol} customerId {@link Customer}
 */

const orderStatus = "orderStatus";
const orderTotal = "orderTotal";
const orderNo = "orderNo";

export const OrderStatus = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  SHIPPING: "SHIPPING",
  COMPLETE: "COMPLETE",
  CANCELED: "CANCELED",
};

/**
 *
 * @param {*} items
 */
export const checkItems = function (orderItems) {
  if (!orderItems) {
    throw new Error("order contains no items");
  }
  const items = Array.isArray(orderItems) ? orderItems : [orderItems];

  if (
    items.length > 0 &&
    items.every(i => i.itemId && typeof i.price === "number")
  ) {
    return items;
  }
  throw new Error("order items invalid");
};

/**
 * Calculate order total
 * @param {*} items
 */
export const calcTotal = function (orderItems) {
  const items = checkItems(orderItems);

  return items.reduce((total, item) => {
    const qty = item.qty || 1;
    return (total += item.price * qty);
  }, 0);
};

/**
 * No changes to `propKey` properties once the order is approved
 * @param {*} o - the order
 * @param {*} propKey
 * @returns {string | null} the key or `null`
 */
export const freezeOnApproval = propKey => o => {
  return o[prevmodel].orderStatus !== OrderStatus.PENDING ? propKey : null;
};

/**
 * No changes to `propKey` once order is complete or canceled
 * @param {*} o - the order
 * @param {*} propKey
 * @returns {string | null} the key or `null`
 */
export const freezeOnCompletion = propKey => o => {
  return [OrderStatus.COMPLETE, OrderStatus.CANCELED].includes(
    o[prevmodel].orderStatus
  )
    ? propKey
    : null;
};

/**
 * If not a registered customer, provide shipping & payment details.
 * @param {*} o
 * @param {*} propKey
 * @returns {string | void} the key or `void`
 */
export const requiredForGuest = propKey => o => {
  return o.customerId ? null : propKey;
};

/**
 * Value required to approve orde1r.
 * @param {*} propKey
 */
export const requiredForApproval = propKey => o => {
  if (!o.orderStatus) return;
  return o.orderStatus === OrderStatus.APPROVED ? propKey : void 0;
};

/**
 * Value required to complete order
 * @param {*} o
 * @param {*} propKey
 * @returns {string | void} the key or `void`
 */
export const requiredForCompletion = propKey => o => {
  if (!o.orderStatus) return;
  return o.orderStatus === OrderStatus.COMPLETE ? propKey : void 0;
};

const invalidStatusChange = (from, to) => (o, propVal) => {
  return propVal === to && o[prevmodel].orderStatus === from;
};

const invalidStatusChanges = [
  // Can't change back to pending once approved
  invalidStatusChange(OrderStatus.APPROVED, OrderStatus.PENDING),
  // Can't change back to pending once shipped
  invalidStatusChange(OrderStatus.SHIPPING, OrderStatus.PENDING),
  // Can't change back to approved once shipped
  invalidStatusChange(OrderStatus.SHIPPING, OrderStatus.APPROVED),
  // Can't change directly to shipping from pending
  invalidStatusChange(OrderStatus.PENDING, OrderStatus.SHIPPING),
  // Can't change directly to complete from pending
  invalidStatusChange(OrderStatus.PENDING, OrderStatus.COMPLETE),
  // Can't change final status
  invalidStatusChange(OrderStatus.COMPLETE, OrderStatus.PENDING),
  // Can't change final status
  invalidStatusChange(OrderStatus.COMPLETE, OrderStatus.SHIPPING),
];

/**
 * Check that status changes are valid
 */
export const statusChangeValid = (o, propVal) => {
  if (invalidStatusChanges.some(isc => isc(o, propVal))) {
    throw new Error("invalid status change");
  }
  return true;
};

/**
 *
 * @param {*} o
 * @param {*} propVal
 */
export const orderTotalValid = (o, propVal) => {
  return calcTotal(o.orderItems) === propVal;
};

/**
 * Recalculate order total
 * @param {object} o - the object (order)
 * @param {number} propVal - the property value
 */
export const recalcTotal = (o, propVal) => ({
  orderTotal: calcTotal(propVal),
});

/**
 * Updated signature requirement if `orderTotal` above certain value
 * @param {object} o - the object (order)
 * @param {number} propVal - the property value
 */
export const updateSignature = (o, propVal) => ({
  signatureRequired: calcTotal(propVal) > 999.99 || o.signatureRequired,
});

/**
 * Don't delete orders before they're complete.
 */
export function readyToDelete(model) {
  if (
    ![OrderStatus.COMPLETE, OrderStatus.CANCELED].includes(model.orderStatus)
  ) {
    throw new Error("order must be canceled or completed");
  }
  return model;
}

/**
 *
 * @param {*} error
 * @param {*} func
 */
function handleError(error, order, func) {
  try {
    if (order) order.emit("orderError", { func, error });
  } catch (error) {
    console.error("order.emit", error);
  }
  console.error({ func, error });
  2;
  throw new Error(error);
}

/**
 * Callback invoked by adapter when payment is complete
 * @param {{model:Order}} options
 */
export async function paymentCompleted(options = {}, payload = {}) {
  const { model: order } = options;
  const changes = checkPayload(
    "confirmationCode",
    options,
    payload,
    paymentCompleted.name
  );
  return order.update({ ...changes, orderStatus: OrderStatus.COMPLETE });
}

/**
 * Callback invoked by shipping adapter when order is picked up.
 * @param {{model:Order}} options
 * @param {string} shipmentId
 */
export async function orderShipped(options = {}, payload = {}) {
  const { model: order } = options;
  const shipmentPayload = checkPayload(
    "shipmentId",
    options,
    payload,
    orderShipped.name
  );
  return order.update({
    shipmentId: shipmentPayload.shipmentId,
    orderStatus: OrderStatus.SHIPPING,
  });
}

/**
 * Callback invoked when order is ready for pickup
 * @param {{ model:Order }} options
 */
export async function orderPicked(options = {}, payload = {}) {
  const { model: order } = options;
  const changes = checkPayload(
    "pickupAddress",
    options,
    payload,
    addressValidated.name
  );
  return order.update(changes);
}

/**
 * Callback invoked when shippingAddress is verified (and possibly corrected)
 * @param {{ model:Order }} options
 * @param {string} shippingAddress
 */
export async function addressValidated(options = {}, payload = {}) {
  const { model: order } = options;
  const addressPayload = checkPayload(
    "shippingAddress",
    options,
    payload,
    addressValidated.name
  );
  return order.update({ shippingAddress: addressPayload.shippingAddress });
}

/**
 * Called by adapter when port recevies response from payment service.
 * @param {{ model:Order }} options
 * @param {*} paymentAuthorization
 */
export async function paymentAuthorized(options = {}, payload = {}) {
  const { model: order } = options;
  const changes = checkPayload(
    "paymentAuthorization",
    options,
    payload,
    paymentAuthorized.name
  );
  return order.update(changes);
}

/**
 * Called to refund payment when order is canceled.
 * @param {*} options
 * @param {*} payload
 * @returns
 */
export async function refundPayment(options = {}, payload = {}) {
  const { model: order } = options;
  const changes = checkPayload(
    "refundReceipt",
    options,
    payload,
    refundPayment.name
  );
  return order.update(changes);
}

/**
 * Copy existing customer data into the order or create new customer.
 *
 * @param {Order} order
 * @throws {"InvalidCustomerId"}
 */
async function getCustomerOrder(order) {
  // If an id is given, try fetching the model
  if (order.customerId) {
    // Use the relation defined in the spec
    const customer = await order.customer();

    if (!customer) {
      throw new Error("invalid customer id", order.customerId);
    }

    // Add customer data to the order
    const decrypted = customer.decrypt();
    const updated = await order.update({
      creditCardNumber: decrypted.creditCardNumber,
      shippingAddress: decrypted.shippingAddress,
      billingAddress: decrypted.billingAddress,
      email: decrypted.email,
      lastName: decrypted.lastName,
      firstName: customer.firstName,
    });
    return updated;
  }
  // Tell the customer service to try creating a
  // new customer. The framework has a built-in handler
  // that calls the model's `addModel` function.
  if (order.saveShippingDetails) {
    const customer = await order.customer({
      ...order,
      ...order.decrypt(),
    });

    return order;
    // if (customer) {
    //   return order.update({ customerId: customer.getId() });
    // }
  }

  return order;
}

/**
 * Starts the order service workflow.
 */
const OrderActions = {
  /**
   * Verifies the shipping address and authorizes payment
   * for the order total when the order is first created,
   * or when it is updated while still in pending status.
   *
   * @param {Order} order - the order
   */
  [OrderStatus.PENDING]: async order => {
    try {
      // If requester is a customer, get shipping data from customer service.
      const customerOrder = await getCustomerOrder(order);

      // Authorize payment for the current total.
      const payment = await async(
        customerOrder.authorizePayment(paymentAuthorized)
      );

      if (!payment.ok) {
        throw new Error("payment auth problem", payment.error);
      }

      if (!payment.object.paymentAccepted()) {
        throw new Error("payment authorization declined");
      }

      // Now verify address
      const address = await async(
        payment.object.validateAddress(addressValidated)
      );

      if (customerOrder.autoCheckout()) {
        handleStatusChange(
          await customerOrder.update(
            {
              ...payment.object,
              ...(address.ok ? address.object : {}),
              orderStatus: OrderStatus.APPROVED,
            },
            false
          )
        );
      }
    } catch (e) {
      console.error(e);
    }
  },
  /**
   * If payment is authorized, notify inventory.
   * This kicks off the rest of the workflow,
   * which is controlled through port config.
   * @param {Order} order
   */
  [OrderStatus.APPROVED]: async order => {
    try {
      if (order.paymentAccepted()) {
        return order.pickOrder(orderPicked);
      }
      await order.emit("PayAuthFail", "Payment authorization problem");
      return order;
    } catch (error) {
      handleError(error, order, OrderStatus.APPROVED);
    }
  },
  /**
   * Useful if we need to restart tracking.
   * @param {Order} order
   */
  [OrderStatus.SHIPPING]: async order => {
    try {
      // don't block the caller waiting for this
      // order.trackShipment(trackingUpdate);
      console.debug({ func: OrderStatus.SHIPPING, order });
    } catch (error) {
      handleError(error, order, OrderStatus.SHIPPING);
    }
  },
  /**
   * Start cancellation process.
   * @param {Order} order
   */
  [OrderStatus.CANCELED]: async order => {
    try {
      console.debug({
        func: OrderStatus.CANCELED,
        desc: "calling undo",
        orderNo: order.orderNo,
      });
      return order.undo();
    } catch (error) {
      handleError(error, order, OrderStatus.CANCELED);
    }
  },
  /**
   *
   * @param {Order} order
   */
  [OrderStatus.COMPLETE]: async order => {
    console.log("do customer sentiment etc");
    return;
  },
};

/**
 * Call order service workflow - controlled by status
 * @param {Order} order
 */
export async function handleStatusChange(order) {
  return OrderActions[order.orderStatus](order);
}

/**
 * Called on create, update, delete of model instance.
 * @param {{model:Order}}
 */
export async function handleOrderEvent({ model: order, eventType, changes }) {
  if (changes?.orderStatus || eventType === "CREATE") {
    return handleStatusChange(order);
  }
}

/**
 * Require a signature for orders $1000 and up
 * @param {*} input
 * @param {*} orderTotal
 */
function needsSignature(input, orderTotal) {
  return typeof input === "boolean" ? input : orderTotal > 999.99;
}

/**
 * Returns factory function for the Order model.
 * @param {*} dependencies - inject dependencies
 */
export function makeOrderFactory(dependencies) {
  return async function createOrder({
    orderItems,
    email = null,
    lastName = null,
    firstName = null,
    customerId = null,
    billingAddress = null,
    shippingAddress = null,
    creditCardNumber = null,
    shippingPriority = null,
    autoCheckout = false,
    saveShippingDetails = false,
    requireSignature,
  }) {
    const total = calcTotal(orderItems);
    const signatureRequired = needsSignature(requireSignature, total);
    const order = {
      email,
      lastName,
      firstName,
      customerId,
      orderItems,
      creditCardNumber,
      billingAddress,
      shippingAddress,
      signatureRequired,
      saveShippingDetails,
      shippingPriority,
      estimatedArrival: null,
      [orderTotal]: total,
      [orderStatus]: OrderStatus.PENDING,
      [orderNo]: dependencies.uuid(),
      /**
       * Has payment for the order been authorized?
       */
      paymentAccepted() {
        return (
          (this.paymentAuthorization && !this[prevmodel]) ||
          (this.paymentAuthorization &&
            this[prevmodel].orderTotal <= this.orderTotal)
        );
      },
      /**
       * Proceed to checkout automatically or wait for approval?
       */
      autoCheckout() {
        return autoCheckout;
      },
    };

    return Object.freeze(order);
  };
}

/**
 * Called as command to approve/submit order.
 * @param {*} order
 */
export async function approve(order) {
  const updated = await order.update({ orderStatus: OrderStatus.APPROVED });
  handleStatusChange(updated);
}

/**
 * Called as command to cancel order.
 * @param {*} order
 */
export async function cancel(order) {
  const updated = await order.update({ orderStatus: OrderStatus.CANCELED });
  return handleStatusChange(updated);
}

export async function submit(order) {
  return approve(order);
}

/**
 *
 * @param {{model:Order}} param0
 */
export function errorCallback({ port, model: order, error }) {
  console.error("error...", port, error);
  return order.undo();
  ``;
}

/**
 *
 * @param {{model:Order}} param0
 */
export function timeoutCallback({ port, ports, adapterFn, model: order }) {
  console.error("timeout...", port);
}

/**
 * Start process to return canceled order items to inventory.
 * @param {*} param0
 */
export async function returnInventory(order) {
  console.log(returnInventory.name);
  return order.update({ orderStatus: OrderStatus.CANCELED });
}

export async function returnShipment(order) {
  console.log(returnShipment.name);
  return order.update({ orderStatus: OrderStatus.CANCELED });
}

export async function returnDelivery(order) {
  console.log(returnDelivery.name);
  return order.update({ orderStatus: OrderStatus.CANCELED });
}

export async function cancelPayment(order) {
  console.log(cancelPayment.name);
  return order.update({ orderStatus: OrderStatus.CANCELED });
}
