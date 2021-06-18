exports.id = "src_adapters_index_js";
exports.ids = ["src_adapters_index_js"];
exports.modules = {

/***/ "./src/adapters/address-adapter.js":
/*!*****************************************!*\
  !*** ./src/adapters/address-adapter.js ***!
  \*****************************************/
/*! namespace exports */
/*! export validateAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateAddress": () => /* binding */ validateAddress
/* harmony export */ });

/**
 * @typedef {import('../models/order').Order} Order
 * @typedef {string} address
 * @callback adapterFactory
 * @param {service} service
 * @returns {function({model:Order})} - verified/corrected address
 */

/**
 *
 * @type {adapterFactory}
 * @param {import("../services/address-service").Address} service
 */

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function validateAddress(service) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
      var order, _options$args, callback, shippingAddress, update;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              order = options.model, _options$args = _slicedToArray(options.args, 1), callback = _options$args[0];
              _context.prev = 1;
              _context.next = 4;
              return service.validateAddress(order.decrypt().shippingAddress);

            case 4:
              shippingAddress = _context.sent;
              _context.next = 7;
              return callback(options, {
                shippingAddress: shippingAddress
              });

            case 7:
              update = _context.sent;
              return _context.abrupt("return", update);

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.error({
                func: validateAddress.name,
                error: _context.t0,
                options: options
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/***/ }),

/***/ "./src/adapters/event-adapter.js":
/*!***************************************!*\
  !*** ./src/adapters/event-adapter.js ***!
  \***************************************/
/*! namespace exports */
/*! export listen [provided] [no usage info] [missing usage info prevents renaming] */
/*! export notify [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listen": () => /* binding */ listen,
/* harmony export */   "notify": () => /* binding */ notify
/* harmony export */ });
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/event-service */ "./src/services/event-service.js");

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 * @type {Map<any,Map<string,*>>}
 */

var subscriptions = new Map();
/**
 * Test the filter.
 * @param {string} message
 * @returns {function(string|RegExp):boolean} did the filter match?
 */

function filterMatches(message) {
  return function (filter) {
    var regex = new RegExp(filter);
    var result = regex.test(message);
    if (result) console.debug({
      func: filterMatches.name,
      filter: filter,
      result: result,
      message: message.substring(0, 30).concat("...")
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


var Subscription = function Subscription(_ref) {
  var id = _ref.id,
      callback = _ref.callback,
      topic = _ref.topic,
      filters = _ref.filters,
      once = _ref.once,
      model = _ref.model;
  return {
    /**
     * unsubscribe from topic
     */
    unsubscribe: function unsubscribe() {
      subscriptions.get(topic)["delete"](id);
    },
    getId: function getId() {
      return id;
    },
    getModel: function getModel() {
      return model;
    },
    getSubscriptions: function getSubscriptions() {
      return _toConsumableArray(subscriptions.entries());
    },

    /**
     * Filter message and invoke callback
     * @param {string} message
     */
    filter: function filter(message) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!filters) {
                  _context.next = 6;
                  break;
                }

                if (!filters.every(filterMatches(message))) {
                  _context.next = 5;
                  break;
                }

                if (once) {
                  // Only looking for 1 msg, got it.
                  _this.unsubscribe();
                }

                callback({
                  message: message,
                  subscription: _this
                });
                return _context.abrupt("return");

              case 5:
                return _context.abrupt("return");

              case 6:
                // no filters defined, just invoke the callback.
                callback({
                  message: message,
                  subscription: _this
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  };
};
/**
 * Listen for external events with default event service if none specified.
 * @type {adapterFactory}
 * @param {import('../services/event-service').Event} [service] - has default service
 */


function listen() {
  var service = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _services_event_service__WEBPACK_IMPORTED_MODULE_0__.Event;
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(options) {
      var model, _options$args, arg, subscription;

      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              model = options.model, _options$args = _slicedToArray(options.args, 1), arg = _options$args[0];
              subscription = Subscription(_objectSpread({
                model: model
              }, arg));

              if (!subscriptions.has(arg.topic)) {
                _context4.next = 5;
                break;
              }

              subscriptions.get(arg.topic).set(arg.id, subscription);
              return _context4.abrupt("return", subscription);

            case 5:
              subscriptions.set(arg.topic, new Map().set(arg.id, subscription));

              if (!service.listening) {
                service.listen(/Channel/, /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref3) {
                    var topic, message;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            topic = _ref3.topic, message = _ref3.message;

                            if (subscriptions.has(topic)) {
                              subscriptions.get(topic).forEach( /*#__PURE__*/function () {
                                var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(subscription) {
                                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                    while (1) {
                                      switch (_context2.prev = _context2.next) {
                                        case 0:
                                          _context2.next = 2;
                                          return subscription.filter(message);

                                        case 2:
                                        case "end":
                                          return _context2.stop();
                                      }
                                    }
                                  }, _callee2);
                                }));

                                return function (_x3) {
                                  return _ref5.apply(this, arguments);
                                };
                              }());
                            }

                          case 2:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x2) {
                    return _ref4.apply(this, arguments);
                  };
                }());
              }

              return _context4.abrupt("return", subscription);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
}
/**
 * @type {adapterFactory}
 * @returns {function(topic, eventData)}
 */

