"use strict";

/**
 * @typedef Customer
 * @property {string} email
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} creditCardNumber
 * @property {Symbol} id
 */

export function makeCustomerFactory(dependencies) {
  return function createCustomer({
    firstName,
    lastName,
    shippingAddress,
    creditCardNumber,
    billingAddress = shippingAddress,
    phone,
    email,
    userId,
  } = {}) {
    return Object.freeze({
      customerId: dependencies.uuid(),
      firstName,
      lastName,
      creditCardNumber,
      shippingAddress,
      billingAddress,
      phone,
      email,
      userId,
    });
  };
}

export async function okToDelete(customer) {
  try {
    const orders = await customer.orders();
    return orders.length > 0;
  } catch (error) {
    console.error({ func: okToDelete.name, error });
    return true;
  }
}
