exports.id = "src_models_index_js";
exports.ids = ["src_models_index_js"];
exports.modules = {

/***/ "./src/adapters/datasources/datasource-mongodb.js":
/*!********************************************************!*\
  !*** ./src/adapters/datasources/datasource-mongodb.js ***!
  \********************************************************/
/*! namespace exports */
/*! export DataSourceAdapterMongoDb [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSourceAdapterMongoDb": () => /* binding */ DataSourceAdapterMongoDb
/* harmony export */ });

/**
 * Datasource adapter factory.
 * @param {string} url database url
 * @param {number} [cacheSize] number of models to keep in cache
 * @param {*} DataSource base class that enables caching
 * @returns {import("./datasource").default}
 */

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DataSourceAdapterMongoDb = function DataSourceAdapterMongoDb(url, cacheSize, DataSourceMongoDb) {
  /**
   * MongoDB adapter extends in-memory datasource to support caching.
   * The cache is always updated first, which allows the system to run
   * even when the database is offline.
   */
  var DataSourceMongoDbCustom = /*#__PURE__*/function (_DataSourceMongoDb) {
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
  }(DataSourceMongoDb);

  return DataSourceMongoDbCustom;
};

/***/ }),

/***/ "./src/config/customer.js":
/*!********************************!*\
  !*** ./src/config/customer.js ***!
  \********************************/
/*! namespace exports */
/*! export Customer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Customer": () => /* binding */ Customer
/* harmony export */ });
/* harmony import */ var _models_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/mixins */ "./src/models/mixins.js");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/customer */ "./src/models/customer.js");
/* harmony import */ var _adapters_datasources_datasource_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../adapters/datasources/datasource-mongodb */ "./src/adapters/datasources/datasource-mongodb.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoid */ "webpack/sharing/consume/default/nanoid/nanoid");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_3__);


var _Customer;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * @type {import('../models/index').ModelSpecification}
 */

var Customer = (_Customer = {
  modelName: "customer",
  endpoint: "customers",
  dependencies: {
    uuid: uuid
  },
  factory: _models_customer__WEBPACK_IMPORTED_MODULE_1__.makeCustomerFactory,
  validate: _models_mixins__WEBPACK_IMPORTED_MODULE_0__.validateModel,
  onDelete: _models_customer__WEBPACK_IMPORTED_MODULE_1__.okToDelete
}, _defineProperty(_Customer, "dependencies", {
  uuid: function uuid() {
    return (0,nanoid__WEBPACK_IMPORTED_MODULE_3__.nanoid)(8);
  }
}), _defineProperty(_Customer, "mixins", [(0,_models_mixins__WEBPACK_IMPORTED_MODULE_0__.freezeProperties)("customerId"), (0,_models_mixins__WEBPACK_IMPORTED_MODULE_0__.requireProperties)("firstName", "lastName", "email", "shippingAddress", "billingAddress", "creditCardNumber"), (0,_models_mixins__WEBPACK_IMPORTED_MODULE_0__.validateProperties)([{
  propKey: "email",
  //unique: { encrypted: true },
  regex: "email"
}, {
  propKey: "creditCardNumber",
  regex: "creditCard"
}])]), _defineProperty(_Customer, "relations", {
  orders: {
    modelName: "order",
    type: "oneToMany",
    foreignKey: "customerId",
    desc: "one customer has many orders, each order has one customer"
  }
}), _defineProperty(_Customer, "commands", {
  decrypt: {
    command: "decrypt",
    acl: ["read", "decrypt"]
  }
}), _defineProperty(_Customer, "accessControlList", {
  customer: {
    allow: "read",
    type: "relation",
    desc: "Allow orders to see customers."
  }
}), _Customer);

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! namespace exports */
/*! export Customer [provided] [no usage info] [missing usage info prevents renaming] -> ./src/config/customer.js .Customer */
/*! export Product [provided] [no usage info] [missing usage info prevents renaming] -> ./src/config/product.js .Product */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Customer": () => /* reexport safe */ _customer__WEBPACK_IMPORTED_MODULE_0__.Customer,
/* harmony export */   "Product": () => /* reexport safe */ _product__WEBPACK_IMPORTED_MODULE_1__.Product
/* harmony export */ });
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer */ "./src/config/customer.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./src/config/product.js");
// export * from "./order";
// export * from "./user";



