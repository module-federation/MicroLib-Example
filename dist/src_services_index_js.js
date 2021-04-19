exports.id = "src_services_index_js";
exports.ids = ["src_services_index_js"];
exports.modules = {
  /***/ "./src/lib/utils.js":
    /*!**************************!*\
  !*** ./src/lib/utils.js ***!
  \**************************/
    /*! namespace exports */
    /*! export async [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export compose [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export composeAsync [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export decrypt [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export encrypt [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export hash [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export makeArray [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export makeObject [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export uuid [provided] [no usage info] [missing usage info prevents renaming] */
    /*! other exports [not provided] [no usage info] */
    /*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ compose: () => /* binding */ compose,
        /* harmony export */ composeAsync: () => /* binding */ composeAsync,
        /* harmony export */ encrypt: () => /* binding */ encrypt,
        /* harmony export */ decrypt: () => /* binding */ decrypt,
        /* harmony export */ hash: () => /* binding */ hash,
        /* harmony export */ uuid: () => /* binding */ uuid,
        /* harmony export */ makeArray: () => /* binding */ makeArray,
        /* harmony export */ makeObject: () => /* binding */ makeObject,
        /* harmony export */ async: () => /* binding */ async,
        /* harmony export */
      });
      /* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! crypto */ "crypto"
      );
      /* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        crypto__WEBPACK_IMPORTED_MODULE_0__
      );

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            );
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              );
            });
          }
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function compose() {
        for (
          var _len = arguments.length, funcs = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          funcs[_key] = arguments[_key];
        }

        return function (initVal) {
          return funcs.reduceRight(function (val, func) {
            return func(val);
          }, initVal);
        };
      }
      function composeAsync() {
        for (
          var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          funcs[_key2] = arguments[_key2];
        }

        return function (initVal) {
          return funcs.reduceRight(function (val, func) {
            return val.then(func);
          }, Promise.resolve(initVal));
        };
      }
      var passwd = process.env.ENCRYPTION_PWD;
      var algo = "aes-192-cbc";
      var key = crypto__WEBPACK_IMPORTED_MODULE_0___default().scryptSync(
        passwd,
        "salt",
        24
      );
      var iv = Buffer.alloc(16, 0);
      function encrypt(text) {
        var cipher = crypto__WEBPACK_IMPORTED_MODULE_0___default().createCipheriv(
          algo,
          key,
          iv
        );
        var encrypted = cipher.update(text, "utf8", "hex");
        encrypted += cipher["final"]("hex");
        return encrypted;
      }
      function decrypt(cipherText) {
        console.log("decrypt(%s)", cipherText);
        var decipher = crypto__WEBPACK_IMPORTED_MODULE_0___default().createDecipheriv(
          algo,
          key,
          iv
        );
        var decrypted = decipher.update(cipherText, "hex", "utf8");
        decrypted += decipher["final"]("utf8");
        return decrypted;
      }
      function hash(data) {
        return crypto__WEBPACK_IMPORTED_MODULE_0___default()
          .createHash("sha1")
          .update(data)
          .digest("hex");
      }
      function uuid() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
          /[018]/g,
          function (c) {
            return (
              c ^
              (crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(
                16
              )[0] &
                (15 >> (c / 4)))
            ).toString(16);
          }
        );
      }
      function makeArray(v) {
        return Array.isArray(v) ? v : [v];
      }
      function makeObject(prop) {
        if (Array.isArray(prop)) {
          return prop.reduce(function (p, c) {
            return _objectSpread(_objectSpread({}, p), c);
          });
        }

        return prop;
      }
      /**
       *
       * @param {Promise<{
       * ok:()=>any,
       *
       * }} promise
       * @returns
       */

      function async(promise) {
        return promise
          .then(function (result) {
            return {
              ok: true,
              object: result,
              asObject: function asObject() {
                return makeObject(result);
              },
              asArray: function asArray() {
                return makeArray(result);
              },
            };
          })
          ["catch"](function (error) {
            console.error(error);
            return Promise.resolve({
              ok: false,
              error: error,
            });
          });
      }

      /***/
    },

  /***/ "./src/services/address-service.js":
    /*!*****************************************!*\
  !*** ./src/services/address-service.js ***!
  \*****************************************/
    /*! namespace exports */
    /*! export Address [provided] [no usage info] [missing usage info prevents renaming] */
    /*! other exports [not provided] [no usage info] */
    /*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Address: () => /* binding */ Address,
        /* harmony export */
      });

      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "next",
                value
              );
            }
            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "throw",
                err
              );
            }
            _next(undefined);
          });
        };
      }

      var uuid = __webpack_require__(/*! ../lib/utils */ "./src/lib/utils.js")
        .uuid;

      var SmartyStreetsSDK = __webpack_require__(
        /*! smartystreets-javascript-sdk */ "webpack/sharing/consume/default/smartystreets-javascript-sdk/smartystreets-javascript-sdk"
      );

      var SmartyStreetsCore = SmartyStreetsSDK.core;
      var Lookup = SmartyStreetsSDK.usStreet.Lookup; // for Server-to-server requests, use this code:

      var disabled = process.env.SMARTY_DISABLED || false;
      var authId = process.env.SMARTY_AUTH_ID;
      var authToken = process.env.SMARTY_AUTH_TOKEN;
      var credentials = new SmartyStreetsCore.StaticCredentials(
        authId,
        authToken
      );
      var client = SmartyStreetsCore.buildClient.usStreet(credentials);
      /**
       * @typedef {{function(address):Promise<string>}} Address
       */

      var Address = {
        // Documentation for input fields can be found at:
        // https://smartystreets.com/docs/us-street-api#input-fields
        validateAddress: function validateAddress(address) {
          return _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
              var lookup, response, candidate, validatedAddress;
              return regeneratorRuntime.wrap(
                function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        console.log(
                          "REAL validating address...".concat(address)
                        );

                        if (address) {
                          _context.next = 4;
                          break;
                        }

                        console.log("no address");
                        return _context.abrupt("return");

                      case 4:
                        if (!disabled) {
                          _context.next = 7;
                          break;
                        }

                        console.log("address service disabled");
                        return _context.abrupt("return", address);

                      case 7:
                        lookup = new Lookup();
                        lookup.inputId = uuid();
                        lookup.street = address;
                        lookup.maxCandidates = 1;
                        _context.prev = 11;
                        _context.next = 14;
                        return client.send(lookup);

                      case 14:
                        response = _context.sent;
                        _context.next = 20;
                        break;

                      case 17:
                        _context.prev = 17;
                        _context.t0 = _context["catch"](11);
                        throw new Error(_context.t0);

                      case 20:
                        candidate = response.lookups[0].result[0];

                        if (candidate) {
                          _context.next = 23;
                          break;
                        }

                        throw new Error("invalid address");

                      case 23:
                        validatedAddress = [
                          candidate.deliveryLine1,
                          candidate.deliveryLine2,
                          candidate.lastLine,
                        ].join(" ");
                        console.log("address: ".concat(validatedAddress));

                        if (validatedAddress) {
                          _context.next = 27;
                          break;
                        }

                        throw new Error("invalid address");

                      case 27:
                        return _context.abrupt("return", validatedAddress);

                      case 28:
                      case "end":
                        return _context.stop();
                    }
                  }
                },
                _callee,
                null,
                [[11, 17]]
              );
            })
          )();
        },
      };

      /***/
    },

  /***/ "./src/services/event-service.js":
    /*!***************************************!*\
  !*** ./src/services/event-service.js ***!
  \***************************************/
    /*! namespace exports */
    /*! export Event [provided] [no usage info] [missing usage info prevents renaming] */
    /*! other exports [not provided] [no usage info] */
    /*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Event: () => /* binding */ Event,
        /* harmony export */
      });
      /* harmony import */ var kafkajs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! kafkajs */ "webpack/sharing/consume/default/kafkajs/kafkajs"
      );
      /* harmony import */ var kafkajs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        kafkajs__WEBPACK_IMPORTED_MODULE_0__
      );

      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "next",
                value
              );
            }
            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "throw",
                err
              );
            }
            _next(undefined);
          });
        };
      }

      var brokers = process.env.KAFKA_BROKERS || "localhost:9092";
      var topics = new RegExp(process.env.KAFKA_TOPICS) || /Channel/;
      var groupId = process.env.KAFKA_GROUP_ID || "MicroLib" + process.pid;
      var kafka = new kafkajs__WEBPACK_IMPORTED_MODULE_0__.Kafka({
        clientId: "MicroLib",
        brokers: brokers.split(","),
      });
      var consumer = kafka.consumer({
        groupId: groupId,
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

          return _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(
                function _callee2$(_context2) {
                  while (1) {
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return consumer.connect();

                      case 3:
                        _context2.next = 5;
                        return consumer.subscribe({
                          topic: topic,
                          fromBeginning: true,
                        });

                      case 5:
                        _this.listening = true;
                        _context2.next = 8;
                        return consumer.run({
                          eachMessage: (function () {
                            var _eachMessage = _asyncToGenerator(
                              /*#__PURE__*/ regeneratorRuntime.mark(
                                function _callee(_ref) {
                                  var topic, message;
                                  return regeneratorRuntime.wrap(
                                    function _callee$(_context) {
                                      while (1) {
                                        switch (
                                          (_context.prev = _context.next)
                                        ) {
                                          case 0:
                                            (topic = _ref.topic),
                                              (message = _ref.message);

                                            try {
                                              callback({
                                                topic: topic,
                                                message: message.value.toString(),
                                              });
                                            } catch (error) {
                                              console.error(error);
                                            }

                                          case 2:
                                          case "end":
                                            return _context.stop();
                                        }
                                      }
                                    },
                                    _callee
                                  );
                                }
                              )
                            );

                            function eachMessage(_x) {
                              return _eachMessage.apply(this, arguments);
                            }

                            return eachMessage;
                          })(),
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
                },
                _callee2,
                null,
                [[0, 10]]
              );
            })
          )();
        },

        /**
         * Implemements event producer service.
         * @param {string|RegExp} topic
         * @param {string} message
         */
        notify: function notify(topic, message) {
          var _this2 = this;

          return _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(
                function _callee3$(_context3) {
                  while (1) {
                    switch ((_context3.prev = _context3.next)) {
                      case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return producer.connect();

                      case 3:
                        _context3.next = 5;
                        return producer.send({
                          topic: topic,
                          messages: [
                            {
                              value: message,
                            },
                          ],
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
                          error: _context3.t0,
                        });

                      case 12:
                      case "end":
                        return _context3.stop();
                    }
                  }
                },
                _callee3,
                null,
                [[0, 9]]
              );
            })
          )();
        },
      };

      /***/
    },

  /***/ "./src/services/index.js":
    /*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
    /*! namespace exports */
    /*! export Address [provided] [no usage info] [missing usage info prevents renaming] -> ./src/services/address-service.js .Address */
    /*! export Event [provided] [no usage info] [missing usage info prevents renaming] -> ./src/services/event-service.js .Event */
    /*! export Payment [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
    /*! export Shipping [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
    /*! export default [not provided] [no usage info] [missing usage info prevents renaming] */
    /*! export publishEvent [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
    /*! other exports [maybe provided (runtime-defined)] [no usage info] -> ./src/services/inventory-service.js */
    /*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.n, __webpack_require__.r, __webpack_require__.* */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Address: () =>
          /* reexport safe */ _address_service__WEBPACK_IMPORTED_MODULE_0__.Address,
        /* harmony export */ Event: () =>
          /* reexport safe */ _event_service__WEBPACK_IMPORTED_MODULE_1__.Event,
        /* harmony export */ Payment: () =>
          /* reexport safe */ _payment_service__WEBPACK_IMPORTED_MODULE_3__.Payment,
        /* harmony export */ Shipping: () =>
          /* reexport safe */ _shipping_service__WEBPACK_IMPORTED_MODULE_4__.Shipping,
        /* harmony export */ publishEvent: () =>
          /* reexport safe */ _publish_event__WEBPACK_IMPORTED_MODULE_5__.publishEvent,
        /* harmony export */
      });
      /* harmony import */ var _address_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./address-service */ "./src/services/address-service.js"
      );
      /* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./event-service */ "./src/services/event-service.js"
      );
      /* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./inventory-service */ "./src/services/inventory-service.js"
      );
      /* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        _inventory_service__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
      /* harmony reexport (unknown) */ for (const __WEBPACK_IMPORT_KEY__ in _inventory_service__WEBPACK_IMPORTED_MODULE_2__)
        if (["default", "Address", "Event"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
          __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () =>
            _inventory_service__WEBPACK_IMPORTED_MODULE_2__[
              __WEBPACK_IMPORT_KEY__
            ];
      /* harmony reexport (unknown) */ __webpack_require__.d(
        __webpack_exports__,
        __WEBPACK_REEXPORT_OBJECT__
      );
      /* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./payment-service */ "./src/services/payment-service.js"
      );
      /* harmony import */ var _shipping_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./shipping-service */ "./src/services/shipping-service.js"
      );
      /* harmony import */ var _publish_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./publish-event */ "./src/services/publish-event.js"
      );

      /***/
    },

  /***/ "./src/services/inventory-service.js":
    /*!*******************************************!*\
  !*** ./src/services/inventory-service.js ***!
  \*******************************************/
    /*! unknown exports (runtime-defined) */
    /*! runtime requirements:  */
    /***/ () => {
      "use strict";
      // JSON.stringify({
      //     eventType: "Command",
      //     eventTime: new Date().toUTCString(),
      //     eventSource: "orderService",
      //     eventData: {
      //       replyChannel: "orderChannel",
      //       commandName: "pickOrder",
      //       commandArgs: {
      //       }

      /***/
    },

  /***/ "./src/services/payment-service.js":
    /*!*****************************************!*\
  !*** ./src/services/payment-service.js ***!
  \*****************************************/
    /*! namespace exports */
    /*! export Payment [provided] [no usage info] [missing usage info prevents renaming] */
    /*! other exports [not provided] [no usage info] */
    /*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Payment: () => /* binding */ Payment,
        /* harmony export */
      });

      /**
       * @callback authorizePaymentType
       * @param {string} id
       * @param {number} amount
       * @param {string} source_id
       * @param {string} customer_id
       * @param {boolean} [autocomplete]
       * @returns {Promise<string>}
       */

      /**
       * @typedef PaymentService
       * @property {authorizePaymentType} authorizePayment
       * @property {function()} completePayment
       * @property {function()} refundPayment
       */
      // import { Client, Environment, ApiError } from "square";
      // const client = new Client({
      //   environment: Environment.Sandbox,
      //   accessToken: process.env.SQUARE_ACCESS_TOKEN,
      // });

      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "next",
                value
              );
            }
            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "throw",
                err
              );
            }
            _next(undefined);
          });
        };
      }

      var Payment = {
        /**
         * @type {authorizePaymentType}
         * @param {*} id
         * @param {*} amount
         * @param {*} source_id
         * @param {*} customer_id
         * @param {*} autocomplete
         * @param {*} currency
         */
        authorizePayment: function authorizePayment(
          id,
          amount,
          source_id,
          customer_id
        ) {
          var _arguments = arguments;
          return _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
              var autocomplete, currency, payload;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      autocomplete =
                        _arguments.length > 4 && _arguments[4] !== undefined
                          ? _arguments[4]
                          : false;
                      currency =
                        _arguments.length > 5 && _arguments[5] !== undefined
                          ? _arguments[5]
                          : "USD";
                      payload = {
                        idempotency_key: id,
                        amount_money: {
                          amount: amount,
                          currency: currency,
                        },
                        source_id: source_id,
                        autocomplete: autocomplete,
                        customer_id: customer_id,
                        location_id: "XK3DBG77NJBFX",
                        reference_id: "123456",
                        note: "Brief description",
                        app_fee_money: {
                          amount: 10,
                          currency: "USD",
                        },
                      };
                      /*
              const bodyAmountMoney = {};
              bodyAmountMoney.amount = 200;
              bodyAmountMoney.currency = "USD";
               const bodyTipMoney = {};
              bodyTipMoney.amount = 198;
              bodyTipMoney.currency = "CHF";
               const bodyAppFeeMoney = {};
              bodyAppFeeMoney.amount = 10;
              bodyAppFeeMoney.currency = "USD";
               const body = {
                sourceId: "ccof:uIbfJXhXETSP197M3GB",
                idempotencyKey: "4935a656-a929-4792-b97c-8848be85c27c",
                amountMoney: bodyAmountMoney,
              };
               body.tipMoney = bodyTipMoney;
              body.appFeeMoney = bodyAppFeeMoney;
              body.delayDuration = "delay_duration6";
              body.autocomplete = true;
              body.orderId = "order_id0";
              body.customerId = "VDKXEEKPJN48QDG3BGGFAK05P8";
              body.locationId = "XK3DBG77NJBFX";
              body.referenceId = "123456";
              body.note = "Brief description";
               // try {
              //   const {
              //     result,
              //     ...httpResponse
              //   } = await client.paymentsApi.createPayment(body);
              //   // Get more response info...
              //   // const { statusCode, headers } = httpResponse;
              // } catch (error) {
              //   if (error instanceof ApiError) {
              //     const errors = error.result;
              //     // const { statusCode, headers } = error;
              //   }
              // }
              */

                      return _context.abrupt("return", "1234");

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          )();
        },

        /*
  const response ={
  "payment": {
    "id": "GQTFp1ZlXdpoW4o6eGiZhbjosiDFf",
    "created_at": "2019-07-10T13:23:49.154Z",
    "updated_at": "2019-07-10T13:23:49.446Z",
    "amount_money": {
      "amount": 200,
      "currency": "USD"
    },
    "app_fee_money": {
      "amount": 10,
      "currency": "USD"
    },
    "total_money": {
      "amount": 200,
      "currency": "USD"
    },
    "status": "COMPLETED",
    "source_type": "CARD",
    "card_details": {
      "status": "CAPTURED",
      "card": {
        "card_brand": "VISA",
        "last_4": "1111",
        "exp_month": 7,
        "exp_year": 2026,
        "fingerprint": "sq-1-TpmjbNBMFdibiIjpQI5LiRgNUBC7u1689i0TgHjnlyHEWYB7tnn-K4QbW4ttvtaqXw",
        "card_type": "DEBIT",
        "prepaid_type": "PREPAID",
        "bin": "411111"
      },
      "entry_method": "ON_FILE",
      "cvv_status": "CVV_ACCEPTED",
      "avs_status": "AVS_ACCEPTED",
      "auth_result_code": "nsAyY2",
      "statement_description": "SQ *MY MERCHANT"
    },
    "location_id": "XTI0H92143A39",
    "order_id": "m2Hr8Hk8A3CTyQQ1k4ynExg92tO3",
    "reference_id": "123456",
    "note": "Brief description",
    "customer_id": "RDX9Z4XTIZR7MRZJUXNY9HUK6I",
    "receipt_number": "GQTF",
    "receipt_url": "https://squareup.com/receipt/preview/GQTFp1ZlXdpoW4o6eGiZhbjosiDFf"
  }
  }
  /*
  {
  "errors": [
    {
      "code": "VALUE_EMPTY",
      "detail": "Field must not be blank",
      "field": "source_id",
      "category": "INVALID_REQUEST_ERROR"
    },
    {
      "code": "VALUE_EMPTY",
      "detail": "Field must not be blank",
      "field": "idempotency_key",
      "category": "INVALID_REQUEST_ERROR"
    },
    {
      "code": "MISSING_REQUIRED_PARAMETER",
      "detail": "Field must be set",
      "field": "amount_money",
      "category": "INVALID_REQUEST_ERROR"
    }
  ]
  }
  */
        completePayment: function completePayment(model) {
          return _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      console.log("REAL completing payment: %s", model.orderNo);
                      return _context2.abrupt("return", "1234");

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            })
          )();
        },
        refundPayment: function refundPayment(model) {
          return _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      console.log("REAL refunding payment: %s", model.orderNo);

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })
          )();
        },
      };

      /***/
    },

  /***/ "./src/services/publish-event.js":
    /*!***************************************!*\
  !*** ./src/services/publish-event.js ***!
  \***************************************/
    /*! namespace exports */
    /*! export publishEvent [provided] [no usage info] [missing usage info prevents renaming] */
    /*! other exports [not provided] [no usage info] */
    /*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ publishEvent: () => /* binding */ publishEvent,
        /* harmony export */
      });
      /* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! http */ "http"
      );
      /* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        http__WEBPACK_IMPORTED_MODULE_0__
      );

      function publishEvent(event) {
        if (!event) {
          return;
        }

        var serialized = JSON.stringify(event);
        var options = {
          hostname: "localhost",
          port: 8060,
          path: "/api/publish",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(serialized),
          },
        };
        var req = http__WEBPACK_IMPORTED_MODULE_0___default().request(
          options,
          function (res) {
            res.setEncoding("utf8");
            res.on("data", function (chunk) {
              console.log(chunk);
            });
            res.on("end", function () {});
          }
        );
        req.on("error", function (e) {
          // console.error(`problem with request: ${e.message}`);
        }); // Write data to request body

        req.write(serialized);
        req.end();
      }

      /***/
    },

  /***/ "./src/services/shipping-service.js":
    /*!******************************************!*\
  !*** ./src/services/shipping-service.js ***!
  \******************************************/
    /*! namespace exports */
    /*! export Shipping [provided] [no usage info] [missing usage info prevents renaming] */
    /*! other exports [not provided] [no usage info] */
    /*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Shipping: () => /* binding */ Shipping,
        /* harmony export */
      });

      /**
       * @typedef {import('../adapters/event-adapter').EventMessage} EventMessage
       */

      /**
       * @typedef {import('../adapters/event-adapter').CommandEvent} CommandEvent
       */

      /**
       * @callback shipOrder
       * @param {string} shipTo
       * @param {string} shipFrom
       * @param {string} lineItems
       * @param {string} signature
       * @param {string} externalId
       * @param {string} requester
       * @param {string} respondOn
       * @returns {EventMessage}
       */

      /**
       * @callback trackShipment
       * @param {string} shipmentId
       * @param {string} externalId
       * @param {string} requester
       * @param {string} respondOn
       * @returns {EventMessage}
       */

      /**
       * @typedef {string} functionName
       */

      /**
       * @typedef {Object} shippingService formats and parses shipping event messages
       * @property {string} serviceName - programmatic service name in eventSource/Target
       * @property {string} topic - event topic "shippingChannel" when sending messasges
       * @property {shipOrder} shipOrder - format event message requesting shipping label and pickup of order
       * @property {trackShipment} trackShipment - report on location/status of parcel
       * @property {function():EventMessage} verifyDelivery - ensure customer recieved parcel
       * @property {function():EventMessage} returnShipment - return to sender if refunding
       * @property {function(functionName,EventMessage):{[key]:string}} getPayload - extract payload
       */

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            );
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              );
            });
          }
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function createEventMessage(_ref) {
        var requester = _ref.requester,
          service = _ref.service,
          type = _ref.type,
          name = _ref.name,
          id = _ref.id,
          data = _ref.data;
        return {
          eventSource: requester,
          eventTarget: service,
          eventType: type,
          eventName: name,
          eventTime: new Date().getTime(),
          eventUuid: id,
          eventData: data,
        };
      }

      function createCommandEvent(name, topic, args) {
        return {
          commandName: name,
          commandResp: topic,
          commandArgs: _objectSpread({}, args),
        };
      }
      /**
       * Shipping service events
       * @type {shippingService}
       */

      var Shipping = {
        serviceName: "shippingService",
        topic: "shippingChannel",

        /**
         *
         * @param {*} param0
         * @returns {shipMessage}
         */
        shipOrder: function shipOrder(_ref2) {
          var shipTo = _ref2.shipTo,
            shipFrom = _ref2.shipFrom,
            lineItems = _ref2.lineItems,
            signature = _ref2.signature,
            externalId = _ref2.externalId,
            requester = _ref2.requester,
            respondOn = _ref2.respondOn;
          return createEventMessage({
            requester: requester,
            service: this.serviceName,
            type: "command",
            name: this.shipOrder.name,
            id: externalId,
            data: createCommandEvent(this.shipOrder.name, respondOn, {
              shipTo: shipTo,
              shipFrom: shipFrom,
              lineItems: lineItems,
              signature: signature,
              externalId: externalId,
            }),
          });
        },

        /**
         *
         * @param {*} param0
         * @returns {EventMessage}
         */
        trackShipment: function trackShipment(_ref3) {
          var externalId = _ref3.externalId,
            shipmentId = _ref3.shipmentId,
            trackingId = _ref3.trackingId,
            requester = _ref3.requester,
            respondOn = _ref3.respondOn;
          return createEventMessage({
            requester: requester,
            service: this.serviceName,
            type: "command",
            name: this.trackShipment.name,
            id: externalId,
            data: createCommandEvent(this.trackShipment.name, respondOn, {
              externalId: externalId,
              shipmentId: shipmentId,
              trackingId: trackingId,
            }),
          });
        },

        /**
         *
         * @param {*} param0
         * @returns {EventMessage}
         */
        verifyDelivery: function verifyDelivery(_ref4) {
          var requester = _ref4.requester,
            respondOn = _ref4.respondOn,
            trackingId = _ref4.trackingId,
            externalId = _ref4.externalId;
          return createEventMessage({
            requester: requester,
            service: this.serviceName,
            type: "command",
            name: this.verifyDelivery.name,
            id: externalId,
            data: createCommandEvent(this.verifyDelivery.name, respondOn, {
              externalId: externalId,
              trackingId: trackingId,
            }),
          });
        },
        returnShipment: function returnShipment(_ref5) {
          var requester = _ref5.requester,
            respondOn = _ref5.respondOn,
            shipmentId = _ref5.shipmentId,
            externalId = _ref5.externalId;
          return createEventMessage({
            requester: requester,
            service: this.serviceName,
            type: "command",
            id: externalId,
            name: this.returnShipment.name,
            data: createCommandEvent(this.returnShipment, respondOn, {
              shipmentId: shipmentId,
              externalId: externalId,
            }),
          });
        },
        getPayload: function getPayload(func, event) {
          var _payloads;

          var payloads =
            ((_payloads = {}),
            _defineProperty(_payloads, this.shipOrder.name, {
              shipmentId: event.eventData.shipmentId,
            }),
            _defineProperty(_payloads, this.trackShipment.name, {
              trackingId: event.eventData.trackingId,
              trackingStatus: event.eventData.trackingStatus,
            }),
            _defineProperty(_payloads, this.verifyDelivery.name, {
              proofOfDelivery: event.eventData.proofOfDelivery,
            }),
            _payloads);
          return payloads[func];
        },
        getProperty: function getProperty(event, key) {
          return event.eventData[key];
        },
      };

      /***/
    },
};
//# sourceMappingURL=src_services_index_js.js.map