function notify() {
  var service = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _services_event_service__WEBPACK_IMPORTED_MODULE_0__.Event;
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref6) {
      var model, _ref6$args, topic, message;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              model = _ref6.model, _ref6$args = _slicedToArray(_ref6.args, 2), topic = _ref6$args[0], message = _ref6$args[1];
              console.debug("sending...", {
                topic: topic,
                message: JSON.parse(message)
              });
              _context5.next = 4;
              return service.notify(topic, message);

            case 4:
              return _context5.abrupt("return", model);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x4) {
      return _ref7.apply(this, arguments);
    };
  }();
}

/***/ }),

/***/ "./src/adapters/index.js":
/*!*******************************!*\
  !*** ./src/adapters/index.js ***!
  \*******************************/
/*! namespace exports */
/*! export authorizePayment [provided] [no usage info] [missing usage info prevents renaming] -> ./src/adapters/payment-adapter.js .authorizePayment */
/*! export completePayment [provided] [no usage info] [missing usage info prevents renaming] -> ./src/adapters/payment-adapter.js .completePayment */
/*! export listen [provided] [no usage info] [missing usage info prevents renaming] -> ./src/adapters/event-adapter.js .listen */
/*! export notify [provided] [no usage info] [missing usage info prevents renaming] -> ./src/adapters/event-adapter.js .notify */
/*! export pickOrder [provided] [no usage info] [missing usage info prevents renaming] -> ./src/adapters/inventory-adapter.js .pickOrder */
/*! export refundPayment [provided] [no usage info] [missing usage info prevents renaming] -> ./src/adapters/payment-adapter.js .refundPayment */
/*! export shipOrder [provided] [no usage info] [missing usage info prevents renaming] -> ./src/adapters/shipping-adapter.js .shipOrder */
/*! export trackShipment [provided] [no usage info] [missing usage info prevents renaming] -> ./src/adapters/shipping-adapter.js .trackShipment */
/*! export validateAddress [provided] [no usage info] [missing usage info prevents renaming] -> ./src/adapters/address-adapter.js .validateAddress */
/*! export verifyDelivery [provided] [no usage info] [missing usage info prevents renaming] -> ./src/adapters/shipping-adapter.js .verifyDelivery */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateAddress": () => /* reexport safe */ _address_adapter__WEBPACK_IMPORTED_MODULE_0__.validateAddress,
/* harmony export */   "authorizePayment": () => /* reexport safe */ _payment_adapter__WEBPACK_IMPORTED_MODULE_1__.authorizePayment,
/* harmony export */   "completePayment": () => /* reexport safe */ _payment_adapter__WEBPACK_IMPORTED_MODULE_1__.completePayment,
/* harmony export */   "refundPayment": () => /* reexport safe */ _payment_adapter__WEBPACK_IMPORTED_MODULE_1__.refundPayment,
/* harmony export */   "shipOrder": () => /* reexport safe */ _shipping_adapter__WEBPACK_IMPORTED_MODULE_2__.shipOrder,
/* harmony export */   "trackShipment": () => /* reexport safe */ _shipping_adapter__WEBPACK_IMPORTED_MODULE_2__.trackShipment,
/* harmony export */   "verifyDelivery": () => /* reexport safe */ _shipping_adapter__WEBPACK_IMPORTED_MODULE_2__.verifyDelivery,
/* harmony export */   "listen": () => /* reexport safe */ _event_adapter__WEBPACK_IMPORTED_MODULE_3__.listen,
/* harmony export */   "notify": () => /* reexport safe */ _event_adapter__WEBPACK_IMPORTED_MODULE_3__.notify,
/* harmony export */   "pickOrder": () => /* reexport safe */ _inventory_adapter__WEBPACK_IMPORTED_MODULE_4__.pickOrder
/* harmony export */ });
/* harmony import */ var _address_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address-adapter */ "./src/adapters/address-adapter.js");
/* harmony import */ var _payment_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-adapter */ "./src/adapters/payment-adapter.js");
/* harmony import */ var _shipping_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipping-adapter */ "./src/adapters/shipping-adapter.js");
/* harmony import */ var _event_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-adapter */ "./src/adapters/event-adapter.js");
/* harmony import */ var _inventory_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory-adapter */ "./src/adapters/inventory-adapter.js");