/***/ }),

/***/ "./src/config/product.js":
/*!*******************************!*\
  !*** ./src/config/product.js ***!
  \*******************************/
/*! namespace exports */
/*! export Product [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => /* binding */ Product
/* harmony export */ });
var Product = {
  factory: function factory() {
    return function (a) {
      return {
        a: a,
        b: "valb"
      };
    };
  },
  modelName: "product",
  endpoint: "products"
};

/***/ }),

/***/ "./src/event-dispatcher.js":
/*!*********************************!*\
  !*** ./src/event-dispatcher.js ***!
  \*********************************/
/*! namespace exports */
/*! export EventDispatcher [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDispatcher": () => /* binding */ EventDispatcher
/* harmony export */ });
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/event-service */ "./src/services/event-service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var EventDispatcher = /*#__PURE__*/function () {
  function EventDispatcher() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _services_event_service__WEBPACK_IMPORTED_MODULE_0__.Event;

    _classCallCheck(this, EventDispatcher);

    this.adapter = adapter;
    this.subscriptions = new Map();
  }

  _createClass(EventDispatcher, [{
    key: "registerCallback",
    value: function registerCallback(topic, callback) {
      if (this.subscriptions.has(topic)) {
        this.subscriptions.get(topic).push(callback);
        return;
      }

      this.subscriptions.set(topic, [callback]);
    }
  }, {
    key: "emitEvent",
    value: function () {
      var _emitEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(topic, message) {
        var method,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                method = _args.length > 2 && _args[2] !== undefined ? _args[2] : "notify";
                _context.next = 3;
                return this.adapter[method](topic, message);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function emitEvent(_x, _x2) {
        return _emitEvent.apply(this, arguments);
      }

      return emitEvent;
    }()
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var method,
            emitEvent,
            _args2 = arguments;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                emitEvent = function _emitEvent2(topic, message) {
                  this.emitEvent(topic, message);
                };

                method = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : "listen";
                _context2.next = 4;
                return this.adapter[method](/Channel/, function (_ref) {
                  var _this = this;

                  var topic = _ref.topic,
                      message = _ref.message;

                  if (this.subscriptions.has(topic)) {
                    this.subscriptions.get(topic).forEach(function (callback) {
                      return callback({
                        message: message,
                        emitEvent: emitEvent.bind(_this)
                      });
                    });
                  }
                }.bind(this));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }]);

  return EventDispatcher;
}();

/***/ }),

/***/ "./src/models/customer.js":
/*!********************************!*\
  !*** ./src/models/customer.js ***!
  \********************************/
/*! namespace exports */
/*! export makeCustomerFactory [provided] [no usage info] [missing usage info prevents renaming] */
/*! export okToDelete [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeCustomerFactory": () => /* binding */ makeCustomerFactory,
/* harmony export */   "okToDelete": () => /* binding */ okToDelete
/* harmony export */ });

/**
 * @typedef Customer
 * @property {string} email
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} creditCardNumber
 * @property {Symbol} id
 */

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function makeCustomerFactory(_ref) {
  var uuid = _ref.uuid;
  return function createCustomer() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        firstName = _ref2.firstName,
        lastName = _ref2.lastName,
        shippingAddress = _ref2.shippingAddress,
        creditCardNumber = _ref2.creditCardNumber,
        _ref2$billingAddress = _ref2.billingAddress,
        billingAddress = _ref2$billingAddress === void 0 ? shippingAddress : _ref2$billingAddress,
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
      userId: userId
    });
  };
}
function okToDelete(_x) {
  return _okToDelete.apply(this, arguments);
}

