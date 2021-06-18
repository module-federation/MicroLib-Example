"use strict";

/**
 * @typedef {import('../models').Model} Model
 * @typedef {string} serviceName
 *
 * @typedef {Object} EventMessage
 * @property {serviceName} eventSource
 * @property {serviceName|"broadcast"} eventTarget
 * @property {"command"|"commandResponse"|"notification"|"import"} eventType
 * @property {string} eventName
 * @property {string} eventTime
 * @property {string} eventUuid
 * @property {NotificationEvent|ImportEvent|CommandEvent} eventData
 *
 * @typedef {object} ImportEvent
 * @property {"service"|"model"|"adapter"} type
 * @property {string} url
 * @property {string} path
 * @property {string} importRemote
 *
 * @typedef {object} NotificationEvent
 * @property {string|} message
 * @property {"utf8"|Uint32Array} encoding
 *
 * @typedef {Object} CommandEvent
 * @property {string} commandName
 * @property {string} commandResp
 * @property {*} commandArgs
 */

/**
 * @typedef {{
 *  filter:function(message):Promise<void>,
 *  unsubscribe:function()
 * }} Subscription
 * @typedef {string|RegExp} topic
 * @callback eventHandler
 * @param {string} eventData
 * @typedef {eventHandler} notifyType
 * @typedef {{
 * listen:function(topic, x),
 * notify:notifyType
 * }} EventService
 * @callback adapterFactory
 * @param {EventService} service
 * @returns {function(topic, eventHandler)}
 */
import { Event } from "../services/event-service";

/**
 * @type {Map<any,Map<string,*>>}
 */
const subscriptions = new Map();

/**
 * Test the filter.
 * @param {string} message
 * @returns {function(string|RegExp):boolean} did the filter match?
 */
function filterMatches(message) {
  return function (filter) {
    const regex = new RegExp(filter);
    const result = regex.test(message);
    if (result)
      console.debug({
        func: filterMatches.name,
        filter,
        result,
        message: message.substring(0, 30).concat("..."),
      });
    return result;
  };
}

/**
 * @typedef {string} message
 * @typedef {string|RegExp} topic
 * @param {{
 *  id:string,
 *  callback:function(message,Subscription),
 *  topic:topic,
 *  filter:string|RegExp,
 *  once:boolean,
 *  model:import("../models").Model
 * }} options
 */
const Subscription = function ({ id, callback, topic, filters, once, model }) {
  return {
    /**
     * unsubscribe from topic
     */
    unsubscribe() {
      subscriptions.get(topic).delete(id);
    },

    getId() {
      return id;
    },

    getModel() {
      return model;
    },

    getSubscriptions() {
      return [...subscriptions.entries()];
    },

    /**
     * Filter message and invoke callback
     * @param {string} message
     */
    async filter(message) {
      if (filters) {
        // Every filter must match.
        if (filters.every(filterMatches(message))) {
          if (once) {
            // Only looking for 1 msg, got it.
            this.unsubscribe();
          }
          callback({ message, subscription: this });
          return;
        }
        // no match
        return;
      }
      // no filters defined, just invoke the callback.
      callback({ message, subscription: this });
    },
  };
};

/**
 * Listen for external events with default event service if none specified.
 * @type {adapterFactory}
 * @param {import('../services/event-service').Event} [service] - has default service
 */
export function listen(service = Event) {
  return async function (options) {
    const {
      model,
      args: [arg],
    } = options;

    const subscription = Subscription({ model, ...arg });

    if (subscriptions.has(arg.topic)) {
      subscriptions.get(arg.topic).set(arg.id, subscription);
      return subscription;
    }

    subscriptions.set(arg.topic, new Map().set(arg.id, subscription));

    if (!service.listening) {
      service.listen(/Channel/, async function ({ topic, message }) {
        if (subscriptions.has(topic)) {
          subscriptions.get(topic).forEach(async subscription => {
            await subscription.filter(message);
          });
        }
      });
    }
    return subscription;
  };
}

/**
 * @type {adapterFactory}
 * @returns {function(topic, eventData)}
 */
export function notify(service = Event) {
  return async function ({ model, args: [topic, message] }) {
    console.debug("sending...", { topic, message: JSON.parse(message) });
    await service.notify(topic, message);
    return model;
  };
}