/**
 * @typedef {import('../models').Model} Model
 * @typedef {function(function(eventCallback):Promise<Model>)} adapterFunction
 */

/***/ }),

/***/ "./src/adapters/inventory-adapter.js":
/*!*******************************************!*\
  !*** ./src/adapters/inventory-adapter.js ***!
  \*******************************************/
/*! namespace exports */
/*! export pickOrder [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pickOrder": () => /* binding */ pickOrder
/* harmony export */ });

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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function pickOrder(service) {
  return function (options) {
    var order = options.model,
        _options$args = _slicedToArray(options.args, 1),
        _callback = _options$args[0];

    return new Promise(function (resolve, reject) {
      // start listening first then send the event
      return order.listen({
        once: true,
        model: order,
        id: order.orderNo,
        topic: "orderChannel",
        filters: [order.orderNo, "orderPicked", "warehouse_addr"],
        callback: function () {
          var _callback2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
            var message, event, pickupAddress, newOrder;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    message = _ref.message;
                    _context.prev = 1;
                    event = JSON.parse(message);
                    console.log("recieved event: ", event);
                    pickupAddress = event.eventData.warehouse_addr;
                    _context.next = 7;
                    return _callback(options, {
                      pickupAddress: pickupAddress
                    });

                  case 7:
                    newOrder = _context.sent;
                    resolve(newOrder); // hold promise until we get an answer

                    _context.next = 14;
                    break;

                  case 11:
                    _context.prev = 11;
                    _context.t0 = _context["catch"](1);
                    reject(_context.t0);

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[1, 11]]);
          }));

          function callback(_x) {
            return _callback2.apply(this, arguments);
          }

          return callback;
        }()
      }).then(function () {
        return order.notify("inventoryChannel", JSON.stringify({
          eventType: "Command",
          eventTime: new Date().toUTCString(),
          eventSource: "orderService",
          eventData: {
            replyChannel: "orderChannel",
            commandName: "pickOrder",
            commandArgs: {
              lineItems: order.orderItems,
              externalId: order.orderNo
            }
          }
        }));
      })["catch"](function (reason) {
        throw new Error(reason);
      });
    });
  };
}

/***/ }),

/***/ "./src/adapters/payment-adapter.js":
/*!*****************************************!*\
  !*** ./src/adapters/payment-adapter.js ***!
  \*****************************************/
/*! namespace exports */
/*! export authorizePayment [provided] [no usage info] [missing usage info prevents renaming] */
/*! export completePayment [provided] [no usage info] [missing usage info prevents renaming] */
/*! export refundPayment [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authorizePayment": () => /* binding */ authorizePayment,
/* harmony export */   "completePayment": () => /* binding */ completePayment,
/* harmony export */   "refundPayment": () => /* binding */ refundPayment
/* harmony export */ });

/**
 * @typedef {import('../models/order').Order} Order
 * @typedef
 * @callback adapterFactory
 * @param {service} service
 * @returns {function({model:Order,parms:any[]})}
 */