function _okToDelete() {
  _okToDelete = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(customer) {
    var orders;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
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
              error: _context.t0
            });
            return _context.abrupt("return", true);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _okToDelete.apply(this, arguments);
}

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! namespace exports */
/*! export models [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "models": () => /* binding */ models
/* harmony export */ });
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins */ "./src/models/mixins.js");
/* harmony import */ var _make_adapters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./make-adapters */ "./src/models/make-adapters.js");
/* harmony import */ var _services_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services-mock */ "./src/services-mock/index.js");
/* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters */ "./src/adapters/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/config/index.js");

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
 *    type:"oneToMany"|"oneToOne"|"manyToOne",
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
 * @property {{factory:import("../adapters/datasources/datasource-mongodb"),url:string,credentials?:string}} [datasource] - custom datasource
 * for this model. If not set, the default set by the server is used.
 *
 */

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // Service dependencies


 // Models


var requiredProps = ["modelName", "endpoint", "factory"];

function validateSpec(spec) {
  var missing = requiredProps.filter(function (key) {
    return !spec[key];
  });

  if ((missing === null || missing === void 0 ? void 0 : missing.length) > 0) {
    throw new Error("missing properties: ".concat(missing, " > ").concat(Object.entries(spec)));
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
  return _objectSpread(_objectSpread({}, spec), {}, {
    mixins: mixins.concat(_mixins__WEBPACK_IMPORTED_MODULE_0__.default),
    dependencies: _objectSpread(_objectSpread({}, dependencies), (0,_make_adapters__WEBPACK_IMPORTED_MODULE_1__.default)(spec.ports, _adapters__WEBPACK_IMPORTED_MODULE_3__, _services_mock__WEBPACK_IMPORTED_MODULE_2__))
  });
}

var models = Object.values(_config__WEBPACK_IMPORTED_MODULE_4__).map(function (spec) {
  return makeModel(spec);
});

/***/ }),

/***/ "./src/models/make-adapters.js":
/*!*************************************!*\
  !*** ./src/models/make-adapters.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ makeAdapters
/* harmony export */ });


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function makeAdapters(ports, adapters, services) {
  if (!ports || !adapters) {
    return;
  }

  return Object.keys(ports).map(function (port) {
    if (!adapters[port]) {
      return;
    }

    try {
      return _defineProperty({}, port, adapters[port](services[ports[port].service]));
    } catch (e) {
      console.warn(e.message);
    }
  }).reduce(function (p, c) {
    return _objectSpread(_objectSpread({}, p), c);
  });
}

/***/ }),

/***/ "./src/service-registry.js":
/*!*********************************!*\
  !*** ./src/service-registry.js ***!
  \*********************************/
/*! namespace exports */
/*! export Registry [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Registry": () => /* binding */ Registry,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _event_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-dispatcher */ "./src/event-dispatcher.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/utils */ "./src/lib/utils.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var Registry = {
  eventNames: {
    shipOrder: "orderShipped",
    trackShipment: "outForDelivery",
    verifyDelivery: "deliveryVerified"
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
      eventName: eventName
    });
    setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return emitEvent(topic, JSON.stringify({
                eventData: eventData,
                eventName: eventName,
                eventTime: new Date().toUTCString(),
                eventType: "commandResponse",
                eventSource: eventSource
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })), 5000);
  },
  generateShippingEventData: function generateShippingEventData(event, externalId) {
    var trackingId = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.uuid)();
    var shipmentId = trackingId;
    var proofOfDelivery = "http://shipping.service.com?proof=".concat(trackingId);
    var eventData = {
      externalId: externalId
    };

    if (event.eventName === "shipOrder") {
      return _objectSpread(_objectSpread({}, eventData), {}, {
        shipmentId: shipmentId
      });
    }

    if (event.eventName === "trackShipment") {
      return _objectSpread(_objectSpread({}, eventData), {}, {
        trackingId: trackingId,
        trackingStatus: "outForDelivery"
      });
    }

    if (event.eventName === "verifyDelivery") {
      return _objectSpread(_objectSpread({}, eventData), {}, {
        proofOfDelivery: proofOfDelivery
      });
    }
  },
  generateShippingMessage: function generateShippingMessage(emitEvent, event, externalId) {
    return {
      emitEvent: emitEvent,
      topic: event.eventData.commandResp,
      eventData: this.generateShippingEventData(event, externalId),
      eventName: this.eventNames[event.eventName],
      eventSource: "shippingService"
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
          externalId: externalId
        },
        eventSource: "inventoryService"
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

      var _message = this.generateShippingMessage(emitEvent, event, externalId);

      this.sendEvent(_message);

      if (event.eventName === "trackShipment") {
        var eventData = _objectSpread(_objectSpread({}, _message.eventData), {}, {
          trackingStatus: "orderDelivered"
        });

        setTimeout(function () {
          return _this.sendEvent(_objectSpread(_objectSpread({}, _message), {}, {
            eventData: eventData,
            eventName: "orderDelivered"
          }));
        }, 7000);
      }
    }

    return shippingCallback.bind(this);
  }
};
var dispatcher = new _event_dispatcher__WEBPACK_IMPORTED_MODULE_0__.EventDispatcher();
dispatcher.registerCallback("inventoryChannel", Registry.inventoryCallbackFactory());
dispatcher.registerCallback("shippingChannel", Registry.shippingCallbackFactory());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatcher);

