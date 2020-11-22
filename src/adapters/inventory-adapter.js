'use strict'

/**
 * @typedef {string|RegExp} topic
 * @callback eventCallback
 * @param {string} message
 * @param {{
 *  getModel:function():object,
 *  unsubscribe:function()
 * }} subscription
 * @typedef {eventCallback} shipOrderType
 * @param topic,
 * @param eventCallback
 * @typedef {{
 *  shipOrder:shipOrderType,
 *  trackShipment:function(),
 *  verifyDelivery:function()
 * }} InventoryAdapter
 * @typedef {import('../models/order').Order} Order
 * @typedef {InventoryAdapter} service 
 * @typedef {{
 *  listen:function(topic,RegExp,eventCallback)
 *  notify:function(topic,eventCallback)
 * }} event
 * @callback adapterFactory
 * @param {service} service
 * @param {event} event
 * @returns {function({
 * model:Order,
 * resolve:function()
 * ,args:[
 * eventCallback, 
 * options:{}]
 * })}
   
 }]})} 
 *
 */

/**
 * @type {adapterFactory}
 */
export function fillOrder(service) {

  return async function ({
    model: order,
    resolve,
    args: [callback, options]
  }) {

    await order.listen({
      once: true,
      model: order,
      id: order.orderNo,
      topic: 'orderChannel',
      filter: order.orderNo,
      callback: async ({
        message
      }) => {
        const event = JSON.parse(message);
        console.log('recieved event: ', event);
        const eventName = event.eventName;
        const pickupAddress = event.eventData.warehouse_addr;
        callback({
          order,
          pickupAddress,
          eventName,
          resolve
        });
      }
    });

    await order.notify('inventoryChannel', JSON.stringify({
      eventType: 'Command',
      eventTime: new Date().toUTCString(),
      eventData: {
        replyChannel: 'orderChannel',
        commandName: 'fillOrder',
        commandArgs: {
          lineItems: order.orderItems,
          externalId: order.orderNo
        }
      },
      eventSource: 'orderService'
    }));

    if (options?.resolve) {
      resolve(order);
    }
  }

}