/**
 * @type {adapterFactory}
 * @param {import("../services/payment-service").PaymentService} service
 */

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function authorizePayment(service) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
      var order, _options$args, callback, paymentAuthorization;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              order = options.model, _options$args = _slicedToArray(options.args, 1), callback = _options$args[0];
              _context.next = 3;
              return service.authorizePayment(order.orderNo, 12.0, "src", "ibm", false);

            case 3:
              paymentAuthorization = _context.sent;
              return _context.abrupt("return", callback(options, {
                paymentAuthorization: paymentAuthorization
              }));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}
/**
 * @type {adapterFactory}
 */

function completePayment(service) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
      var order, _options$args2, callback, confirmationCode, newOrder;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              order = options.model, _options$args2 = _slicedToArray(options.args, 1), callback = _options$args2[0];
              _context2.next = 3;
              return service.completePayment(order);

            case 3:
              confirmationCode = _context2.sent;
              _context2.next = 6;
              return callback(options, {
                confirmationCode: confirmationCode
              });

            case 6:
              newOrder = _context2.sent;
              return _context2.abrupt("return", newOrder);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
}
/**
 * @type {adapterFactory}
 */

function refundPayment(service) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
      var order, _options$args3, callback, newOrder;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              order = options.model, _options$args3 = _slicedToArray(options.args, 1), callback = _options$args3[0];
              _context3.next = 3;
              return service.refundPayment(order);

            case 3:
              _context3.next = 5;
              return callback(options);

            case 5:
              newOrder = _context3.sent;
              return _context3.abrupt("return", newOrder);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
}

/***/ }),

/***/ "./src/adapters/shipping-adapter.js":
/*!******************************************!*\
  !*** ./src/adapters/shipping-adapter.js ***!
  \******************************************/
/*! namespace exports */
/*! export shipOrder [provided] [no usage info] [missing usage info prevents renaming] */
/*! export trackShipment [provided] [no usage info] [missing usage info prevents renaming] */
/*! export verifyDelivery [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var __filename = "/index.js";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipOrder": () => /* binding */ shipOrder,
/* harmony export */   "trackShipment": () => /* binding */ trackShipment,
/* harmony export */   "verifyDelivery": () => /* binding */ verifyDelivery
/* harmony export */ });

/**
 * @callback portCallback
 * @param {{options:{}}}
 * @param {{payload:{[key]:string}}}
 */

/**
 * @typedef {string} message
 * @callback eventCallback
 * @param {string} message
 * @param {{
 *  unsubscribe:function(),
 *  filter:function(message):boolean
 * }} subscription
 */

/**
 * @typedef {import('../models/order').Order} Order
 */

/**
 * @typedef {import("../services/shipping-service").shippingService} shippingService
 */

/**
 * @typedef {{
 *  listen:function(topic,RegExp,portCallback)
 *  notify:function(topic,eventCallback)
 * }} event
 */

/**
 * @callback adapterFactory
 * @param {service} service
 * @returns {function({model:Order,args:[portCallback]}):Order}
 */

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ORDER_SERVICE = "orderService";
var ORDER_TOPIC = "orderChannel";

var handleError = function handleError(error) {
  var reject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var func = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  console.error({
    file: __filename,
    func: func,
    error: error
  });
  if (reject) reject(error);
};
/**
 * Call `shipOrder` to request shipment of the order items.
 * @param {import('../services/shipping-service').shippingService} service
 * @type {adapterFactory}
 * @returns {function(options):Promise<Order>}
 * Return a promise that is resolved once we receive
 * a response message from the shipping service. Start
 * listening for the response first and then send the
 * request message.
 *
 */


