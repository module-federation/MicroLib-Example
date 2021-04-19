exports.id = "src_models_index_js";
exports.ids = ["src_models_index_js"];
exports.modules = {
  /***/ "./src/config/catalog.js":
    /*!*******************************!*\
  !*** ./src/config/catalog.js ***!
  \*******************************/
    /*! namespace exports */
    /*! export Catalog [provided] [no usage info] [missing usage info prevents renaming] */
    /*! other exports [not provided] [no usage info] */
    /*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      //TRM
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Catalog: () => /* binding */ Catalog,
        /* harmony export */
      });
      /**
       * @type {import("../models").ModelSpecification}
       */
      var Catalog = {
        endpoint: "catalogs",
        factory: function factory() {
          return function (_ref) {
            var a = _ref.a,
              b = _ref.b;
            return Object.freeze({
              a: a,
              b: b,
              hi: function hi() {
                return console.log("hi");
              },
            });
          };
        },
        modelName: "catalog",
        commands: {
          hi: {
            command: "hi",
            acl: ["write"],
          },
        },
      };

      /***/
    },

  /***/ "./src/config/customer.js":
    /*!********************************!*\
  !*** ./src/config/customer.js ***!
  \********************************/
    /*! namespace exports */
    /*! export Customer [provided] [no usage info] [missing usage info prevents renaming] */
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
        /* harmony export */ Customer: () => /* binding */ Customer,
        /* harmony export */
      });
      /* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../models/customer */ "./src/models/customer.js"
      );
      /* harmony import */ var _models_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../models/mixins */ "./src/models/mixins.js"
      );
      /* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../lib/utils */ "./src/lib/utils.js"
      );
      /* harmony import */ var _datasources_datasource_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../datasources/datasource-mongodb */ "./src/datasources/datasource-mongodb.js"
      );

      /**
       * @type {import('../models/index').ModelSpecification}
       */

      var Customer = {
        modelName: "customer",
        endpoint: "customers",
        dependencies: {
          uuid: _lib_utils__WEBPACK_IMPORTED_MODULE_2__.uuid,
        },
        factory: _models_customer__WEBPACK_IMPORTED_MODULE_0__.customerFactory,
        validate: _models_mixins__WEBPACK_IMPORTED_MODULE_1__.validateModel,
        onDelete: _models_customer__WEBPACK_IMPORTED_MODULE_0__.okToDelete,
        datasource: {
          factory:
            _datasources_datasource_mongodb__WEBPACK_IMPORTED_MODULE_3__.DataSourceAdapterMongo,
          url: "mongodb://localhost:27017",
          cacheSize: 2000,
        },
        mixins: [
          (0, _models_mixins__WEBPACK_IMPORTED_MODULE_1__.freezeProperties)(
            "customerId"
          ),
          (0, _models_mixins__WEBPACK_IMPORTED_MODULE_1__.requireProperties)(
            "firstName",
            "lastName",
            "email",
            "shippingAddress",
            "billingAddress",
            "creditCardNumber"
          ),
          (0, _models_mixins__WEBPACK_IMPORTED_MODULE_1__.validateProperties)([
            {
              propKey: "email",
              unique: {
                encrypted: true,
              },
              regex: "email",
            },
            {
              propKey: "creditCardNumber",
              regex: "creditCard",
            },
          ]),
        ],
        relations: {
          orders: {
            modelName: "order",
            type: "oneToMany",
            foreignKey: "customerId",
          },
        },
        commands: {
          decrypt: {
            command: "decrypt",
            acl: ["read", "decrypt"],
          },
        },
        accessControlList: {
          customer: {
            allow: "read",
            type: "relation",
            desc: "Allow orders to see customers.",
          },
        },
      };

      /***/
    },

  /***/ "./src/config/index.js":
    /*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
    /*! namespace exports */
    /*! export Catalog [provided] [no usage info] [missing usage info prevents renaming] -> ./src/config/catalog.js .Catalog */
    /*! export Customer [provided] [no usage info] [missing usage info prevents renaming] -> ./src/config/customer.js .Customer */
    /*! export Order [provided] [no usage info] [missing usage info prevents renaming] -> ./src/config/order.js .Order */
    /*! export Product [provided] [no usage info] [missing usage info prevents renaming] -> ./src/config/product.js .Product */
    /*! export User [provided] [no usage info] [missing usage info prevents renaming] -> ./src/config/user.js .User */
    /*! other exports [not provided] [no usage info] */
    /*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Order: () =>
          /* reexport safe */ _order__WEBPACK_IMPORTED_MODULE_0__.Order,
        /* harmony export */ User: () =>
          /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_1__.User,
        /* harmony export */ Customer: () =>
          /* reexport safe */ _customer__WEBPACK_IMPORTED_MODULE_2__.Customer,
        /* harmony export */ Product: () =>
          /* reexport safe */ _product__WEBPACK_IMPORTED_MODULE_3__.Product,
        /* harmony export */ Catalog: () =>
          /* reexport safe */ _catalog__WEBPACK_IMPORTED_MODULE_4__.Catalog,
        /* harmony export */
      });
      /* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./order */ "./src/config/order.js"
      );
      /* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./user */ "./src/config/user.js"
      );
      /* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./customer */ "./src/config/customer.js"
      );
      /* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./product */ "./src/config/product.js"
      );
      /* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./catalog */ "./src/config/catalog.js"
      );

      /***/
    },

  /***/ "./src/config/order.js":
    /*!*****************************!*\
  !*** ./src/config/order.js ***!
  \*****************************/
    /*! namespace exports */
    /*! export Order [provided] [no usage info] [missing usage info prevents renaming] */
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
        /* harmony export */ Order: () => /* binding */ Order,
        /* harmony export */
      });
      /* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../models/order */ "./src/models/order.js"
      );
      /* harmony import */ var _models_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../models/mixins */ "./src/models/mixins.js"
      );
      /* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../lib/utils */ "./src/lib/utils.js"
      );
      /* harmony import */ var _datasources_datasource_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../datasources/datasource-mongodb */ "./src/datasources/datasource-mongodb.js"
      );

      function _toConsumableArray(arr) {
        return (
          _arrayWithoutHoles(arr) ||
          _iterableToArray(arr) ||
          _unsupportedIterableToArray(arr) ||
          _nonIterableSpread()
        );
      }

      function _nonIterableSpread() {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (
          n === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return _arrayLikeToArray(o, minLen);
      }

      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
          return Array.from(iter);
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }

      /**
       * @type {import('../models/index').ModelSpecification}
       */

      var Order = {
        modelName: "order",
        endpoint: "orders",
        factory: _models_order__WEBPACK_IMPORTED_MODULE_0__.orderFactory,
        datasource: {
          factory:
            _datasources_datasource_mongodb__WEBPACK_IMPORTED_MODULE_3__.DataSourceAdapterMongo,
          url: "mongodb://localhost:27017",
          cacheSize: 2000,
          baseClass: "DataSourceMongoDb",
        },
        dependencies: {
          uuid: _lib_utils__WEBPACK_IMPORTED_MODULE_2__.uuid,
        },
        mixins: [
          (0, _models_mixins__WEBPACK_IMPORTED_MODULE_1__.requireProperties)(
            "orderItems",
            (0, _models_order__WEBPACK_IMPORTED_MODULE_0__.requiredForGuest)([
              "lastName",
              "firstName",
              "billingAddress",
              "shippingAddress",
              "creditCardNumber",
              "email",
            ]),
            (0, _models_order__WEBPACK_IMPORTED_MODULE_0__.requiredForApproval)(
              "paymentAuthorization"
            ),
            (0,
            _models_order__WEBPACK_IMPORTED_MODULE_0__.requiredForCompletion)(
              "proofOfDelivery"
            )
          ),
          (0, _models_mixins__WEBPACK_IMPORTED_MODULE_1__.freezeProperties)(
            "orderNo",
            "customerId",
            (0, _models_order__WEBPACK_IMPORTED_MODULE_0__.freezeOnApproval)([
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
            (0, _models_order__WEBPACK_IMPORTED_MODULE_0__.freezeOnCompletion)(
              "*"
            )
          ),
          (0, _models_mixins__WEBPACK_IMPORTED_MODULE_1__.updateProperties)([
            {
              propKey: "orderItems",
              update: _models_order__WEBPACK_IMPORTED_MODULE_0__.recalcTotal,
            },
            {
              propKey: "orderItems",
              update:
                _models_order__WEBPACK_IMPORTED_MODULE_0__.updateSignature,
            },
          ]),
          (0, _models_mixins__WEBPACK_IMPORTED_MODULE_1__.validateProperties)([
            {
              propKey: "orderStatus",
              values: Object.values(
                _models_order__WEBPACK_IMPORTED_MODULE_0__.OrderStatus
              ),
              isValid:
                _models_order__WEBPACK_IMPORTED_MODULE_0__.statusChangeValid,
            },
            {
              propKey: "orderTotal",
              maxnum: 99999.99,
              isValid:
                _models_order__WEBPACK_IMPORTED_MODULE_0__.orderTotalValid,
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
        validate: _models_mixins__WEBPACK_IMPORTED_MODULE_1__.validateModel,
        onDelete: _models_order__WEBPACK_IMPORTED_MODULE_0__.readyToDelete,
        eventHandlers: [
          _models_order__WEBPACK_IMPORTED_MODULE_0__.handleOrderEvent,
        ],
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
                intervalMs: 120000,
                retryDelay: 60000,
              },
            },
          },
          authorizePayment: {
            service: "Payment",
            type: "outbound",
            keys: "paymentAuthorization",
            consumesEvent: "startWorkflow",
            producesEvent: "paymentAuthorized",
            undo: _models_order__WEBPACK_IMPORTED_MODULE_0__.cancelPayment,
            timeout: 2000,
            maxRetry: 2,
            circuitBreaker: {
              default: {
                errorRate: 20,
                callVolume: 30,
                intervalMs: 10000,
                retryDelay: 30000,
              },
              portRetryFailed: {
                errorRate: 100,
                callVolume: 2,
                intervalMs: 120000,
                retryDelay: 60000,
              },
            },
          },
          pickOrder: {
            service: "Inventory",
            type: "outbound",
            keys: "pickupAddress",
            consumesEvent: "pickOrder",
            producesEvent: "orderPicked",
            undo: _models_order__WEBPACK_IMPORTED_MODULE_0__.returnInventory,
            timeout: 2000,
            maxRetry: 2,
            circuitBreaker: {
              portTimeout: {},
              portRetryFailed: {
                errorRate: 100,
                callVolume: 2,
                intervalMs: 120000,
                retryDelay: 60000,
              },
            },
          },
          shipOrder: {
            service: "Shipping",
            type: "outbound",
            callback: _models_order__WEBPACK_IMPORTED_MODULE_0__.orderShipped,
            consumesEvent: "orderPicked",
            producesEvent: "orderShipped",
            undo: _models_order__WEBPACK_IMPORTED_MODULE_0__.returnShipment,
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
                intervalMs: 120000,
                retryDelay: 60000,
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
              portRetryFailed_order: {
                errorRate: 0,
                callVolume: 1,
                intervalMs: 120000,
                retryDelay: 240000,
              },
            },
          },
          verifyDelivery: {
            service: "Shipping",
            type: "outbound",
            keys: "proofOfDelivery",
            consumesEvent: "orderDelivered",
            producesEvent: "deliveryVerified",
            undo: _models_order__WEBPACK_IMPORTED_MODULE_0__.returnDelivery,
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
                intervalMs: 120000,
                retryDelay: 60000,
              },
            },
          },
          completePayment: {
            service: "Payment",
            type: "outbound",
            callback:
              _models_order__WEBPACK_IMPORTED_MODULE_0__.paymentCompleted,
            consumesEvent: "deliveryVerified",
            producesEvent: "workflowComplete",
            undo: _models_order__WEBPACK_IMPORTED_MODULE_0__.refundPayment,
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
                intervalMs: 120000,
                retryDelay: 60000,
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
            callback: function callback(order, payload) {
              return order.refreshToken(payload.nonce);
            },
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
            command: _models_order__WEBPACK_IMPORTED_MODULE_0__.approve,
            acl: ["write", "approve"],
          },
          cancel: {
            command: _models_order__WEBPACK_IMPORTED_MODULE_0__.cancel,
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
            allow: function allow(delegator) {
              return _toConsumableArray(delegator.permissions);
            },
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
            value: function value(key, _value) {
              return decrypt(_value);
            },
            enabled: false,
          },
          {
            on: "deserialize",
            key: "shippingAddress",
            type: "string",
            value: function value(key, _value2) {
              return decrypt(_value2);
            },
            enabled: false,
          },
          {
            on: "deserialize",
            key: "billingAddress",
            type: "string",
            value: function value(key, _value3) {
              return decrypt(_value3);
            },
            enabled: false,
          },
        ],
      };

      /***/
    },

  /***/ "./src/config/product.js":
    /*!*******************************!*\
  !*** ./src/config/product.js ***!
  \*******************************/
    /*! namespace exports */
    /*! export Product [provided] [no usage info] [missing usage info prevents renaming] */
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
        /* harmony export */ Product: () => /* binding */ Product,
        /* harmony export */
      });
      /**
       * @type {import("../models").ModelSpecification}
       */
      var Product = {
        endpoint: "products",
        factory: function factory() {
          return function (_ref) {
            var a = _ref.a,
              b = _ref.b;
            return Object.freeze({
              a: a,
              b: b,
              hi: function hi() {
                return console.log("hi");
              },
            });
          };
        },
        modelName: "product",
        commands: {
          hi: {
            command: "hi",
            acl: ["write"],
          },
        },
      };

      /***/
    },

  /***/ "./src/config/user.js":
    /*!****************************!*\
  !*** ./src/config/user.js ***!
  \****************************/
    /*! namespace exports */
    /*! export User [provided] [no usage info] [missing usage info prevents renaming] */
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
        /* harmony export */ User: () => /* binding */ User,
        /* harmony export */
      });
      /* harmony import */ var _models_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../models/mixins */ "./src/models/mixins.js"
      );
      /* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../models/user */ "./src/models/user.js"
      );
      /* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../lib/utils */ "./src/lib/utils.js"
      );

      /**
       * @type {import('../models').ModelSpecification}
       */

      var User = {
        modelName: "user",
        endpoint: "users",
        dependencies: {
          uuid: _lib_utils__WEBPACK_IMPORTED_MODULE_2__.uuid,
        },
        factory: _models_user__WEBPACK_IMPORTED_MODULE_1__.userFactory,
        mixins: _models_user__WEBPACK_IMPORTED_MODULE_1__.userMixins,
        validate: _models_mixins__WEBPACK_IMPORTED_MODULE_0__.validateModel,
      };

      /***/
    },

  /***/ "./src/datasources/datasource-mongodb.js":
    /*!***********************************************!*\
  !*** ./src/datasources/datasource-mongodb.js ***!
  \***********************************************/
    /*! namespace exports */
    /*! export DataSourceAdapterMongo [provided] [no usage info] [missing usage info prevents renaming] */
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
        /* harmony export */ DataSourceAdapterMongo: () =>
          /* binding */ DataSourceAdapterMongo,
        /* harmony export */
      });

      /**
       * Datasource adapter factory.
       * @param {string} url database url
       * @param {number} [cacheSize] number of models to keep in cache
       * @param {*} DataSource base class that enables caching
       * @returns {import("./datasource").default}
       */

      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (
          typeof Symbol === "function" &&
          typeof Symbol.iterator === "symbol"
        ) {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
        }
        return _typeof(obj);
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: true, configurable: true },
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
        return _setPrototypeOf(o, p);
      }

      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
            result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }

      function _possibleConstructorReturn(self, call) {
        if (
          call &&
          (_typeof(call) === "object" || typeof call === "function")
        ) {
          return call;
        }
        return _assertThisInitialized(self);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return self;
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
          return true;
        } catch (e) {
          return false;
        }
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      var DataSourceAdapterMongo = function DataSourceAdapterMongo(
        url,
        cacheSize,
        DataSourceMongoDb
      ) {
        //const MongoClient = require("mongodb").MongoClient;

        /**
         * MongoDB adapter extends in-memory datasource to support caching.
         * The cache is always updated first, which allows the system to run
         * even when the database is offline.
         */
        var DataSourceMongoDbCustom = /*#__PURE__*/ (function (
          _DataSourceMongoDb
        ) {
          _inherits(DataSourceMongoDbCustom, _DataSourceMongoDb);

          var _super = _createSuper(DataSourceMongoDbCustom);

          function DataSourceMongoDbCustom(datasource, factory, name) {
            var _this;

            _classCallCheck(this, DataSourceMongoDbCustom);

            _this = _super.call(this, datasource, factory, name);
            _this.url = url;
            _this.cacheSize = cacheSize;
            return _this;
          }

          return DataSourceMongoDbCustom;
        })(DataSourceMongoDb);

        return DataSourceMongoDbCustom;
      };

      /***/
    },

  /***/ "./src/event-dispatcher.js":
    /*!*********************************!*\
  !*** ./src/event-dispatcher.js ***!
  \*********************************/
    /*! namespace exports */
    /*! export EventDispatcher [provided] [no usage info] [missing usage info prevents renaming] */
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
        /* harmony export */ EventDispatcher: () =>
          /* binding */ EventDispatcher,
        /* harmony export */
      });
      /* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./services/event-service */ "./src/services/event-service.js"
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

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var EventDispatcher = /*#__PURE__*/ (function () {
        function EventDispatcher() {
          var adapter =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : _services_event_service__WEBPACK_IMPORTED_MODULE_0__.Event;

          _classCallCheck(this, EventDispatcher);

          this.adapter = adapter;
          this.subscriptions = new Map();
        }

        _createClass(EventDispatcher, [
          {
            key: "registerCallback",
            value: function registerCallback(topic, callback) {
              if (this.subscriptions.has(topic)) {
                this.subscriptions.get(topic).push(callback);
                return;
              }

              this.subscriptions.set(topic, [callback]);
            },
          },
          {
            key: "emitEvent",
            value: (function () {
              var _emitEvent = _asyncToGenerator(
                /*#__PURE__*/ regeneratorRuntime.mark(function _callee(
                  topic,
                  message
                ) {
                  var method,
                    _args = arguments;
                  return regeneratorRuntime.wrap(
                    function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            method =
                              _args.length > 2 && _args[2] !== undefined
                                ? _args[2]
                                : "notify";
                            _context.next = 3;
                            return this.adapter[method](topic, message);

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    },
                    _callee,
                    this
                  );
                })
              );

              function emitEvent(_x, _x2) {
                return _emitEvent.apply(this, arguments);
              }

              return emitEvent;
            })(),
          },
          {
            key: "init",
            value: (function () {
              var _init = _asyncToGenerator(
                /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
                  var method,
                    emitEvent,
                    _args2 = arguments;
                  return regeneratorRuntime.wrap(
                    function _callee2$(_context2) {
                      while (1) {
                        switch ((_context2.prev = _context2.next)) {
                          case 0:
                            emitEvent = function _emitEvent2(topic, message) {
                              this.emitEvent(topic, message);
                            };

                            method =
                              _args2.length > 0 && _args2[0] !== undefined
                                ? _args2[0]
                                : "listen";
                            _context2.next = 4;
                            return this.adapter[method](
                              /Channel/,
                              function (_ref) {
                                var _this = this;

                                var topic = _ref.topic,
                                  message = _ref.message;

                                if (this.subscriptions.has(topic)) {
                                  this.subscriptions
                                    .get(topic)
                                    .forEach(function (callback) {
                                      return callback({
                                        message: message,
                                        emitEvent: emitEvent.bind(_this),
                                      });
                                    });
                                }
                              }.bind(this)
                            );

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    },
                    _callee2,
                    this
                  );
                })
              );

              function init() {
                return _init.apply(this, arguments);
              }

              return init;
            })(),
          },
        ]);

        return EventDispatcher;
      })();

      /***/
    },

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

  /***/ "./src/models/check-payload.js":
    /*!*************************************!*\
  !*** ./src/models/check-payload.js ***!
  \*************************************/
    /*! namespace exports */
    /*! export default [provided] [no usage info] [missing usage info prevents renaming] */
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
        /* harmony export */ default: () => /* binding */ checkPayload,
        /* harmony export */
      });

      /**
       * Check the payload for expected properties.
       * @param {string|string[]} key name of property or properties
       * @param {*} options
       * @param {*} payload
       * @param {*} port
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

      function checkPayload(key) {
        var options =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        var payload =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : {};
        var port =
          arguments.length > 3 && arguments[3] !== undefined
            ? arguments[3]
            : checkPayload.name;
        var model = options.model;

        if (!model || Object.keys(payload) < 1 || !key) {
          throw new Error({
            desc: "model, payload, or key is missing",
            model: model,
            port: port,
            error: error,
            payload: payload,
            key: key,
          });
        }

        if (Array.isArray(key)) {
          var keys = key.map(function (k) {
            return checkPayload(k, options, payload, port);
          });
          return keys.reduce(function (p, c) {
            return _objectSpread(_objectSpread({}, p), c);
          });
        }

        if (payload[key]) {
          return _defineProperty({}, key, payload[key]);
        }

        if (model[key]) {
          return _defineProperty({}, key, model[key]);
        }

        return model
          .find()
          .then(function (latest) {
            return _defineProperty({}, key, latest[key]);
          })
          ["catch"](function (error) {
            throw new Error({
              desc: "property is missing" + key,
              port: port,
              error: error,
              payload: payload,
              model: model,
            });
          });
      }

      /***/
    },

  /***/ "./src/models/customer.js":
    /*!********************************!*\
  !*** ./src/models/customer.js ***!
  \********************************/
    /*! namespace exports */
    /*! export customerFactory [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export okToDelete [provided] [no usage info] [missing usage info prevents renaming] */
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
        /* harmony export */ customerFactory: () =>
          /* binding */ customerFactory,
        /* harmony export */ okToDelete: () => /* binding */ okToDelete,
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

      function customerFactory(_ref) {
        var uuid = _ref.uuid;
        return function createCustomer() {
          var _ref2 =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {},
            firstName = _ref2.firstName,
            lastName = _ref2.lastName,
            shippingAddress = _ref2.shippingAddress,
            creditCardNumber = _ref2.creditCardNumber,
            _ref2$billingAddress = _ref2.billingAddress,
            billingAddress =
              _ref2$billingAddress === void 0
                ? shippingAddress
                : _ref2$billingAddress,
            phone = _ref2.phone,
            email = _ref2.email,
            userId = _ref2.userId;

          return Object.freeze({
            customerId: uuid(),
            firstName: firstName,
            lastName: lastName,
            creditCardNumber: creditCardNumber,
            shippingAddress: shippingAddress,
            billingAddress: billingAddress,
            phone: phone,
            email: email,
            userId: userId,
          });
        };
      }
      function okToDelete(_x) {
        return _okToDelete.apply(this, arguments);
      }

      function _okToDelete() {
        _okToDelete = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee(customer) {
            var orders;
            return regeneratorRuntime.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return customer.orders();

                    case 3:
                      orders = _context.sent;
                      return _context.abrupt("return", orders.length > 0);

                    case 7:
                      _context.prev = 7;
                      _context.t0 = _context["catch"](0);
                      console.error({
                        func: okToDelete.name,
                        error: _context.t0,
                      });
                      return _context.abrupt("return", true);

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              },
              _callee,
              null,
              [[0, 7]]
            );
          })
        );
        return _okToDelete.apply(this, arguments);
      }

      /***/
    },

  /***/ "./src/models/index.js":
    /*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
    /*! namespace exports */
    /*! export models [provided] [no usage info] [missing usage info prevents renaming] */
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
        /* harmony export */ models: () => /* binding */ models,
        /* harmony export */
      });
      /* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./mixins */ "./src/models/mixins.js"
      );
      /* harmony import */ var _make_adapters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./make-adapters */ "./src/models/make-adapters.js"
      );
      /* harmony import */ var _services_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../services-mock */ "./src/services-mock/index.js"
      );
      /* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../adapters */ "./src/adapters/index.js"
      );
      /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../config */ "./src/config/index.js"
      );

      /**
       * @typedef {string} eventName
       */

      /**
       * @typedef {Object} Model
       * @property {string} Symbol_id - immutable/private uuid
       * @property {string} Symbol_modelName - immutable/private name
       * @property {string} Symbol_createTime - immutable/private createTime
       * @property {onUpdate} Symbol_onUpdate - immutable/private update function
       * @property {onDelete} Symbol_onDelete
       * @property {function(Object)} update - use this function to update model
       * specify changes in an object
       * @property {function()} toJSON - de/serialization logic
       * @property {function(eventName,function(eventName,Model):void)} addListener listen for domain events
       * @property {function(eventName,Model):Promise<void>} emit emit domain event
       * @property {function(function():Promise<Model>):Promise<Model>} [port] - when a
       * port is configured, the framework generates a function to invoke it. When data
       * arrives on the port, depending on the implementation, the port's adapter invokes
       * the callback specified in the port configuration, or as an argument to the port
       * function. The callback returns an updated Model, and control is returned to the
       * caller. Optionally, an event is fired to trigger the next port function to run
       * @property {function():Promise<any>} [relation] - when you configure a relation,
       * the framework generates a function that your code can call to run the query
       * @property {function(*):*} [command] - the framework will call any model method
       * you specify when passed as a parameter or query in an API call.
       */

      /**
       * @callback onUpdate called to handle model updates
       * @param {Model} model
       * @param {Object} changes
       * @returns {Model | Error} updated model or throw
       */

      /**
       * @callback onDelete
       * @param {Model} model
       * @returns {Model | Error} updated model or throw
       */

      /**
       * @callback validate called to handle model updates
       * @param {Model} model
       * @param {Object} changes
       * @returns {Model | Error} updated model or throw
       */

      /**
       * @callback onLoad
       * @param {Model} savedModel rehydrated model
       * @returns {Model | Error} updated model or throw
       */

      /**
       * @typedef {string} service - name of the service object to inject in adapter
       * @typedef {number} timeout - call to adapter will timeout after `timeout` milliseconds
       *
       * @typedef {{
       *  [x: string]: {
       *    service: service,
       *    timeout?: timeout,
       *    callback?: function({model: Model})
       *    errorCallback?: function({model: Model, port: string, error:Error}),
       *    timeoutCallback?: function({model: Model, port: string}),
       *    consumesEvent?:string,
       *    producesEvent?:string,
       *    type?:'inbound'|'outbound',
       *    disabled?: boolean
       *    adapter?: string
       *  }
       * }} ports - input/output ports for the domain
       *
       * @typedef {{
       *  [x: string]: {
       *    modelName:string,
       *    type:"oneToMany"|"manyToOne",
       *    foreignKey:any,
       *  }
       * }} relations - define related domain entities
       *
       * @typedef {Array<function({
       *  eventName:string,
       *  eventType:string,
       *  eventTime:string,
       *  modelName:string,
       *  model:Model
       * }):Promise<void>>} eventHandler - callbacks invoked to handle domain and
       * application events
       */

      /**
       *
       * @typedef {string} key
       * @typedef {*} value
       */

      /**
       * @typedef {{
       *  on: "serialize" | "deserialize",
       *  key: string | RegExp | "*" | (function(key,value):boolean)
       *  type: "string" | "object" | "number" | "function" | "any" | (function(key,value):boolean)
       *  value(key, value):value
       * }} serializer
       *
       * @typedef {{
       *  [x:string]: {
       *    allow:string|function(*):boolean|Array<string|function(*):boolean>
       *    deny:string|function(*):boolean|Array<string|function(*):boolean>
       *    type:"role"|"relation"|"command"
       *    desc?:string
       *  }
       * }} accessControlList
       *
       * @typedef {{
       *  [x: string]: {
       *    command:string|function(Model):Promise<any>,
       *    acl:accessControlList[]
       *  }
       * }} commands - configure functions to execute when specified in a
       * URL parameter or query of the auto-generate REST API
       */

      /**
       * @typedef {{
       *  [x: string]: {
       *    endpointUri: string,
       *    port:ports[p],
       *    callback: ({
       *      body:string,
       *      headers:{},
       *      params:{}}) => Promise<{
       *        body,status,headers
       *      }>
       *    })
       * }} endpoints
       */

      /**
       * @typedef {Object} ModelSpecification Specify model data and behavior
       * @property {string} modelName name of model (case-insenstive)
       * @property {string} endpoint URI reference (e.g. plural of `modelName`)
       * @property {function(...args): any} factory factory function that creates the model
       * @property {object} [dependencies] injected into the model for inverted control
       * @property {Array<import("./mixins").functionalMixin>} [mixins] - use mixins
       * to implement domain logic, like input validation.
       * @property {onUpdate} [onUpdate] - Function called to handle update requests. Called
       * before save.
       * @property {onDelete} [onDelete] - Function called before deletion.
       * @property {validate} [validate] -
       * @property {ports} [ports] - input/output ports for the domain
       * @property {eventHandler[]} [eventHandlers] - callbacks invoked to handle application
       * events, e.g. CRUD events
       * @property {serializer[]} [serializers] - use for custom de/serialization of the model
       * when reading or writing to storage or network
       * @property {relations} [relations] - link related domain models
       * @property {commands} [commands] - define functions to execute when specified in a
       * URL parameter or query of the auto-generated REST API
       * @property {accessControlList} [accessControlList] - configure authorization
       * @property {endpoints} [endpoints] - additional custom API endpoints - specify inbound port
       * @property {{factory:import("../datasources/datasource-mongodb/"),url:string,credentials?:string}} [datasource] - custom datasource
       * for this model. If not set, the default set by the server is used.
       *
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

      // Service dependencies

      // Models

      var requiredProps = ["modelName", "endpoint", "factory"];

      function validateSpec(spec) {
        var missing = requiredProps.filter(function (key) {
          return !spec[key];
        });

        if (
          (missing === null || missing === void 0 ? void 0 : missing.length) > 0
        ) {
          throw new Error(
            "missing properties: "
              .concat(missing, " > ")
              .concat(Object.entries(spec))
          );
        }
      }
      /**
       * @param {ModelSpecification} spec
       * @param {*} dependencies - services injected
       */

      function makeModel(spec) {
        validateSpec(spec);
        var mixins = spec.mixins || [];
        var dependencies = spec.dependencies || {};
        return _objectSpread(
          _objectSpread({}, spec),
          {},
          {
            mixins: mixins.concat(_mixins__WEBPACK_IMPORTED_MODULE_0__.default),
            dependencies: _objectSpread(
              _objectSpread({}, dependencies),
              (0, _make_adapters__WEBPACK_IMPORTED_MODULE_1__.default)(
                spec.ports,
                _adapters__WEBPACK_IMPORTED_MODULE_3__,
                _services_mock__WEBPACK_IMPORTED_MODULE_2__
              )
            ),
          }
        );
      }

      var models = Object.values(_config__WEBPACK_IMPORTED_MODULE_4__).map(
        function (spec) {
          return makeModel(spec);
        }
      );

      /***/
    },

  /***/ "./src/models/make-adapters.js":
    /*!*************************************!*\
  !*** ./src/models/make-adapters.js ***!
  \*************************************/
    /*! namespace exports */
    /*! export default [provided] [no usage info] [missing usage info prevents renaming] */
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
        /* harmony export */ default: () => /* binding */ makeAdapters,
        /* harmony export */
      });

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

      function makeAdapters(ports, adapters, services) {
        if (!ports || !adapters) {
          return;
        }

        return Object.keys(ports)
          .map(function (port) {
            if (!adapters[port]) {
              return;
            }

            try {
              return _defineProperty(
                {},
                port,
                adapters[port](services[ports[port].service])
              );
            } catch (e) {
              console.warn(e.message);
            }
          })
          .reduce(function (p, c) {
            return _objectSpread(_objectSpread({}, p), c);
          });
      }

      /***/
    },

  /***/ "./src/models/mixins.js":
    /*!******************************!*\
  !*** ./src/models/mixins.js ***!
  \******************************/
    /*! namespace exports */
    /*! export RegEx [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export allowProperties [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export checkFormat [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export createMethod [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export default [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export encryptPersonalInfo [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export encryptProperties [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export execMethod [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export freezeProperties [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export hashPasswords [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export invokePort [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export mixinSets [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export mixinType [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export prevmodel [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export processUpdate [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export requireProperties [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export updateMixins [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export updateProperties [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export validateModel [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export validateProperties [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export validations [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export withValidFormat [provided] [no usage info] [missing usage info prevents renaming] */
    /*! other exports [not provided] [no usage info] */
    /*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ prevmodel: () => /* binding */ prevmodel,
        /* harmony export */ validations: () => /* binding */ validations,
        /* harmony export */ mixinType: () => /* binding */ mixinType,
        /* harmony export */ mixinSets: () => /* binding */ mixinSets,
        /* harmony export */ processUpdate: () => /* binding */ processUpdate,
        /* harmony export */ updateMixins: () => /* binding */ updateMixins,
        /* harmony export */ validateModel: () => /* binding */ validateModel,
        /* harmony export */ encryptProperties: () =>
          /* binding */ encryptProperties,
        /* harmony export */ freezeProperties: () =>
          /* binding */ freezeProperties,
        /* harmony export */ requireProperties: () =>
          /* binding */ requireProperties,
        /* harmony export */ hashPasswords: () => /* binding */ hashPasswords,
        /* harmony export */ allowProperties: () =>
          /* binding */ allowProperties,
        /* harmony export */ RegEx: () => /* binding */ RegEx,
        /* harmony export */ validateProperties: () =>
          /* binding */ validateProperties,
        /* harmony export */ updateProperties: () =>
          /* binding */ updateProperties,
        /* harmony export */ invokePort: () => /* binding */ invokePort,
        /* harmony export */ execMethod: () => /* binding */ execMethod,
        /* harmony export */ createMethod: () => /* binding */ createMethod,
        /* harmony export */ withValidFormat: () =>
          /* binding */ withValidFormat,
        /* harmony export */ checkFormat: () => /* binding */ checkFormat,
        /* harmony export */ encryptPersonalInfo: () =>
          /* binding */ encryptPersonalInfo,
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../lib/utils */ "./src/lib/utils.js"
      );
      /* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! util */ "util"
      );
      /* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        util__WEBPACK_IMPORTED_MODULE_1__
      );

      var _mixinSets;

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

      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (
          typeof Symbol === "function" &&
          typeof Symbol.iterator === "symbol"
        ) {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
        }
        return _typeof(obj);
      }

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

      function _toConsumableArray(arr) {
        return (
          _arrayWithoutHoles(arr) ||
          _iterableToArray(arr) ||
          _unsupportedIterableToArray(arr) ||
          _nonIterableSpread()
        );
      }

      function _nonIterableSpread() {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (
          n === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return _arrayLikeToArray(o, minLen);
      }

      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
          return Array.from(iter);
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
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

      /**
       * Functional mixin created by `functionalMixinFactory`
       * @callback functionalMixin
       * @param {Object} o Object to compose
       * @returns {Object} Composed object
       */

      /**
       * Functional mixin factory - partial application - returns mixin function
       * @callback functionalMixinFactory
       * @param {*} mixinParams params for mixin function
       * @returns {functionalMixin}
       */

      /**
       * @typedef {import("../models/index").Model} Model
       */

      /**
       * Private key to access previous version of the model
       */

      var prevmodel = Symbol("prevModel");
      /**
       * private key to access validation config
       */

      var validations = Symbol("validations");
      /**
       * Process mixin pre or post update
       */

      var mixinType = {
        pre: Symbol("pre"),
        post: Symbol("post"),
      };
      /**
       * Stored mixins - use private symbol as key to prevent overwrite
       */

      var mixinSets =
        ((_mixinSets = {}),
        _defineProperty(_mixinSets, mixinType.pre, Symbol("preUpdateMixins")),
        _defineProperty(_mixinSets, mixinType.post, Symbol("postUpdateMixins")),
        _mixinSets);
      /**
       * Set of pre mixins
       */

      var premixins = mixinSets[mixinType.pre];
      /**
       * Set of post mixins
       */

      var postmixins = mixinSets[mixinType.post];
      /**
       * Apply any pre and post mixins and return the result.
       * @deprecated
       * @param {*} model - current model
       * @param {*} changes - object containing changes
       * @returns {import('.').Model} updated model
       */

      function processUpdate(model, changes) {
        changes[prevmodel] = JSON.parse(JSON.stringify(model)); // keep history

        var updates = model[premixins]
          ? _lib_utils__WEBPACK_IMPORTED_MODULE_0__.compose.apply(
              void 0,
              _toConsumableArray(model[premixins].values())
            )(changes)
          : changes;

        var updated = _objectSpread(_objectSpread({}, model), updates);

        return model[postmixins]
          ? _lib_utils__WEBPACK_IMPORTED_MODULE_0__.compose.apply(
              void 0,
              _toConsumableArray(model[postmixins].values())
            )(updated)
          : updated;
      }
      /**
       * @deprecated
       * Store mixins for execution on update
       * @param {mixinType} type
       * run before changes are applied or afterward
       * @param {*} o  Object containing changes to apply (pre)
       * or new object after changes have been applied (post)
       * @param {string} name `Function.name`
       * @param {functionalMixin} cb mixin function
       */

      function updateMixins(type, o, name, cb) {
        if (!mixinSets[type]) {
          throw new Error("invalid mixin type");
        }

        var mixinSet = o[mixinSets[type]] || new Map();

        if (!mixinSet.has(name)) {
          mixinSet.set(name, cb());
          return _objectSpread(
            _objectSpread({}, o),
            {},
            _defineProperty({}, mixinSets[type], mixinSet)
          );
        }

        return o;
      }
      /**
       * bitmask for identifying events
       */

      var eventMask = {
        update: 1,
        //  0001 Update
        create: 1 << 1,
        //  0010 Create
        onload: 1 << 2, //  0100 Load
      };

      function handleUpdateEvent(model, updates, event) {
        var isUpdate = eventMask.update & event;
        var decrypted = isUpdate ? model.decrypt() : {};
        return _objectSpread(
          _objectSpread(_objectSpread({}, model), updates),
          decrypted
        );
      }

      function isObject(p) {
        return p != null && _typeof(p) === "object";
      }

      function containsUpdates(model, changes, event) {
        if (eventMask.update & event) {
          var changeList = Object.keys(changes);
          if (changeList.length < 1) return false;

          if (
            changeList.every(function (k) {
              return (
                model[k] &&
                util__WEBPACK_IMPORTED_MODULE_1___default().isDeepStrictEqual(
                  changes[k],
                  model[k]
                )
              );
            })
          ) {
            return false;
          }
        }

        return true;
      }
      /**
       * Run validation functions enabled for a given event.
       * @param {Model} model - the composed object
       * @param {*} changes - object containing changes
       * @param {Number} event - Indicates what event is occuring:
       * 1st bit turned on means update, 2nd bit create, 3rd load,
       * see `eventMask`.
       */

      function validateModel(model, changes, event) {
        // if there are no changes, and the event is an update, return
        if (!containsUpdates(model, changes, event)) {
          return model;
        } // keep a history of the last saved model

        var input = _objectSpread(
          _objectSpread({}, changes),
          {},
          _defineProperty({}, prevmodel, JSON.parse(JSON.stringify(model)))
        ); // Validate just the input data

        var updates = model[validations]
          .filter(function (v) {
            return v.input & event;
          })
          .sort(function (a, b) {
            return a.order - b.order;
          })
          .map(function (v) {
            return model[v.name].apply(input);
          })
          .reduce(function (p, c) {
            return _objectSpread(_objectSpread({}, p), c);
          }, input);

        var updated = _objectSpread(_objectSpread({}, model), updates); // Validate the updated model

        return updated[validations]
          .filter(function (v) {
            return v.output & event;
          })
          .sort(function (a, b) {
            return a.order - b.order;
          })
          .map(function (v) {
            return updated[v.name]();
          })
          .reduce(function (p, c) {
            return _objectSpread(_objectSpread({}, p), c);
          }, updated);
      }
      /**
       * Specify when validations run.
       */

      var enableValidation = (function () {
        var onUpdate = enableEvent(true, false, false);
        var onCreate = enableEvent(false, true, false);
        var onCreateAndUpdate = enableEvent(true, true, false);
        var onLoad = enableEvent(false, false, true);
        var onAll = enableEvent(true, true, true);
        var never = enableEvent(false, false, false);
        return {
          /**
           * Validation runs on update.
           */
          onUpdate: onUpdate,

          /**
           * Validation runs on create.
           */
          onCreate: onCreate,

          /**
           * Validation runs on both create and update.
           */
          onCreateAndUpdate: onCreateAndUpdate,

          /**
           * Validation runs on load.
           */
          onLoad: onLoad,

          /**
           * Validation runs on all events.
           */
          onAll: onAll,

          /**
           * Validation runs on zero events (disabled).
           */
          never: never,
        };
      })();
      /**
       * Enable validation to run on specific events.
       * @param {boolean} onUpdate - whether or not to run the validation on update.
       * Defaults to `true`.
       * @param {boolean} onCreate - whether or not to run the validation on create.
       * Defaults to `true`.
       * @param {boolean} onLoad - whether or not to run the validation when
       * the object is being loaded into memory after being deserialized.
       * Defaults to `false`.
       */

      function enableEvent() {
        var onUpdate =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : true;
        var onCreate =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : true;
        var onLoad =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : false;
        var enabled = 0;

        if (onUpdate) {
          enabled |= eventMask.update;
        }

        if (onCreate) {
          enabled |= eventMask.create;
        }

        if (onLoad) {
          enabled |= eventMask.onload;
        }

        return enabled;
      }
      /**
       * Add a validation function to be called for a given event.
       * @typedef {object} validationConfig
       * @property {*} o - the composed object
       * @property {string} name - name of function to run
       * @property {number} input - "input" validations run against
       * the data passed by the caller in the request. Use `enableValidation`
       * to provide a value for this param.
       * @property {number} output - "output" functions run against the
       * model after the changes have been applied.
       * @property {number} order - order in which validation runs
       * @param {validationConfig} param0
       */

      function addValidation(_ref) {
        var model = _ref.model,
          name = _ref.name,
          _ref$input = _ref.input,
          input = _ref$input === void 0 ? 0 : _ref$input,
          _ref$output = _ref.output,
          output = _ref$output === void 0 ? 0 : _ref$output,
          _ref$order = _ref.order,
          order = _ref$order === void 0 ? 50 : _ref$order;
        var config = model[validations] || [];

        if (
          config.some(function (v) {
            return v.name === name;
          })
        ) {
          return model;
        }

        return _objectSpread(
          _objectSpread({}, model),
          {},
          _defineProperty(
            {
              validateModel: validateModel,
            },
            validations,
            [].concat(_toConsumableArray(config), [
              {
                name: name,
                input: input,
                output: output,
                order: order,
              },
            ])
          )
        );
      }
      /**
       * Resolve keys:
       * If the value includes an array, flatten it, then for each element:
       * If the value is "*", return all keys of the object.
       * If the value is a function, execute it to get a dynamic key or key list.
       * If the value is a RegExp, test it to get dynamic key list.
       * If any of the above produce an array of keys, flatten it.
       * @param {*} o - Object to compose
       * @param  {Array<string | function(*):string>} propKeys -
       * Names (or functions that return names) of properties
       * @returns {string[]} list of (resolved) property keys
       */

      function parseKeys(o) {
        for (
          var _len = arguments.length,
            propKeys = new Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          propKeys[_key - 1] = arguments[_key];
        }

        var keys = propKeys.flat().map(function (k) {
          if (typeof k === "function") return k(o);
          if (k instanceof RegExp)
            return Object.keys(o).filter(function (key) {
              return k.test(key);
            });
          if (k === "*") return Object.keys(o);
          return k;
        });
        return keys.flat();
      }
      /**
       * Encrypt properties. Properties remain encrypted indefinitely, and
       * must be explicitly decrypted as needed, e.g. reading values in memory,
       * from storage, serializing and sending to an external system.
       * @param  {Array<string | function(*):string>} propKeys -
       * Names (or functions that return names) of properties to encrypt
       * @returns {functionalMixin} mixin function
       */

      var encryptProperties = function encryptProperties() {
        for (
          var _len2 = arguments.length, propKeys = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          propKeys[_key2] = arguments[_key2];
        }

        return function (o) {
          var keys = parseKeys.apply(void 0, [o].concat(propKeys));

          var encryptProps = function encryptProps(obj) {
            return keys
              .map(function (key) {
                return obj[key]
                  ? _defineProperty(
                      {},
                      key,
                      (0, _lib_utils__WEBPACK_IMPORTED_MODULE_0__.encrypt)(
                        obj[key]
                      )
                    )
                  : {};
              })
              .reduce(function (p, c) {
                return _objectSpread(_objectSpread({}, p), c);
              });
          };

          return _objectSpread(
            _objectSpread(
              {
                encryptProperties: function encryptProperties() {
                  return encryptProps(this);
                },
              },
              addValidation({
                model: o,
                name: encryptProperties.name,
                input: enableValidation.onUpdate,
                output: enableValidation.onCreate,
                order: 99,
              })
            ),
            {},
            {
              decrypt: function decrypt() {
                var _this = this;

                return keys
                  .map(function (key) {
                    return _this[key]
                      ? _defineProperty(
                          {},
                          key,
                          (0, _lib_utils__WEBPACK_IMPORTED_MODULE_0__.decrypt)(
                            _this[key]
                          )
                        )
                      : {};
                  })
                  .reduce(function (p, c) {
                    return _objectSpread(_objectSpread({}, p), c);
                  });
              },
            }
          );
        };
      };
      /**
       * Prevent properties from being modified.
       * Accepts a property name or a function that returns a property name.
       * @param  {Array<string | function(*):string | RegExp>} propKeys - names of properties to freeze
       */

      var freezeProperties = function freezeProperties() {
        for (
          var _len3 = arguments.length, propKeys = new Array(_len3), _key3 = 0;
          _key3 < _len3;
          _key3++
        ) {
          propKeys[_key3] = arguments[_key3];
        }

        return function (o) {
          var preventUpdates = function preventUpdates(obj) {
            var keys = parseKeys.apply(void 0, [obj].concat(propKeys));
            var sideEffects = Object.keys(obj).filter(function (key) {
              return keys.includes(key);
            });

            if (
              (sideEffects === null || sideEffects === void 0
                ? void 0
                : sideEffects.length) > 0
            ) {
              throw new Error(
                "cannot update readonly properties: ".concat(sideEffects)
              );
            }
          };

          return _objectSpread(
            {
              freezeProperties: function freezeProperties() {
                preventUpdates(this);
              },
            },
            addValidation({
              model: o,
              name: freezeProperties.name,
              input: enableValidation.onUpdate,
              order: 20,
            })
          );
        };
      };
      /**
       * Enforce required fields.
       * @param {Array<string | function(*):string | RegExp>} propKeys -
       * required property key names - can be a function or regex
       * that returns the property key names
       */

      var requireProperties = function requireProperties() {
        for (
          var _len4 = arguments.length, propKeys = new Array(_len4), _key4 = 0;
          _key4 < _len4;
          _key4++
        ) {
          propKeys[_key4] = arguments[_key4];
        }

        return function (o) {
          var keys = parseKeys.apply(void 0, [o].concat(propKeys));

          function requireProps(obj) {
            var missing = keys.filter(function (key) {
              return key && !obj[key];
            });

            if (
              (missing === null || missing === void 0
                ? void 0
                : missing.length) > 0
            ) {
              throw new Error("missing required properties: ".concat(missing));
            }
          }

          return _objectSpread(
            {
              requireProperties: function requireProperties() {
                requireProps(this);
              },
            },
            addValidation({
              model: o,
              name: requireProperties.name,
              output: enableValidation.onCreateAndUpdate,
              order: 75,
            })
          );
        };
      };
      /**
       * Hash passwords.
       * @param {*} hash hash algorithm
       * @param  {Array<string | function(*):string | RegExp>} propKeys name of password props
       */

      var hashPasswords = function hashPasswords() {
        for (
          var _len5 = arguments.length, propKeys = new Array(_len5), _key5 = 0;
          _key5 < _len5;
          _key5++
        ) {
          propKeys[_key5] = arguments[_key5];
        }

        return function (o) {
          var keys = parseKeys.apply(void 0, [o].concat(propKeys));

          function hashPwds(obj) {
            return keys
              .map(function (key) {
                return obj[key]
                  ? _defineProperty(
                      {},
                      key,
                      (0, _lib_utils__WEBPACK_IMPORTED_MODULE_0__.hash)(
                        obj[key]
                      )
                    )
                  : {};
              })
              .reduce(function (p, c) {
                return _objectSpread(_objectSpread({}, p), c);
              });
          }

          return _objectSpread(
            {
              hashPasswords: function hashPasswords() {
                return hashPwds(this);
              },
            },
            addValidation({
              model: o,
              name: hashPasswords.name,
              input: enableValidation.onUpdate,
              output: enableValidation.onCreate,
              order: 80,
            })
          );
        };
      };
      var internalPropList = [];
      /**
       * Reject unknown properties in user input. Allow only approved keys.
       * @param  {...any} propKeys
       */

      var allowProperties = function allowProperties() {
        for (
          var _len6 = arguments.length, propKeys = new Array(_len6), _key6 = 0;
          _key6 < _len6;
          _key6++
        ) {
          propKeys[_key6] = arguments[_key6];
        }

        return function (o) {
          function rejectUnknownProps() {
            var keys = parseKeys.apply(void 0, [o].concat(propKeys));
            var allowList = keys.concat(internalPropList);
            var unknownProps = Object.keys(o).filter(function (key) {
              return !allowList.includes(key);
            });

            if (
              (unknownProps === null || unknownProps === void 0
                ? void 0
                : unknownProps.length) > 0
            ) {
              throw new Error("invalid properties: ".concat(unknownProps));
            }
          }

          return _objectSpread(
            {
              rejectUnknownProperties: function rejectUnknownProperties() {
                return rejectUnknownProps(this);
              },
            },
            addValidation({
              model: o,
              name: "rejectUnknownProperties",
              input: enableValidation.onUpdate,
              order: 15,
            })
          );
        };
      };
      /**
       * Test regular expressions
       */

      var RegEx = {
        email: /^(.+)@(.+){2,}\.(.+){2,}$/,
        ipv4Address: /^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$/,
        ipv6Address: /^((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7}$/,
        phone: /^[1-9]\d{2}-\d{3}-\d{4}/,
        creditCard: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
        ssn: /^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$/,

        /**
         * Allow caller to pass a keyword that refers to one of the regex above
         * @param {regexType} expr
         * @param {*} val
         */
        test: function test(expr, val) {
          var _expr =
            Object.keys(this).includes(expr) && this[expr] instanceof RegExp
              ? this[expr]
              : expr;

          return _expr.test(val);
        },
      };
      /**
       * @callback isValid
       * @param {Object} o - the property owner
       * @param {*} propVal - the property value
       * @returns {boolean} - true if valid
       *
       * @typedef {'email'|'phone'|'ipv4Address'|'ipv6Address'|'creditCard'|'ssn'|RegExp} regexType
       *
       * @typedef {{
       *  propKey:string,
       *  isValid?:isValid,
       *  values?:any[],
       *  regex?:regexType,
       *  maxlen?:number
       *  maxnum?:number
       *  typeof?:string
       *  unique?:{ encrypted:boolean }
       * }} validation
       */

      function evaluateUniqueness(v, o, propVal) {
        var compareVal = v.unique.encrypted
          ? (0, _lib_utils__WEBPACK_IMPORTED_MODULE_0__.encrypt)(propVal)
          : propVal;
        return (
          o.listSync(_defineProperty({}, v.propKey, compareVal)).length < 1
        );
      }
      /**
       * Run validation tests
       */

      var Validator = {
        tests: {
          isValid: function isValid(v, o, propVal) {
            return v.isValid(o, propVal);
          },
          values: function values(v, o, propVal) {
            return v.values.includes(propVal);
          },
          regex: function regex(v, o, propVal) {
            return RegEx.test(v.regex, propVal);
          },
          typeof: function _typeof(v, o, propVal) {
            return v["typeof"] === _typeof(propVal);
          },
          maxnum: function maxnum(v, o, propVal) {
            return v.maxnum + 1 > propVal;
          },
          maxlen: function maxlen(v, o, propVal) {
            return v.maxlen + 1 > propVal.length;
          },
          unique: function unique(v, o, propVal) {
            return evaluateUniqueness(v, o, propVal);
          },
        },

        /**
         * Returns true if tests pass.
         * @param {validation} v validation config
         * @param {Object} o object to compose
         * @param {*} propVal value of property to validate
         * @returns {boolean} true if tests pass
         */
        isValid: function isValid(v, o, propVal) {
          var _this2 = this;

          return Object.keys(this.tests).every(function (key) {
            if (v[key]) {
              // the test `key` is specified, run it
              return _this2.tests[key](v, o, propVal);
            }

            return true;
          });
        },
      };
      /**
       * Verify a property value is a member of a list,
       * is unique within a set of model instances,
       * is of a certain length, size or type,
       * matches a regular expression,
       * or satisfies a custom validation function.
       * @param {validation[]} validations
       */

      var validateProperties = function validateProperties(validations) {
        return function (o) {
          function validate(obj) {
            var invalid = validations.filter(function (v) {
              var propVal = obj[v.propKey];

              if (!propVal) {
                return false;
              }

              return !Validator.isValid(v, obj, propVal);
            });

            if (
              (invalid === null || invalid === void 0
                ? void 0
                : invalid.length) > 0
            ) {
              throw new Error(
                "invalid value for ".concat(
                  _toConsumableArray(
                    invalid.map(function (v) {
                      return v.propKey;
                    })
                  )
                )
              );
            }
          }

          return _objectSpread(
            {
              validateProperties: function validateProperties() {
                validate(this);
              },
            },
            addValidation({
              model: o,
              name: validateProperties.name,
              input: enableValidation.onUpdate,
              output: enableValidation.onCreate,
              order: 90,
            })
          );
        };
      };
      /**
       * @callback updaterFn
       * @param {Object} o
       * @param  {*} propVal
       * @returns {Object} object with updated properties
       *
       * @typedef {{
       * propKey: string,
       * update: updaterFn
       * }} updater
       */

      /**
       * Respond to property updates by updating addtional (dependent) properties as needed.
       * @param {updater[]} updaters
       */

      var updateProperties = function updateProperties(updaters) {
        return function (o) {
          function updateProps(obj) {
            var updates = updaters.filter(function (u) {
              return obj[u.propKey];
            });

            if (
              (updates === null || updates === void 0
                ? void 0
                : updates.length) > 0
            ) {
              return updates
                .map(function (u) {
                  return u.update(o, obj[u.propKey]);
                })
                .reduce(function (p, c) {
                  return _objectSpread(_objectSpread({}, p), c);
                });
            }
          }

          return _objectSpread(
            {
              updateProperties: function updateProperties() {
                return updateProps(this);
              },
            },
            addValidation({
              model: o,
              name: updateProperties.name,
              input: enableValidation.onUpdate,
              order: 35,
            })
          );
        };
      };
      /**
       * Set a validation that invokes a port. The port must be configured
       * in the `ModelSpecification`.
       * @param {string} fn - name of port (as it appears in the ModelSpec)
       * @param {boolean} onCreate - invoke on create
       * @param {boolean} onUpdate - invoke on update
       * @param  {...any} args - pass arguments
       */

      var invokePort = function invokePort(fn, onCreate, onUpdate) {
        for (
          var _len7 = arguments.length,
            args = new Array(_len7 > 3 ? _len7 - 3 : 0),
            _key7 = 3;
          _key7 < _len7;
          _key7++
        ) {
          args[_key7 - 3] = arguments[_key7];
        }

        return /*#__PURE__*/ (function () {
          var _ref5 = _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee(o) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      return _context.abrupt(
                        "return",
                        _objectSpread(
                          _objectSpread({}, o),
                          {},
                          {
                            invokePort: function invokePort() {
                              console.log({
                                func: "invokePort",
                                fn: fn,
                                args: args,
                              });
                              return this[fn]
                                .apply(this, args)
                                .then(function (o) {
                                  return o;
                                });
                            },
                          },
                          addValidation({
                            model: o,
                            name: "invokePort",
                            output: enableValidation.onUpdate,
                            order: 85,
                          })
                        )
                      );

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          );

          return function (_x) {
            return _ref5.apply(this, arguments);
          };
        })();
      };
      /**
       * Set a validation that calls a model method or provided function.
       * @param {string|function(Model, ...any):Promise<any>} fn - callback function
       * or name of method to executee
       * @param {boolean} onCreate - invoke on create
       * @param {boolean} onUpdate - invoke on update
       * @param  {...any} args - pass arguments to the method/function
       * @return {Model}
       */

      var execMethod = function execMethod(fn, onCreate, onUpdate) {
        for (
          var _len8 = arguments.length,
            args = new Array(_len8 > 3 ? _len8 - 3 : 0),
            _key8 = 3;
          _key8 < _len8;
          _key8++
        ) {
          args[_key8 - 3] = arguments[_key8];
        }

        return /*#__PURE__*/ (function () {
          var _ref6 = _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee3(o) {
              var functionType;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      functionType = {
                        function: function _function(fn, obj) {
                          for (
                            var _len9 = arguments.length,
                              args = new Array(_len9 > 2 ? _len9 - 2 : 0),
                              _key9 = 2;
                            _key9 < _len9;
                            _key9++
                          ) {
                            args[_key9 - 2] = arguments[_key9];
                          }

                          return fn
                            .apply(void 0, [obj].concat(args))
                            .then(function (o) {
                              return o;
                            });
                        },
                        string: function string(fn, obj) {
                          for (
                            var _len10 = arguments.length,
                              args = new Array(_len10 > 2 ? _len10 - 2 : 0),
                              _key10 = 2;
                            _key10 < _len10;
                            _key10++
                          ) {
                            args[_key10 - 2] = arguments[_key10];
                          }

                          return obj[fn].apply(obj, args).then(function (o) {
                            return o;
                          });
                        },
                      };
                      return _context3.abrupt(
                        "return",
                        _objectSpread(
                          _objectSpread({}, o),
                          {},
                          {
                            execMethod: function execMethod() {
                              var _this3 = this;

                              return _asyncToGenerator(
                                /*#__PURE__*/ regeneratorRuntime.mark(
                                  function _callee2() {
                                    var model;
                                    return regeneratorRuntime.wrap(
                                      function _callee2$(_context2) {
                                        while (1) {
                                          switch (
                                            (_context2.prev = _context2.next)
                                          ) {
                                            case 0:
                                              _context2.next = 2;
                                              return functionType[
                                                _typeof(fn)
                                              ].apply(
                                                functionType,
                                                [fn, _this3].concat(args)
                                              );

                                            case 2:
                                              model = _context2.sent;
                                              return _context2.abrupt(
                                                "return",
                                                model
                                              );

                                            case 4:
                                            case "end":
                                              return _context2.stop();
                                          }
                                        }
                                      },
                                      _callee2
                                    );
                                  }
                                )
                              )();
                            },
                          },
                          addValidation({
                            model: o,
                            name: "execMethod",
                            output: enableValidation.onUpdate,
                            order: 40,
                          })
                        )
                      );

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })
          );

          return function (_x2) {
            return _ref6.apply(this, arguments);
          };
        })();
      };
      /**
       * Create a method on a model.
       * @param {*} fn
       * @param  {...any} args
       */

      var createMethod = function createMethod(fn) {
        for (
          var _len11 = arguments.length,
            args = new Array(_len11 > 1 ? _len11 - 1 : 0),
            _key11 = 1;
          _key11 < _len11;
          _key11++
        ) {
          args[_key11 - 1] = arguments[_key11];
        }

        return function (o) {
          return _objectSpread(
            _objectSpread({}, o),
            {},
            _defineProperty({}, fn.name, function () {
              return fn.apply(void 0, args);
            })
          );
        };
      };
      /**
       * Check the value of the property before returning its key.
       * @param {*} propKey
       * @param {regexType} expr
       * @returns {function(any):any} dynamic property func
       */

      var withValidFormat = function withValidFormat(propKey, expr) {
        return function (o) {
          if (o[propKey] && !RegEx.test(expr, o[propKey])) {
            throw new Error("invalid ".concat(propKey));
          }

          return propKey;
        };
      };
      /**
       *
       * @param {string} value
       * @param {regexType} expr
       */

      var checkFormat = function checkFormat(value, expr) {
        if (value && !RegEx.test(expr, value)) {
          var x = expr instanceof RegExp ? value : expr;
          throw new Error("".concat(x, " invalid"));
        }
      };
      /**
       * Implement GDPR encryption requirement across models
       */

      var encryptPersonalInfo = encryptProperties(
        /^last.*Name$|^surname$|^family.*Name$/i,
        /^shipping.*Address$/i,
        /^billing.*Address$/i,
        /^home.*Address$/i,
        /email|e-mail/i,
        /^phone$|^home.*phone$/i,
        /^mobile$|^mobile.*number$|^cell.*number$/i,
        /^credit.*Card/i,
        /^cvv$/i,
        /^ssn$|^socialSecurity/i,
        /^encrypted/i
      );
      /**
       * Global mixins
       */

      var GlobalMixins = [encryptPersonalInfo];
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = GlobalMixins;

      /***/
    },

  /***/ "./src/models/order.js":
    /*!*****************************!*\
  !*** ./src/models/order.js ***!
  \*****************************/
    /*! namespace exports */
    /*! export OrderStatus [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export addressValidated [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export approve [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export calcTotal [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export cancel [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export cancelPayment [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export checkItems [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export errorCallback [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export freezeOnApproval [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export freezeOnCompletion [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export handleOrderEvent [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export handleStatusChange [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export orderFactory [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export orderPicked [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export orderShipped [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export orderTotalValid [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export paymentAuthorized [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export paymentCompleted [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export readyToDelete [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export recalcTotal [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export refundPayment [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export requiredForApproval [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export requiredForCompletion [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export requiredForGuest [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export returnDelivery [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export returnInventory [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export returnShipment [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export statusChangeValid [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export submit [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export timeoutCallback [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export updateSignature [provided] [no usage info] [missing usage info prevents renaming] */
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
        /* harmony export */ OrderStatus: () => /* binding */ OrderStatus,
        /* harmony export */ checkItems: () => /* binding */ checkItems,
        /* harmony export */ calcTotal: () => /* binding */ calcTotal,
        /* harmony export */ freezeOnApproval: () =>
          /* binding */ freezeOnApproval,
        /* harmony export */ freezeOnCompletion: () =>
          /* binding */ freezeOnCompletion,
        /* harmony export */ requiredForGuest: () =>
          /* binding */ requiredForGuest,
        /* harmony export */ requiredForApproval: () =>
          /* binding */ requiredForApproval,
        /* harmony export */ requiredForCompletion: () =>
          /* binding */ requiredForCompletion,
        /* harmony export */ statusChangeValid: () =>
          /* binding */ statusChangeValid,
        /* harmony export */ orderTotalValid: () =>
          /* binding */ orderTotalValid,
        /* harmony export */ recalcTotal: () => /* binding */ recalcTotal,
        /* harmony export */ updateSignature: () =>
          /* binding */ updateSignature,
        /* harmony export */ readyToDelete: () => /* binding */ readyToDelete,
        /* harmony export */ paymentCompleted: () =>
          /* binding */ paymentCompleted,
        /* harmony export */ orderShipped: () => /* binding */ orderShipped,
        /* harmony export */ orderPicked: () => /* binding */ orderPicked,
        /* harmony export */ addressValidated: () =>
          /* binding */ addressValidated,
        /* harmony export */ paymentAuthorized: () =>
          /* binding */ paymentAuthorized,
        /* harmony export */ refundPayment: () => /* binding */ refundPayment,
        /* harmony export */ handleStatusChange: () =>
          /* binding */ handleStatusChange,
        /* harmony export */ handleOrderEvent: () =>
          /* binding */ handleOrderEvent,
        /* harmony export */ orderFactory: () => /* binding */ orderFactory,
        /* harmony export */ approve: () => /* binding */ approve,
        /* harmony export */ cancel: () => /* binding */ cancel,
        /* harmony export */ submit: () => /* binding */ submit,
        /* harmony export */ errorCallback: () => /* binding */ errorCallback,
        /* harmony export */ timeoutCallback: () =>
          /* binding */ timeoutCallback,
        /* harmony export */ returnInventory: () =>
          /* binding */ returnInventory,
        /* harmony export */ returnShipment: () => /* binding */ returnShipment,
        /* harmony export */ returnDelivery: () => /* binding */ returnDelivery,
        /* harmony export */ cancelPayment: () => /* binding */ cancelPayment,
        /* harmony export */
      });
      /* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./mixins */ "./src/models/mixins.js"
      );
      /* harmony import */ var _check_payload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./check-payload */ "./src/models/check-payload.js"
      );
      /* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../lib/utils */ "./src/lib/utils.js"
      );

      var _OrderActions;

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

      /**w
       * @typedef {string|RegExp} topic
       * @typedef {function(string)} eventCallback
       * @typedef {import('../adapters/index').adapterFunction} adapterFunction
       * @typedef {string} id
       *
       * @typedef {Object} Order
       * @property {function(topic,eventCallback)} listen - listen for events
       * @property {import('../adapters/event-adapter').notifyType} notify
       * @property {adapterFunction} validateAddress - returns valid address or throws exception
       * @property {adapterFunction} completePayment - completes payment for an authorized charge
       * @property {adapterFunction} verifyDelivery - verify the order was received by the customer
       * @property {adapterFunction} trackShipment
       * @property {adapterFunction} refundPayment
       * @property {adapterFunction} compensate - undo all transactions up to this point
       * @property {function():Promise<Order>} pickOrder - pick the items and get them ready for shipment
       * @property {adapterFunction} authorizePayment - verify payment info, credit avail
       * @property {import('../adapters/shipping-adapter')} shipOrder
       * {import('../adapters/shipping-adapter').shipOrder} shipOrder -
       * calls shipping service to request delivery
       * @property {function(Order):Promise<void>} save - saves order
       * @property {function():Promise<Order>} find - finds order
       * @property {string} shippingAddress
       * @property {string} orderNo = the order number
       * @property {string} trackingId - id given by tracking status for this `orderNo`
       * @property {function():Order} decrypt - decrypts encypted properties
       * @property {function({key1:any,keyN:any}, boolean):Promise<Order>} update - update the order,
       * set the second arg to false to turn off validation.
       * @property {'APPROVED'|'SHIPPING'|'CANCELED'|'COMPLETED'} orderStatus
       * @property {function():Promise<import("../models/index").Model>} customer - retrieves related customer object.
       * @property {function(string,Order)} emit - broadcast domain event
       * @property {function():boolean} paymentAccepted - payment approved and funds reserved
       * @property {function():boolean} autoCheckout - whether or not to immediately submit the order
       */

      var orderStatus = "orderStatus";
      var orderTotal = "orderTotal";
      var orderNo = "orderNo";
      var OrderStatus = {
        PENDING: "PENDING",
        APPROVED: "APPROVED",
        SHIPPING: "SHIPPING",
        COMPLETE: "COMPLETE",
        CANCELED: "CANCELED",
      };
      var CREATE_CUSTOMER_EVENT = "addModel:CREATECUSTOMER";
      /**
       *
       * @param {*} items
       */

      var checkItems = function checkItems(orderItems) {
        if (!orderItems) {
          throw new Error("order contains no items");
        }

        var items = Array.isArray(orderItems) ? orderItems : [orderItems];

        if (
          items.length > 0 &&
          items.every(function (i) {
            return i.itemId && typeof i.price === "number";
          })
        ) {
          return items;
        }

        throw new Error("order items invalid");
      };
      /**
       * Calculate order total
       * @param {*} items
       */

      var calcTotal = function calcTotal(orderItems) {
        var items = checkItems(orderItems);
        return items.reduce(function (total, item) {
          var qty = item.qty || 1;
          return (total += item.price * qty);
        }, 0);
      };
      /**
       * No changes to `propKey` properties once the order is approved
       * @param {*} o - the order
       * @param {*} propKey
       * @returns {string | null} the key or `null`
       */

      var freezeOnApproval = function freezeOnApproval(propKey) {
        return function (o) {
          return o[_mixins__WEBPACK_IMPORTED_MODULE_0__.prevmodel]
            .orderStatus !== OrderStatus.PENDING
            ? propKey
            : null;
        };
      };
      /**
       * No changes to `propKey` once order is complete or canceled
       * @param {*} o - the order
       * @param {*} propKey
       * @returns {string | null} the key or `null`
       */

      var freezeOnCompletion = function freezeOnCompletion(propKey) {
        return function (o) {
          return [OrderStatus.COMPLETE, OrderStatus.CANCELED].includes(
            o[_mixins__WEBPACK_IMPORTED_MODULE_0__.prevmodel].orderStatus
          )
            ? propKey
            : null;
        };
      };
      /**
       * If not a registered customer, provide shipping & payment details.
       * @param {*} o
       * @param {*} propKey
       * @returns {string | void} the key or `void`
       */

      var requiredForGuest = function requiredForGuest(propKey) {
        return function (o) {
          return o.customerId ? null : propKey;
        };
      };
      /**
       * Value required to approve order.
       * @param {*} propKey
       */

      var requiredForApproval = function requiredForApproval(propKey) {
        return function (o) {
          if (!o.orderStatus) return;
          return o.orderStatus === OrderStatus.APPROVED ? propKey : void 0;
        };
      };
      /**
       * Value required to complete order
       * @param {*} o
       * @param {*} propKey
       * @returns {string | void} the key or `void`
       */

      var requiredForCompletion = function requiredForCompletion(propKey) {
        return function (o) {
          if (!o.orderStatus) return;
          return o.orderStatus === OrderStatus.COMPLETE ? propKey : void 0;
        };
      };

      var invalidStatusChange = function invalidStatusChange(from, to) {
        return function (o, propVal) {
          return (
            propVal === to &&
            o[_mixins__WEBPACK_IMPORTED_MODULE_0__.prevmodel].orderStatus ===
              from
          );
        };
      };

      var invalidStatusChanges = [
        // Can't change back to pending once approved
        invalidStatusChange(OrderStatus.APPROVED, OrderStatus.PENDING), // Can't change back to pending once shipped
        invalidStatusChange(OrderStatus.SHIPPING, OrderStatus.PENDING), // Can't change back to approved once shipped
        invalidStatusChange(OrderStatus.SHIPPING, OrderStatus.APPROVED), // Can't change directly to shipping from pending
        invalidStatusChange(OrderStatus.PENDING, OrderStatus.SHIPPING), // Can't change directly to complete from pending
        invalidStatusChange(OrderStatus.PENDING, OrderStatus.COMPLETE), // Can't change final status
        invalidStatusChange(OrderStatus.COMPLETE, OrderStatus.PENDING), // Can't change final status
        invalidStatusChange(OrderStatus.COMPLETE, OrderStatus.SHIPPING),
      ];
      /**
       * Check that status changes are valid
       */

      var statusChangeValid = function statusChangeValid(o, propVal) {
        var _o$prevmodel;

        if (
          !(
            (_o$prevmodel =
              o[_mixins__WEBPACK_IMPORTED_MODULE_0__.prevmodel]) !== null &&
            _o$prevmodel !== void 0 &&
            _o$prevmodel.orderStatus
          )
        )
          return true;

        if (
          invalidStatusChanges.some(function (isc) {
            return isc(o, propVal);
          })
        ) {
          throw new Error("invalid status change");
        }

        return true;
      };
      /**
       *
       * @param {*} o
       * @param {*} propVal
       */

      var orderTotalValid = function orderTotalValid(o, propVal) {
        return calcTotal(o.orderItems) === propVal;
      };
      /**
       * Recalculate order total
       * @param {object} o - the object (order)
       * @param {number} propVal - the property value
       */

      var recalcTotal = function recalcTotal(o, propVal) {
        return {
          orderTotal: calcTotal(propVal),
        };
      };
      /**
       * Updated signature requirement if `orderTotal` above certain value
       * @param {object} o - the object (order)
       * @param {number} propVal - the property value
       */

      var updateSignature = function updateSignature(o, propVal) {
        return {
          signatureRequired: calcTotal(propVal) > 999.99 || o.signatureRequired,
        };
      };
      /**
       * Don't delete orders before they're complete.
       */

      function readyToDelete(model) {
        if (
          ![OrderStatus.COMPLETE, OrderStatus.CANCELED].includes(
            model.orderStatus
          )
        ) {
          throw new Error("order status incomplete");
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
          if (order)
            order.emit("orderError", {
              func: func,
              error: error,
            });
        } catch (error) {
          console.error("order.emit", error);
        }

        console.error({
          func: func,
          error: error,
        });
        2;
        throw new Error(error);
      }
      /**
       * Callback invoked by adapter when payment is complete
       * @param {{model:Order}} options
       */

      function paymentCompleted() {
        return _paymentCompleted.apply(this, arguments);
      }
      /**
       * Callback invoked by shipping adapter when order is picked up.
       * @param {{model:Order}} options
       * @param {string} shipmentId
       */

      function _paymentCompleted() {
        _paymentCompleted = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee7() {
            var options,
              payload,
              order,
              changes,
              _args7 = arguments;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch ((_context7.prev = _context7.next)) {
                  case 0:
                    options =
                      _args7.length > 0 && _args7[0] !== undefined
                        ? _args7[0]
                        : {};
                    payload =
                      _args7.length > 1 && _args7[1] !== undefined
                        ? _args7[1]
                        : {};
                    order = options.model;
                    changes = (0,
                    _check_payload__WEBPACK_IMPORTED_MODULE_1__.default)(
                      "confirmationCode",
                      options,
                      payload,
                      paymentCompleted.name
                    );
                    return _context7.abrupt(
                      "return",
                      order.update(
                        _objectSpread(
                          _objectSpread({}, changes),
                          {},
                          {
                            orderStatus: OrderStatus.COMPLETE,
                          }
                        )
                      )
                    );

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          })
        );
        return _paymentCompleted.apply(this, arguments);
      }

      function orderShipped() {
        return _orderShipped.apply(this, arguments);
      }
      /**
       * Callback invoked when order is ready for pickup
       * @param {{ model:Order }} options
       */

      function _orderShipped() {
        _orderShipped = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee8() {
            var options,
              payload,
              order,
              shipmentPayload,
              _args8 = arguments;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch ((_context8.prev = _context8.next)) {
                  case 0:
                    options =
                      _args8.length > 0 && _args8[0] !== undefined
                        ? _args8[0]
                        : {};
                    payload =
                      _args8.length > 1 && _args8[1] !== undefined
                        ? _args8[1]
                        : {};
                    order = options.model;
                    shipmentPayload = (0,
                    _check_payload__WEBPACK_IMPORTED_MODULE_1__.default)(
                      "shipmentId",
                      options,
                      payload,
                      orderShipped.name
                    );
                    return _context8.abrupt(
                      "return",
                      order.update({
                        shipmentId: shipmentPayload.shipmentId,
                        orderStatus: OrderStatus.SHIPPING,
                      })
                    );

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          })
        );
        return _orderShipped.apply(this, arguments);
      }

      function orderPicked() {
        return _orderPicked.apply(this, arguments);
      }
      /**
       * Callback invoked when shippingAddress is verified (and possibly corrected)
       * @param {{ model:Order }} options
       * @param {string} shippingAddress
       */

      function _orderPicked() {
        _orderPicked = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee9() {
            var options,
              payload,
              order,
              changes,
              _args9 = arguments;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch ((_context9.prev = _context9.next)) {
                  case 0:
                    options =
                      _args9.length > 0 && _args9[0] !== undefined
                        ? _args9[0]
                        : {};
                    payload =
                      _args9.length > 1 && _args9[1] !== undefined
                        ? _args9[1]
                        : {};
                    order = options.model;
                    changes = (0,
                    _check_payload__WEBPACK_IMPORTED_MODULE_1__.default)(
                      "pickupAddress",
                      options,
                      payload,
                      addressValidated.name
                    );
                    return _context9.abrupt("return", order.update(changes));

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          })
        );
        return _orderPicked.apply(this, arguments);
      }

      function addressValidated() {
        return _addressValidated.apply(this, arguments);
      }
      /**
       * Called by adapter when port recevies response from payment service.
       * @param {{ model:Order }} options
       * @param {*} paymentAuthorization
       */

      function _addressValidated() {
        _addressValidated = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee10() {
            var options,
              payload,
              order,
              addressPayload,
              _args10 = arguments;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch ((_context10.prev = _context10.next)) {
                  case 0:
                    options =
                      _args10.length > 0 && _args10[0] !== undefined
                        ? _args10[0]
                        : {};
                    payload =
                      _args10.length > 1 && _args10[1] !== undefined
                        ? _args10[1]
                        : {};
                    order = options.model;
                    addressPayload = (0,
                    _check_payload__WEBPACK_IMPORTED_MODULE_1__.default)(
                      "shippingAddress",
                      options,
                      payload,
                      addressValidated.name
                    );
                    return _context10.abrupt(
                      "return",
                      order.update({
                        shippingAddress: addressPayload.shippingAddress,
                      })
                    );

                  case 5:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          })
        );
        return _addressValidated.apply(this, arguments);
      }

      function paymentAuthorized() {
        return _paymentAuthorized.apply(this, arguments);
      }
      /**
       * Called to refund payment when order is canceled.
       * @param {*} options
       * @param {*} payload
       * @returns
       */

      function _paymentAuthorized() {
        _paymentAuthorized = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee11() {
            var options,
              payload,
              order,
              changes,
              _args11 = arguments;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch ((_context11.prev = _context11.next)) {
                  case 0:
                    options =
                      _args11.length > 0 && _args11[0] !== undefined
                        ? _args11[0]
                        : {};
                    payload =
                      _args11.length > 1 && _args11[1] !== undefined
                        ? _args11[1]
                        : {};
                    order = options.model;
                    changes = (0,
                    _check_payload__WEBPACK_IMPORTED_MODULE_1__.default)(
                      "paymentAuthorization",
                      options,
                      payload,
                      paymentAuthorized.name
                    );
                    return _context11.abrupt("return", order.update(changes));

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11);
          })
        );
        return _paymentAuthorized.apply(this, arguments);
      }

      function refundPayment() {
        return _refundPayment.apply(this, arguments);
      }
      /**
       * Copy existing customer data into the order or create new customer.
       *
       * @param {Order} order
       * @throws {"InvalidCustomerId"}
       */

      function _refundPayment() {
        _refundPayment = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee12() {
            var options,
              payload,
              order,
              changes,
              _args12 = arguments;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch ((_context12.prev = _context12.next)) {
                  case 0:
                    options =
                      _args12.length > 0 && _args12[0] !== undefined
                        ? _args12[0]
                        : {};
                    payload =
                      _args12.length > 1 && _args12[1] !== undefined
                        ? _args12[1]
                        : {};
                    order = options.model;
                    changes = (0,
                    _check_payload__WEBPACK_IMPORTED_MODULE_1__.default)(
                      "refundReceipt",
                      options,
                      payload,
                      refundPayment.name
                    );
                    return _context12.abrupt("return", order.update(changes));

                  case 5:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          })
        );
        return _refundPayment.apply(this, arguments);
      }

      function getCustomerOrder(_x) {
        return _getCustomerOrder.apply(this, arguments);
      }
      /**
       * Starts the order service workflow.
       */

      function _getCustomerOrder() {
        _getCustomerOrder = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee13(order) {
            var customer, decrypted, updated;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch ((_context13.prev = _context13.next)) {
                  case 0:
                    if (!order.customerId) {
                      _context13.next = 11;
                      break;
                    }

                    _context13.next = 3;
                    return order.customer();

                  case 3:
                    customer = _context13.sent;

                    if (customer) {
                      _context13.next = 6;
                      break;
                    }

                    throw new Error("invalid customer id", order.customerId);

                  case 6:
                    // Add customer data to the order
                    decrypted = customer.decrypt();
                    _context13.next = 9;
                    return order.update({
                      creditCardNumber: decrypted.creditCardNumber,
                      shippingAddress: decrypted.shippingAddress,
                      billingAddress: decrypted.billingAddress,
                      email: decrypted.email,
                      lastName: decrypted.lastName,
                      firstName: customer.firstName,
                    });

                  case 9:
                    updated = _context13.sent;
                    return _context13.abrupt("return", updated);

                  case 11:
                    if (!order.saveShippingDetails) {
                      _context13.next = 14;
                      break;
                    }

                    _context13.next = 14;
                    return (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.async)(
                      order.emit(CREATE_CUSTOMER_EVENT, order)
                    );

                  case 14:
                    return _context13.abrupt("return", order);

                  case 15:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13);
          })
        );
        return _getCustomerOrder.apply(this, arguments);
      }

      var OrderActions =
        ((_OrderActions = {}),
        _defineProperty(
          _OrderActions,
          OrderStatus.PENDING,
          (function () {
            var _ref = _asyncToGenerator(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee(order) {
                var customerOrder, payment, address;
                return regeneratorRuntime.wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return getCustomerOrder(order);

                        case 3:
                          customerOrder = _context.sent;
                          _context.next = 6;
                          return (0,
                          _lib_utils__WEBPACK_IMPORTED_MODULE_2__.async)(
                            customerOrder.authorizePayment(paymentAuthorized)
                          );

                        case 6:
                          payment = _context.sent;

                          if (payment.ok) {
                            _context.next = 9;
                            break;
                          }

                          throw new Error(
                            "payment auth problem",
                            payment.error
                          );

                        case 9:
                          if (payment.object.paymentAccepted()) {
                            _context.next = 11;
                            break;
                          }

                          throw new Error("payment authorization declined");

                        case 11:
                          _context.next = 13;
                          return (0,
                          _lib_utils__WEBPACK_IMPORTED_MODULE_2__.async)(
                            payment.object.validateAddress(addressValidated)
                          );

                        case 13:
                          address = _context.sent;

                          if (!customerOrder.autoCheckout()) {
                            _context.next = 20;
                            break;
                          }

                          _context.t0 = handleStatusChange;
                          _context.next = 18;
                          return customerOrder.update(
                            _objectSpread(
                              _objectSpread(
                                _objectSpread({}, payment.object),
                                address.ok ? address.object : {}
                              ),
                              {},
                              {
                                orderStatus: OrderStatus.APPROVED,
                              }
                            ),
                            false
                          );

                        case 18:
                          _context.t1 = _context.sent;
                          (0, _context.t0)(_context.t1);

                        case 20:
                          _context.next = 25;
                          break;

                        case 22:
                          _context.prev = 22;
                          _context.t2 = _context["catch"](0);
                          console.error(_context.t2);

                        case 25:
                        case "end":
                          return _context.stop();
                      }
                    }
                  },
                  _callee,
                  null,
                  [[0, 22]]
                );
              })
            );

            return function (_x2) {
              return _ref.apply(this, arguments);
            };
          })()
        ),
        _defineProperty(
          _OrderActions,
          OrderStatus.APPROVED,
          (function () {
            var _ref2 = _asyncToGenerator(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(order) {
                return regeneratorRuntime.wrap(
                  function _callee2$(_context2) {
                    while (1) {
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          _context2.prev = 0;

                          if (!order.paymentAccepted()) {
                            _context2.next = 4;
                            break;
                          }

                          // don't block the caller by waiting
                          order.pickOrder(orderPicked);
                          return _context2.abrupt("return");

                        case 4:
                          order.emit(
                            "PayAuthFail",
                            "Payment authorization problem"
                          );
                          _context2.next = 10;
                          break;

                        case 7:
                          _context2.prev = 7;
                          _context2.t0 = _context2["catch"](0);
                          handleError(
                            _context2.t0,
                            order,
                            OrderStatus.APPROVED
                          );

                        case 10:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  },
                  _callee2,
                  null,
                  [[0, 7]]
                );
              })
            );

            return function (_x3) {
              return _ref2.apply(this, arguments);
            };
          })()
        ),
        _defineProperty(
          _OrderActions,
          OrderStatus.SHIPPING,
          (function () {
            var _ref3 = _asyncToGenerator(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee3(order) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch ((_context3.prev = _context3.next)) {
                      case 0:
                        try {
                          // don't block the caller waiting for this
                          // order.trackShipment(trackingUpdate);
                          console.debug({
                            func: OrderStatus.SHIPPING,
                            order: order,
                          });
                        } catch (error) {
                          handleError(error, order, OrderStatus.SHIPPING);
                        }

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              })
            );

            return function (_x4) {
              return _ref3.apply(this, arguments);
            };
          })()
        ),
        _defineProperty(
          _OrderActions,
          OrderStatus.CANCELED,
          (function () {
            var _ref4 = _asyncToGenerator(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee4(order) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch ((_context4.prev = _context4.next)) {
                      case 0:
                        try {
                          console.debug({
                            func: OrderStatus.CANCELED,
                            desc: "calling undo",
                            orderNo: order.orderNo,
                          });
                          order.undo();
                        } catch (error) {
                          handleError(error, order, OrderStatus.CANCELED);
                        }

                      case 1:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              })
            );

            return function (_x5) {
              return _ref4.apply(this, arguments);
            };
          })()
        ),
        _defineProperty(
          _OrderActions,
          OrderStatus.COMPLETE,
          (function () {
            var _ref5 = _asyncToGenerator(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee5(order) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch ((_context5.prev = _context5.next)) {
                      case 0:
                        console.log("do customer sentiment etc");
                        return _context5.abrupt("return");

                      case 2:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              })
            );

            return function (_x6) {
              return _ref5.apply(this, arguments);
            };
          })()
        ),
        _OrderActions);
      /**
       * Call order service workflow - controlled by status
       * @param {Order} order
       */

      function handleStatusChange(_x7) {
        return _handleStatusChange.apply(this, arguments);
      }
      /**
       * Called on create, update, delete of model instance.
       * @param {{model:Order}}
       */

      function _handleStatusChange() {
        _handleStatusChange = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee14(order) {
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch ((_context14.prev = _context14.next)) {
                  case 0:
                    return _context14.abrupt(
                      "return",
                      OrderActions[order.orderStatus](order)
                    );

                  case 1:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14);
          })
        );
        return _handleStatusChange.apply(this, arguments);
      }

      function handleOrderEvent(_x8) {
        return _handleOrderEvent.apply(this, arguments);
      }
      /**
       * Require a signature for orders $1000 and up
       * @param {*} input
       * @param {*} orderTotal
       */

      function _handleOrderEvent() {
        _handleOrderEvent = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee15(_ref6) {
            var order, eventType, changes;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch ((_context15.prev = _context15.next)) {
                  case 0:
                    (order = _ref6.model),
                      (eventType = _ref6.eventType),
                      (changes = _ref6.changes);

                    if (
                      !(
                        (changes !== null &&
                          changes !== void 0 &&
                          changes.orderStatus) ||
                        eventType === "CREATE"
                      )
                    ) {
                      _context15.next = 3;
                      break;
                    }

                    return _context15.abrupt(
                      "return",
                      handleStatusChange(order)
                    );

                  case 3:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15);
          })
        );
        return _handleOrderEvent.apply(this, arguments);
      }

      function needsSignature(input, orderTotal) {
        return typeof input === "boolean" ? input : orderTotal > 999.99;
      }
      /**
       * Returns factory function for the Order model.
       * @param {*} dependencies - inject dependencies
       */

      function orderFactory(dependencies) {
        return /*#__PURE__*/ (function () {
          var _createOrder = _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee6(_ref7) {
              var _order;

              var orderItems,
                _ref7$email,
                email,
                _ref7$lastName,
                lastName,
                _ref7$firstName,
                firstName,
                _ref7$customerId,
                customerId,
                _ref7$billingAddress,
                billingAddress,
                _ref7$shippingAddress,
                shippingAddress,
                _ref7$creditCardNumbe,
                creditCardNumber,
                _ref7$shippingPriorit,
                shippingPriority,
                _ref7$autoCheckout,
                _autoCheckout,
                _ref7$saveShippingDet,
                saveShippingDetails,
                requireSignature,
                total,
                signatureRequired,
                order;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch ((_context6.prev = _context6.next)) {
                    case 0:
                      (orderItems = _ref7.orderItems),
                        (_ref7$email = _ref7.email),
                        (email = _ref7$email === void 0 ? null : _ref7$email),
                        (_ref7$lastName = _ref7.lastName),
                        (lastName =
                          _ref7$lastName === void 0 ? null : _ref7$lastName),
                        (_ref7$firstName = _ref7.firstName),
                        (firstName =
                          _ref7$firstName === void 0 ? null : _ref7$firstName),
                        (_ref7$customerId = _ref7.customerId),
                        (customerId =
                          _ref7$customerId === void 0
                            ? null
                            : _ref7$customerId),
                        (_ref7$billingAddress = _ref7.billingAddress),
                        (billingAddress =
                          _ref7$billingAddress === void 0
                            ? null
                            : _ref7$billingAddress),
                        (_ref7$shippingAddress = _ref7.shippingAddress),
                        (shippingAddress =
                          _ref7$shippingAddress === void 0
                            ? null
                            : _ref7$shippingAddress),
                        (_ref7$creditCardNumbe = _ref7.creditCardNumber),
                        (creditCardNumber =
                          _ref7$creditCardNumbe === void 0
                            ? null
                            : _ref7$creditCardNumbe),
                        (_ref7$shippingPriorit = _ref7.shippingPriority),
                        (shippingPriority =
                          _ref7$shippingPriorit === void 0
                            ? null
                            : _ref7$shippingPriorit),
                        (_ref7$autoCheckout = _ref7.autoCheckout),
                        (_autoCheckout =
                          _ref7$autoCheckout === void 0
                            ? false
                            : _ref7$autoCheckout),
                        (_ref7$saveShippingDet = _ref7.saveShippingDetails),
                        (saveShippingDetails =
                          _ref7$saveShippingDet === void 0
                            ? false
                            : _ref7$saveShippingDet),
                        (requireSignature = _ref7.requireSignature);
                      total = calcTotal(orderItems);
                      signatureRequired = needsSignature(
                        requireSignature,
                        total
                      );
                      order =
                        ((_order = {
                          email: email,
                          lastName: lastName,
                          firstName: firstName,
                          customerId: customerId,
                          orderItems: orderItems,
                          creditCardNumber: creditCardNumber,
                          billingAddress: billingAddress,
                          shippingAddress: shippingAddress,
                          signatureRequired: signatureRequired,
                          saveShippingDetails: saveShippingDetails,
                          shippingPriority: shippingPriority,
                          estimatedArrival: null,
                        }),
                        _defineProperty(_order, orderTotal, total),
                        _defineProperty(
                          _order,
                          orderStatus,
                          OrderStatus.PENDING
                        ),
                        _defineProperty(_order, orderNo, dependencies.uuid()),
                        _defineProperty(
                          _order,
                          "paymentAccepted",
                          function paymentAccepted() {
                            return (
                              (this.paymentAuthorization &&
                                !this[
                                  _mixins__WEBPACK_IMPORTED_MODULE_0__.prevmodel
                                ]) ||
                              (this.paymentAuthorization &&
                                this[
                                  _mixins__WEBPACK_IMPORTED_MODULE_0__.prevmodel
                                ].orderTotal <= this.orderTotal)
                            );
                          }
                        ),
                        _defineProperty(
                          _order,
                          "autoCheckout",
                          function autoCheckout() {
                            return _autoCheckout;
                          }
                        ),
                        _order);
                      return _context6.abrupt("return", Object.freeze(order));

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            })
          );

          function createOrder(_x9) {
            return _createOrder.apply(this, arguments);
          }

          return createOrder;
        })();
      }
      /**
       * Called as command to approve/submit order.
       * @param {*} order
       */

      function approve(_x10) {
        return _approve.apply(this, arguments);
      }
      /**
       * Called as command to cancel order.
       * @param {*} order
       */

      function _approve() {
        _approve = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee16(order) {
            var updated;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch ((_context16.prev = _context16.next)) {
                  case 0:
                    _context16.next = 2;
                    return order.update({
                      orderStatus: OrderStatus.APPROVED,
                    });

                  case 2:
                    updated = _context16.sent;
                    handleStatusChange(updated);

                  case 4:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16);
          })
        );
        return _approve.apply(this, arguments);
      }

      function cancel(_x11) {
        return _cancel.apply(this, arguments);
      }

      function _cancel() {
        _cancel = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee17(order) {
            var updated;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch ((_context17.prev = _context17.next)) {
                  case 0:
                    _context17.next = 2;
                    return order.update({
                      orderStatus: OrderStatus.CANCELED,
                    });

                  case 2:
                    updated = _context17.sent;
                    handleStatusChange(updated);

                  case 4:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17);
          })
        );
        return _cancel.apply(this, arguments);
      }

      function submit(_x12) {
        return _submit.apply(this, arguments);
      }
      /**
       *
       * @param {{model:Order}} param0
       */

      function _submit() {
        _submit = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee18(order) {
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch ((_context18.prev = _context18.next)) {
                  case 0:
                    approve(order);

                  case 1:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18);
          })
        );
        return _submit.apply(this, arguments);
      }

      function errorCallback(_ref8) {
        var port = _ref8.port,
          order = _ref8.model,
          error = _ref8.error;
        console.error("error...", port, error);
        order.undo();
      }
      /**
       *
       * @param {{model:Order}} param0
       */

      function timeoutCallback(_ref9) {
        var port = _ref9.port,
          ports = _ref9.ports,
          adapterFn = _ref9.adapterFn,
          order = _ref9.model;
        console.error("timeout...", port);
      }
      /**
       * Start process to return canceled order items to inventory.
       * @param {*} param0
       */

      function returnInventory(_x13) {
        return _returnInventory.apply(this, arguments);
      }

      function _returnInventory() {
        _returnInventory = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee19(order) {
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch ((_context19.prev = _context19.next)) {
                  case 0:
                    console.log(returnInventory.name);
                    _context19.next = 3;
                    return order.update({
                      orderStatus: OrderStatus.CANCELED,
                    });

                  case 3:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19);
          })
        );
        return _returnInventory.apply(this, arguments);
      }

      function returnShipment(_x14) {
        return _returnShipment.apply(this, arguments);
      }

      function _returnShipment() {
        _returnShipment = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee20(order) {
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch ((_context20.prev = _context20.next)) {
                  case 0:
                    console.log(returnShipment.name);
                    _context20.next = 3;
                    return order.update({
                      orderStatus: OrderStatus.CANCELED,
                    });

                  case 3:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20);
          })
        );
        return _returnShipment.apply(this, arguments);
      }

      function returnDelivery(_x15) {
        return _returnDelivery.apply(this, arguments);
      }

      function _returnDelivery() {
        _returnDelivery = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee21(order) {
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch ((_context21.prev = _context21.next)) {
                  case 0:
                    console.log(returnDelivery.name);
                    _context21.next = 3;
                    return order.update({
                      orderStatus: OrderStatus.CANCELED,
                    });

                  case 3:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21);
          })
        );
        return _returnDelivery.apply(this, arguments);
      }

      function cancelPayment(_x16) {
        return _cancelPayment.apply(this, arguments);
      }

      function _cancelPayment() {
        _cancelPayment = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee22(order) {
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch ((_context22.prev = _context22.next)) {
                  case 0:
                    console.log(cancelPayment.name);
                    _context22.next = 3;
                    return order.update({
                      orderStatus: OrderStatus.CANCELED,
                    });

                  case 3:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22);
          })
        );
        return _cancelPayment.apply(this, arguments);
      }

      /***/
    },

  /***/ "./src/models/user.js":
    /*!****************************!*\
  !*** ./src/models/user.js ***!
  \****************************/
    /*! namespace exports */
    /*! export userFactory [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export userMixins [provided] [no usage info] [missing usage info prevents renaming] */
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
        /* harmony export */ userFactory: () => /* binding */ userFactory,
        /* harmony export */ userMixins: () => /* binding */ userMixins,
        /* harmony export */
      });
      /* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./mixins */ "./src/models/mixins.js"
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

      function userFactory(_ref) {
        var uuid = _ref.uuid;
        return /*#__PURE__*/ _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
            var _ref3,
              userName,
              password,
              customerId,
              firstName,
              lastName,
              phone,
              email,
              _args = arguments;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    (_ref3 =
                      _args.length > 0 && _args[0] !== undefined
                        ? _args[0]
                        : {}),
                      (userName = _ref3.userName),
                      (password = _ref3.password),
                      (customerId = _ref3.customerId),
                      (firstName = _ref3.firstName),
                      (lastName = _ref3.lastName),
                      (phone = _ref3.phone),
                      (email = _ref3.email);
                    return _context.abrupt(
                      "return",
                      Object.freeze({
                        userId: uuid(),
                        password: password,
                        userName: userName,
                        customerId: customerId,
                        firstName: firstName,
                        lastName: lastName,
                        phone: phone,
                        email: email,
                      })
                    );

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          })
        );
      }
      var userMixins = [
        (0, _mixins__WEBPACK_IMPORTED_MODULE_0__.requireProperties)(
          "userName",
          "password",
          "firstName"
        ),
        (0, _mixins__WEBPACK_IMPORTED_MODULE_0__.freezeProperties)(
          "userId",
          "userName"
        ),
        (0, _mixins__WEBPACK_IMPORTED_MODULE_0__.hashPasswords)("password"),
        (0, _mixins__WEBPACK_IMPORTED_MODULE_0__.validateProperties)([
          {
            propKey: "email",
            regex: "email",
            unique: {
              encrypted: true,
            },
          },
          {
            propKey: "userName",
            unique: {
              encrypted: false,
            },
          },
        ]),
      ];

      /***/
    },

  /***/ "./src/service-registry.js":
    /*!*********************************!*\
  !*** ./src/service-registry.js ***!
  \*********************************/
    /*! namespace exports */
    /*! export Registry [provided] [no usage info] [missing usage info prevents renaming] */
    /*! export default [provided] [no usage info] [missing usage info prevents renaming] */
    /*! other exports [not provided] [no usage info] */
    /*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Registry: () => /* binding */ Registry,
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _event_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./event-dispatcher */ "./src/event-dispatcher.js"
      );
      /* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./lib/utils */ "./src/lib/utils.js"
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

      var Registry = {
        eventNames: {
          shipOrder: "orderShipped",
          trackShipment: "outForDelivery",
          verifyDelivery: "deliveryVerified",
        },
        sendEvent: function sendEvent(_ref) {
          var emitEvent = _ref.emitEvent,
            topic = _ref.topic,
            eventData = _ref.eventData,
            eventSource = _ref.eventSource,
            eventName = _ref.eventName;
          console.log("Sending event...");
          console.log({
            emitEvent: emitEvent,
            topic: topic,
            eventData: eventData,
            eventSource: eventSource,
            eventName: eventName,
          });
          setTimeout(
            /*#__PURE__*/ _asyncToGenerator(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        _context.next = 2;
                        return emitEvent(
                          topic,
                          JSON.stringify({
                            eventData: eventData,
                            eventName: eventName,
                            eventTime: new Date().toUTCString(),
                            eventType: "commandResponse",
                            eventSource: eventSource,
                          })
                        );

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })
            ),
            5000
          );
        },
        generateShippingEventData: function generateShippingEventData(
          event,
          externalId
        ) {
          var trackingId = (0, _lib_utils__WEBPACK_IMPORTED_MODULE_1__.uuid)();
          var shipmentId = trackingId;
          var proofOfDelivery = "http://shipping.service.com?proof=".concat(
            trackingId
          );
          var eventData = {
            externalId: externalId,
          };

          if (event.eventName === "shipOrder") {
            return _objectSpread(
              _objectSpread({}, eventData),
              {},
              {
                shipmentId: shipmentId,
              }
            );
          }

          if (event.eventName === "trackShipment") {
            return _objectSpread(
              _objectSpread({}, eventData),
              {},
              {
                trackingId: trackingId,
                trackingStatus: "outForDelivery",
              }
            );
          }

          if (event.eventName === "verifyDelivery") {
            return _objectSpread(
              _objectSpread({}, eventData),
              {},
              {
                proofOfDelivery: proofOfDelivery,
              }
            );
          }
        },
        generateShippingMessage: function generateShippingMessage(
          emitEvent,
          event,
          externalId
        ) {
          return {
            emitEvent: emitEvent,
            topic: event.eventData.commandResp,
            eventData: this.generateShippingEventData(event, externalId),
            eventName: this.eventNames[event.eventName],
            eventSource: "shippingService",
          };
        },
        inventoryCallbackFactory: function inventoryCallbackFactory() {
          function inventoryCallback(_ref3) {
            var message = _ref3.message,
              emitEvent = _ref3.emitEvent;
            var event = JSON.parse(message);
            var warehouseAddress =
              /*null;*/
              "1234 warehouse dr, dock 2";
            var externalId = event.eventData.commandArgs.externalId;
            var eventName =
              /*'outOfStock';*/
              "orderPicked";
            this.sendEvent({
              emitEvent: emitEvent,
              topic: event.eventData.replyChannel,
              eventName: eventName,
              eventData: {
                warehouse_addr: warehouseAddress,
                externalId: externalId,
              },
              eventSource: "inventoryService",
            });
          }

          return inventoryCallback.bind(this);
        },
        shippingCallbackFactory: function shippingCallbackFactory() {
          function shippingCallback(_ref4) {
            var _this = this;

            var message = _ref4.message,
              emitEvent = _ref4.emitEvent;
            var event = JSON.parse(message);
            var externalId = event.eventData.commandArgs.externalId;

            var _message = this.generateShippingMessage(
              emitEvent,
              event,
              externalId
            );

            this.sendEvent(_message);

            if (event.eventName === "trackShipment") {
              var eventData = _objectSpread(
                _objectSpread({}, _message.eventData),
                {},
                {
                  trackingStatus: "orderDelivered",
                }
              );

              setTimeout(function () {
                return _this.sendEvent(
                  _objectSpread(
                    _objectSpread({}, _message),
                    {},
                    {
                      eventData: eventData,
                      eventName: "orderDelivered",
                    }
                  )
                );
              }, 7000);
            }
          }

          return shippingCallback.bind(this);
        },
      };
      var dispatcher = new _event_dispatcher__WEBPACK_IMPORTED_MODULE_0__.EventDispatcher();
      dispatcher.registerCallback(
        "inventoryChannel",
        Registry.inventoryCallbackFactory()
      );
      dispatcher.registerCallback(
        "shippingChannel",
        Registry.shippingCallbackFactory()
      );
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = dispatcher;

      /***/
    },

  /***/ "./src/services-mock/address-service.js":
    /*!**********************************************!*\
  !*** ./src/services-mock/address-service.js ***!
  \**********************************************/
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
      /* harmony import */ var _event_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../event-dispatcher */ "./src/event-dispatcher.js"
      );
      /* harmony import */ var _service_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../service-registry */ "./src/service-registry.js"
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

      var Address = {
        /**
         *
         * @param {string} address US street address
         */
        validateAddress: function validateAddress(address) {
          return _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      console.log("test validating address...");

                      if (address) {
                        _context.next = 3;
                        break;
                      }

                      throw new Error("no address provided");

                    case 3:
                      return _context.abrupt("return", address);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          )();
        },
      };

      /***/
    },

  /***/ "./src/services-mock/event-service.js":
    /*!********************************************!*\
  !*** ./src/services-mock/event-service.js ***!
  \********************************************/
    /*! namespace exports */
    /*! export handleEvents [provided] [no usage info] [missing usage info prevents renaming] */
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
        /* harmony export */ handleEvents: () => /* binding */ handleEvents,
        /* harmony export */
      });
      /* harmony import */ var _event_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../event-dispatcher */ "./src/event-dispatcher.js"
      );
      /* harmony import */ var _service_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../service-registry */ "./src/service-registry.js"
      );

      var _topics;

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

      var shippingChannel = "shippingChannel";
      var inventoryChannel = "inventoryChannel";
      var callbacks = [];
      var responses = [];
      var topics =
        ((_topics = {}),
        _defineProperty(_topics, shippingChannel, /shipping/),
        _defineProperty(_topics, inventoryChannel, /inventory/),
        _topics);
      function handleEvents(req, res) {
        var message = JSON.stringify(req.body);
        var topicName = Object.keys(topics).find(function (k) {
          return topics[k].test(message);
        });

        if (topicName) {
          console.log({
            func: handleEvents.name,
            msg: "found topic",
            topicName: topicName,
            message: message,
            cb: callbacks,
          });
          callbacks.forEach(function (callback) {
            console.log({
              name: callback.name,
              code: callback.toString(),
            });
            callback({
              topicName: topicName,
              message: message,
            });
          });
          console.log(responses);
          responses.reduceRight(function (response) {
            return res.send(response);
          }, "response");
        }
      }
      var Event = {
        topics: /Channel/,
        listening: false,
        listen: function listen(topic, callback) {
          callbacks.push(callback);
        },
        notify: function notify(topic, message) {
          responses.push(message);
        },
      };
      var dispatcher = new _event_dispatcher__WEBPACK_IMPORTED_MODULE_0__.EventDispatcher(
        Event
      );
      dispatcher.registerCallback(
        inventoryChannel,
        _service_registry__WEBPACK_IMPORTED_MODULE_1__.Registry.inventoryCallbackFactory()
      );
      dispatcher.registerCallback(
        shippingChannel,
        _service_registry__WEBPACK_IMPORTED_MODULE_1__.Registry.shippingCallbackFactory()
      );
      dispatcher.init();

      /***/
    },

  /***/ "./src/services-mock/index.js":
    /*!************************************!*\
  !*** ./src/services-mock/index.js ***!
  \************************************/
    /*! namespace exports */
    /*! export Address [provided] [no usage info] [missing usage info prevents renaming] -> ./src/services-mock/address-service.js .Address */
    /*! export Inventory [provided] [no usage info] [missing usage info prevents renaming] -> ./src/services-mock/inventory-service.js .Inventory */
    /*! export Payment [provided] [no usage info] [missing usage info prevents renaming] -> ./src/services-mock/payment-service.js .Payment */
    /*! export Shipping [provided] [no usage info] [missing usage info prevents renaming] -> ./src/services-mock/shipping-service.js .Shipping */
    /*! export handleEvents [provided] [no usage info] [missing usage info prevents renaming] -> ./src/services-mock/event-service.js .handleEvents */
    /*! other exports [not provided] [no usage info] */
    /*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
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
        /* harmony export */ Payment: () =>
          /* reexport safe */ _payment_service__WEBPACK_IMPORTED_MODULE_1__.Payment,
        /* harmony export */ Shipping: () =>
          /* reexport safe */ _shipping_service__WEBPACK_IMPORTED_MODULE_2__.Shipping,
        /* harmony export */ handleEvents: () =>
          /* reexport safe */ _event_service__WEBPACK_IMPORTED_MODULE_3__.handleEvents,
        /* harmony export */ Inventory: () =>
          /* reexport safe */ _inventory_service__WEBPACK_IMPORTED_MODULE_4__.Inventory,
        /* harmony export */
      });
      /* harmony import */ var _address_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./address-service */ "./src/services-mock/address-service.js"
      );
      /* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./payment-service */ "./src/services-mock/payment-service.js"
      );
      /* harmony import */ var _shipping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./shipping-service */ "./src/services-mock/shipping-service.js"
      );
      /* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./event-service */ "./src/services-mock/event-service.js"
      );
      /* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./inventory-service */ "./src/services-mock/inventory-service.js"
      );

      /***/
    },

  /***/ "./src/services-mock/inventory-service.js":
    /*!************************************************!*\
  !*** ./src/services-mock/inventory-service.js ***!
  \************************************************/
    /*! namespace exports */
    /*! export Inventory [provided] [no usage info] [missing usage info prevents renaming] */
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
        /* harmony export */ Inventory: () => /* binding */ Inventory,
        /* harmony export */
      });
      /* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../services/event-service */ "./src/services/event-service.js"
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

      function sendEvent(_ref) {
        var eventData = _ref.eventData,
          eventName = _ref.eventName;
        setTimeout(
          /*#__PURE__*/ _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return _services_event_service__WEBPACK_IMPORTED_MODULE_0__.Event.notify(
                        "orderChannel",
                        JSON.stringify({
                          eventData: eventData,
                          eventName: eventName,
                          eventType: "CommandResponse",
                          eventTime: new Date().toUTCString(),
                          eventSource: "Inventory",
                        })
                      );

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          ),
          5000
        );
      }

      var Inventory = {
        pickOrder: function pickOrder(_ref3) {
          return _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
              var externalId, lineItems, pickupAddress;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      (externalId = _ref3.externalId),
                        (lineItems = _ref3.lineItems);
                      console.log("inventory items");
                      console.log(lineItems);
                      pickupAddress = "1234 warehouse dr, dock2";
                      sendEvent({
                        eventName: "orderPicked",
                        eventData: {
                          pickupAddress: pickupAddress,
                          externalId: externalId,
                        },
                      });

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            })
          )();
        },
      };

      /***/
    },

  /***/ "./src/services-mock/payment-service.js":
    /*!**********************************************!*\
  !*** ./src/services-mock/payment-service.js ***!
  \**********************************************/
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
                      console.log("mock payment service called");
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

                    case 5:
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

  /***/ "./src/services-mock/shipping-service.js":
    /*!***********************************************!*\
  !*** ./src/services-mock/shipping-service.js ***!
  \***********************************************/
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
//# sourceMappingURL=src_models_index_js.js.map