/***/ }),

/***/ "./src/services-mock/address-service.js":
/*!**********************************************!*\
  !*** ./src/services-mock/address-service.js ***!
  \**********************************************/
/*! namespace exports */
/*! export Address [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Address": () => /* binding */ Address
/* harmony export */ });


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Address = {
  /**
   *
   * @param {string} address US street address
   */
  validateAddress: function validateAddress(address) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
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
    }))();
  }
};

/***/ }),

/***/ "./src/services-mock/event-service.js":
/*!********************************************!*\
  !*** ./src/services-mock/event-service.js ***!
  \********************************************/
/*! namespace exports */
/*! export handleEvents [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleEvents": () => /* binding */ handleEvents
/* harmony export */ });
/* harmony import */ var _event_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event-dispatcher */ "./src/event-dispatcher.js");
/* harmony import */ var _service_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service-registry */ "./src/service-registry.js");


var _topics;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var shippingChannel = "shippingChannel";
var inventoryChannel = "inventoryChannel";
var callbacks = [];
var responses = [];
var topics = (_topics = {}, _defineProperty(_topics, shippingChannel, /shipping/), _defineProperty(_topics, inventoryChannel, /inventory/), _topics);
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
      cb: callbacks
    });
    callbacks.forEach(function (callback) {
      console.log({
        name: callback.name,
        code: callback.toString()
      });
      callback({
        topicName: topicName,
        message: message
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
  }
};
var dispatcher = new _event_dispatcher__WEBPACK_IMPORTED_MODULE_0__.EventDispatcher(Event);
dispatcher.registerCallback(inventoryChannel, _service_registry__WEBPACK_IMPORTED_MODULE_1__.Registry.inventoryCallbackFactory());
dispatcher.registerCallback(shippingChannel, _service_registry__WEBPACK_IMPORTED_MODULE_1__.Registry.shippingCallbackFactory());
dispatcher.init();

/***/ }),

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Address": () => /* reexport safe */ _address_service__WEBPACK_IMPORTED_MODULE_0__.Address,
/* harmony export */   "Payment": () => /* reexport safe */ _payment_service__WEBPACK_IMPORTED_MODULE_1__.Payment,
/* harmony export */   "Shipping": () => /* reexport safe */ _shipping_service__WEBPACK_IMPORTED_MODULE_2__.Shipping,
/* harmony export */   "handleEvents": () => /* reexport safe */ _event_service__WEBPACK_IMPORTED_MODULE_3__.handleEvents,
/* harmony export */   "Inventory": () => /* reexport safe */ _inventory_service__WEBPACK_IMPORTED_MODULE_4__.Inventory
/* harmony export */ });
/* harmony import */ var _address_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address-service */ "./src/services-mock/address-service.js");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-service */ "./src/services-mock/payment-service.js");
/* harmony import */ var _shipping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipping-service */ "./src/services-mock/shipping-service.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-service */ "./src/services-mock/event-service.js");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory-service */ "./src/services-mock/inventory-service.js");