function shipOrder(service) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
      var order, _options$args, callback, shipOrderCallback, callShipOrder;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              callShipOrder = function _callShipOrder() {
                return order.notify(service.topic, JSON.stringify(service.shipOrder({
                  shipTo: order.decrypt().shippingAddress,
                  shipFrom: order.pickupAddress,
                  lineItems: order.orderItems,
                  signature: order.signatureRequired,
                  externalId: order.orderNo,
                  requester: ORDER_SERVICE,
                  respondOn: ORDER_TOPIC
                })));
              };

              shipOrderCallback = function _shipOrderCallback(resolve, reject) {
                return /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
                    var message, event, payload, updated;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            message = _ref2.message;
                            _context.prev = 1;
                            event = JSON.parse(message);
                            console.debug("received event... ", event);
                            payload = service.getPayload(shipOrder.name, event);
                            _context.next = 7;
                            return callback(options, payload);

                          case 7:
                            updated = _context.sent;
                            resolve(updated);
                            _context.next = 14;
                            break;

                          case 11:
                            _context.prev = 11;
                            _context.t0 = _context["catch"](1);
                            handleError(_context.t0, reject, shipOrderCallback.name);

                          case 14:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[1, 11]]);
                  }));

                  return function (_x2) {
                    return _ref3.apply(this, arguments);
                  };
                }();
              };

              order = options.model, _options$args = _slicedToArray(options.args, 1), callback = _options$args[0];
              /**
               * Called by the event listener when the shipOrder
               * response message arrives. Resolve the promise
               * the caller has been waiting on since we sent
               * the request message.
               * @param {function(Order)} resolve
               * @param {function(Error)} reject
               * @returns {function(message):Promise<Order>}
               */

              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                return order.listen({
                  once: true,
                  model: order,
                  id: order.orderNo,
                  topic: ORDER_TOPIC,
                  filters: [order.orderNo, "orderShipped", "shipmentId"],
                  callback: shipOrderCallback(resolve, reject)
                }).then(callShipOrder)["catch"](handleError);
              }));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}
/**
 * @param {import('../services/shipping-service').shippingService} service
 * @type {adapterFactory}
 */

function trackShipment(service) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(options) {
      var order, _options$args2, callback, trackShipmentCallback, callTrackShipment;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              callTrackShipment = function _callTrackShipment() {
                return order.notify(service.topic, JSON.stringify(service.trackShipment({
                  shipmentId: order.shipmentId,
                  externalId: order.orderNo,
                  requester: ORDER_SERVICE,
                  respondOn: ORDER_TOPIC
                })));
              };

              trackShipmentCallback = function _trackShipmentCallbac(resolve, reject) {
                return /*#__PURE__*/function () {
                  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref5) {
                    var message, subscription, event, payload, updated;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            message = _ref5.message, subscription = _ref5.subscription;
                            _context3.prev = 1;
                            event = JSON.parse(message);
                            console.debug("received event...", event);
                            payload = service.getPayload(trackShipment.name, event);
                            _context3.next = 7;
                            return callback(options, payload);

                          case 7:
                            updated = _context3.sent;

                            if (updated.trackingStatus === "orderDelivered") {
                              subscription.unsubscribe();
                              resolve(updated);
                            }

                            _context3.next = 14;
                            break;

                          case 11:
                            _context3.prev = 11;
                            _context3.t0 = _context3["catch"](1);
                            handleError(_context3.t0, reject, trackShipment.name);

                          case 14:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, null, [[1, 11]]);
                  }));

                  return function (_x4) {
                    return _ref6.apply(this, arguments);
                  };
                }();
              };

              order = options.model, _options$args2 = _slicedToArray(options.args, 1), callback = _options$args2[0];
              /**
               *
               * @param {function(Order)} resolve resolve the promise
               * @param {function(Error)} reject reject promise
               */

              return _context5.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(resolve, reject) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          return _context4.abrupt("return", order.listen({
                            once: false,
                            model: order,
                            id: order.orderNo,
                            topic: ORDER_TOPIC,
                            filters: [order.orderNo, "trackingId", "trackingStatus"],
                            callback: trackShipmentCallback(resolve, reject)
                          }).then(callTrackShipment)["catch"](handleError));

                        case 1:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x5, _x6) {
                  return _ref7.apply(this, arguments);
                };
              }()));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
}
/**
 * @param {import('../services/shipping-service').shippingService} service
 * @type {adapterFactory}
 */

function verifyDelivery(service) {
  return /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(options) {
      var order, _options$args3, callback, verifyDeliveryCallback, callVerifyDelivery;

      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              callVerifyDelivery = function _callVerifyDelivery() {
                return order.notify(service.topic, JSON.stringify(service.verifyDelivery({
                  trackingId: order.trackingId,
                  externalId: order.orderNo,
                  requester: ORDER_SERVICE,
                  respondOn: ORDER_TOPIC
                })));
              };

              verifyDeliveryCallback = function _verifyDeliveryCallba(resolve, reject) {
                return /*#__PURE__*/function () {
                  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref9) {
                    var message, event, payload, updated;
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            message = _ref9.message;
                            _context6.prev = 1;
                            event = JSON.parse(message);
                            console.debug("received event...", event);
                            payload = service.getPayload(verifyDelivery.name, event);
                            _context6.next = 7;
                            return callback(options, payload);

                          case 7:
                            updated = _context6.sent;
                            resolve(updated);
                            _context6.next = 14;
                            break;

                          case 11:
                            _context6.prev = 11;
                            _context6.t0 = _context6["catch"](1);
                            handleError(_context6.t0, reject, verifyDeliveryCallback.name);

                          case 14:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6, null, [[1, 11]]);
                  }));

                  return function (_x8) {
                    return _ref10.apply(this, arguments);
                  };
                }();
              };

              order = options.model, _options$args3 = _slicedToArray(options.args, 1), callback = _options$args3[0];
              /**
               *
               * @param {function(Order)} resolve
               * @param {function(Error)} reject
               * @returns
               */

              return _context8.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(resolve, reject) {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          return _context7.abrupt("return", order.listen({
                            once: true,
                            model: order,
                            id: order.orderNo,
                            topic: "orderChannel",
                            filters: [order.orderNo, "deliveryVerified", "proofOfDelivery"],
                            callback: verifyDeliveryCallback(resolve, reject)
                          }).then(callVerifyDelivery)["catch"](handleError));

                        case 1:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                return function (_x9, _x10) {
                  return _ref11.apply(this, arguments);
                };
              }()));

            case 4:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x7) {
      return _ref8.apply(this, arguments);
    };
  }();
}

/***/ }),

/***/ "./src/services/event-service.js":
/*!***************************************!*\
  !*** ./src/services/event-service.js ***!
  \***************************************/
/*! namespace exports */
/*! export Event [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Event": () => /* binding */ Event
/* harmony export */ });
/* harmony import */ var kafkajs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kafkajs */ "webpack/sharing/consume/default/kafkajs/kafkajs");
/* harmony import */ var kafkajs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kafkajs__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var brokers = process.env.KAFKA_BROKERS || "localhost:9092";
var topics = new RegExp(process.env.KAFKA_TOPICS) || /Channel/;
var groupId = (process.env.KAFKA_GROUP_ID || "MicroLib") + process.pid;
var kafka = new kafkajs__WEBPACK_IMPORTED_MODULE_0__.Kafka({
  clientId: "MicroLib",
  brokers: brokers.split(",")
});
var consumer = kafka.consumer({
  groupId: groupId
});
var producer = kafka.producer();
/**
 * @typedef {EventService}
 */

var Event = {
  listening: false,
  topics: topics,

  /**
   * Implements event consumer service.
   * @param {string|RegExp} topic
   * @param {function({message, topic})} callback
   */
  listen: function listen(topic, callback) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return consumer.connect();

            case 3:
              _context2.next = 5;
              return consumer.subscribe({
                topic: topic,
                fromBeginning: true
              });

            case 5:
              _this.listening = true;
              _context2.next = 8;
              return consumer.run({
                eachMessage: function () {
                  var _eachMessage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
                    var topic, message;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            topic = _ref.topic, message = _ref.message;

                            try {
                              callback({
                                topic: topic,
                                message: message.value.toString()
                              });
                            } catch (error) {
                              console.error(error);
                            }

                          case 2:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  function eachMessage(_x) {
                    return _eachMessage.apply(this, arguments);
                  }

                  return eachMessage;
                }()
              });

            case 8:
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }))();
  },

  /**
   * Implemements event producer service.
   * @param {string|RegExp} topic
   * @param {string} message
   */
  notify: function notify(topic, message) {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return producer.connect();

            case 3:
              _context3.next = 5;
              return producer.send({
                topic: topic,
                messages: [{
                  value: message
                }]
              });

            case 5:
              _context3.next = 7;
              return producer.disconnect();

            case 7:
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              console.error({
                func: _this2.notify.name,
                error: _context3.t0
              });

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 9]]);
    }))();
  }
};

/***/ })

};
;
//# sourceMappingURL=src_adapters_index_js.js.map