/***/ }),

/***/ "./src/services-mock/inventory-service.js":
/*!************************************************!*\
  !*** ./src/services-mock/inventory-service.js ***!
  \************************************************/
/*! namespace exports */
/*! export Inventory [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Inventory": () => /* binding */ Inventory
/* harmony export */ });
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/event-service */ "./src/services/event-service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function sendEvent(_ref) {
  var eventData = _ref.eventData,
      eventName = _ref.eventName;
  setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _services_event_service__WEBPACK_IMPORTED_MODULE_0__.Event.notify("orderChannel", JSON.stringify({
              eventData: eventData,
              eventName: eventName,
              eventType: "CommandResponse",
              eventTime: new Date().toUTCString(),
              eventSource: "Inventory"
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), 5000);
}

var Inventory = {
  pickOrder: function pickOrder(_ref3) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var externalId, lineItems, pickupAddress;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              externalId = _ref3.externalId, lineItems = _ref3.lineItems;
              console.log("inventory items");
              console.log(lineItems);
              pickupAddress = "1234 warehouse dr, dock2";
              sendEvent({
                eventName: "orderPicked",
                eventData: {
                  pickupAddress: pickupAddress,
                  externalId: externalId
                }
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};

/***/ }),

/***/ "./src/services-mock/payment-service.js":
/*!**********************************************!*\
  !*** ./src/services-mock/payment-service.js ***!
  \**********************************************/
/*! namespace exports */
/*! export Payment [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Payment": () => /* binding */ Payment
/* harmony export */ });

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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  authorizePayment: function authorizePayment(id, amount, source_id, customer_id) {
    var _arguments = arguments;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var autocomplete, currency, payload;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              autocomplete = _arguments.length > 4 && _arguments[4] !== undefined ? _arguments[4] : false;
              currency = _arguments.length > 5 && _arguments[5] !== undefined ? _arguments[5] : "USD";
              console.log("mock payment service called");
              payload = {
                idempotency_key: id,
                amount_money: {
                  amount: amount,
                  currency: currency
                },
                source_id: source_id,
                autocomplete: autocomplete,
                customer_id: customer_id,
                location_id: "XK3DBG77NJBFX",
                reference_id: "123456",
                note: "Brief description",
                app_fee_money: {
                  amount: 10,
                  currency: "USD"
                }
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
    }))();
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
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log("REAL completing payment: %s", model.orderNo);
              return _context2.abrupt("return", "1234");

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  refundPayment: function refundPayment(model) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log("REAL refunding payment: %s", model.orderNo);

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
};

/***/ }),

/***/ "./src/services-mock/shipping-service.js":
/*!***********************************************!*\
  !*** ./src/services-mock/shipping-service.js ***!
  \***********************************************/
/*! namespace exports */
/*! export Shipping [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shipping": () => /* binding */ Shipping
/* harmony export */ });

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    eventData: data
  };
}

function createCommandEvent(name, topic, args) {
  return {
    commandName: name,
    commandResp: topic,
    commandArgs: _objectSpread({}, args)
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
        externalId: externalId
      })
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
        trackingId: trackingId
      })
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
        trackingId: trackingId
      })
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
        externalId: externalId
      })
    });
  },
  getPayload: function getPayload(func, event) {
    var _payloads;

    var payloads = (_payloads = {}, _defineProperty(_payloads, this.shipOrder.name, {
      shipmentId: event.eventData.shipmentId
    }), _defineProperty(_payloads, this.trackShipment.name, {
      trackingId: event.eventData.trackingId,
      trackingStatus: event.eventData.trackingStatus
    }), _defineProperty(_payloads, this.verifyDelivery.name, {
      proofOfDelivery: event.eventData.proofOfDelivery
    }), _payloads);
    return payloads[func];
  },
  getProperty: function getProperty(event, key) {
    return event.eventData[key];
  }
};

/***/ })

};
;
//# sourceMappingURL=src_models_index_js.js.map