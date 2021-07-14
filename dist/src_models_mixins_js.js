exports.id = "src_models_mixins_js";
exports.ids = ["src_models_mixins_js"];
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compose": () => /* binding */ compose,
/* harmony export */   "composeAsync": () => /* binding */ composeAsync,
/* harmony export */   "encrypt": () => /* binding */ encrypt,
/* harmony export */   "decrypt": () => /* binding */ decrypt,
/* harmony export */   "hash": () => /* binding */ hash,
/* harmony export */   "uuid": () => /* binding */ uuid,
/* harmony export */   "makeArray": () => /* binding */ makeArray,
/* harmony export */   "makeObject": () => /* binding */ makeObject,
/* harmony export */   "async": () => /* binding */ async
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "webpack/sharing/consume/default/nanoid/nanoid");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function (initVal) {
    return funcs.reduceRight(function (val, func) {
      return func(val);
    }, initVal);
  };
}
function composeAsync() {
  for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
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
var key = crypto__WEBPACK_IMPORTED_MODULE_0___default().scryptSync(String(passwd), "salt", 24);
var iv = Buffer.alloc(16, 0);
function encrypt(text) {
  var cipher = crypto__WEBPACK_IMPORTED_MODULE_0___default().createCipheriv(algo, key, iv);
  var encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher["final"]("hex");
  return encrypted;
}
function decrypt(cipherText) {
  console.log("decrypt(%s)", cipherText);
  var decipher = crypto__WEBPACK_IMPORTED_MODULE_0___default().createDecipheriv(algo, key, iv);
  var decrypted = decipher.update(cipherText, "hex", "utf8");
  decrypted += decipher["final"]("utf8");
  return decrypted;
}
function hash(data) {
  return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHash("sha1").update(data).digest("hex");
}
function uuid() {
  // return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
  //   (c ^ (crypto.randomBytes(16)[0] & (15 >> (c / 4)))).toString(16)
  // );
  return (0,nanoid__WEBPACK_IMPORTED_MODULE_1__.nanoid)();
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
  return promise.then(function (result) {
    return {
      ok: true,
      object: result,
      asObject: function asObject() {
        return makeObject(result);
      },
      asArray: function asArray() {
        return makeArray(result);
      }
    };
  })["catch"](function (error) {
    console.error(error);
    return Promise.resolve({
      ok: false,
      error: error
    });
  });
}

/***/ }),

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prevmodel": () => /* binding */ prevmodel,
/* harmony export */   "validations": () => /* binding */ validations,
/* harmony export */   "mixinType": () => /* binding */ mixinType,
/* harmony export */   "mixinSets": () => /* binding */ mixinSets,
/* harmony export */   "processUpdate": () => /* binding */ processUpdate,
/* harmony export */   "updateMixins": () => /* binding */ updateMixins,
/* harmony export */   "validateModel": () => /* binding */ validateModel,
/* harmony export */   "encryptProperties": () => /* binding */ encryptProperties,
/* harmony export */   "freezeProperties": () => /* binding */ freezeProperties,
/* harmony export */   "requireProperties": () => /* binding */ requireProperties,
/* harmony export */   "hashPasswords": () => /* binding */ hashPasswords,
/* harmony export */   "allowProperties": () => /* binding */ allowProperties,
/* harmony export */   "RegEx": () => /* binding */ RegEx,
/* harmony export */   "validateProperties": () => /* binding */ validateProperties,
/* harmony export */   "updateProperties": () => /* binding */ updateProperties,
/* harmony export */   "invokePort": () => /* binding */ invokePort,
/* harmony export */   "execMethod": () => /* binding */ execMethod,
/* harmony export */   "createMethod": () => /* binding */ createMethod,
/* harmony export */   "withValidFormat": () => /* binding */ withValidFormat,
/* harmony export */   "checkFormat": () => /* binding */ checkFormat,
/* harmony export */   "encryptPersonalInfo": () => /* binding */ encryptPersonalInfo,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils */ "./src/lib/utils.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);


var _mixinSets;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
  post: Symbol("post")
};
/**
 * Stored mixins - use private symbol as key to prevent overwrite
 */

var mixinSets = (_mixinSets = {}, _defineProperty(_mixinSets, mixinType.pre, Symbol("preUpdateMixins")), _defineProperty(_mixinSets, mixinType.post, Symbol("postUpdateMixins")), _mixinSets);
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

  var updates = model[premixins] ? _lib_utils__WEBPACK_IMPORTED_MODULE_0__.compose.apply(void 0, _toConsumableArray(model[premixins].values()))(changes) : changes;

  var updated = _objectSpread(_objectSpread({}, model), updates);

  return model[postmixins] ? _lib_utils__WEBPACK_IMPORTED_MODULE_0__.compose.apply(void 0, _toConsumableArray(model[postmixins].values()))(updated) : updated;
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
    return _objectSpread(_objectSpread({}, o), {}, _defineProperty({}, mixinSets[type], mixinSet));
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
  onload: 1 << 2 //  0100 Load

};

function handleUpdateEvent(model, updates, event) {
  var isUpdate = eventMask.update & event;
  var decrypted = isUpdate ? model.decrypt() : {};
  return _objectSpread(_objectSpread(_objectSpread({}, model), updates), decrypted);
}

function isObject(p) {
  return p != null && _typeof(p) === "object";
}

function containsUpdates(model, changes, event) {
  if (eventMask.update & event) {
    var changeList = Object.keys(changes);
    if (changeList.length < 1) return false;

    if (changeList.every(function (k) {
      return model[k] && util__WEBPACK_IMPORTED_MODULE_1___default().isDeepStrictEqual(changes[k], model[k]);
    })) {
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


  var input = _objectSpread(_objectSpread({}, changes), {}, _defineProperty({}, prevmodel, JSON.parse(JSON.stringify(model)))); // Validate just the input data


  var updates = model[validations].filter(function (v) {
    return v.input & event;
  }).sort(function (a, b) {
    return a.order - b.order;
  }).map(function (v) {
    return model[v.name].apply(input);
  }).reduce(function (p, c) {
    return _objectSpread(_objectSpread({}, p), c);
  }, input);

  var updated = _objectSpread(_objectSpread({}, model), updates); // Validate the updated model


  return updated[validations].filter(function (v) {
    return v.output & event;
  }).sort(function (a, b) {
    return a.order - b.order;
  }).map(function (v) {
    return updated[v.name]();
  }).reduce(function (p, c) {
    return _objectSpread(_objectSpread({}, p), c);
  }, updated);
}
/**
 * Specify when validations run.
 */

var enableValidation = function () {
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
    never: never
  };
}();
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
  var onUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var onCreate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var onLoad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
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

  if (config.some(function (v) {
    return v.name === name;
  })) {
    return model;
  }

  return _objectSpread(_objectSpread({}, model), {}, _defineProperty({
    validateModel: validateModel
  }, validations, [].concat(_toConsumableArray(config), [{
    name: name,
    input: input,
    output: output,
    order: order
  }])));
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
  for (var _len = arguments.length, propKeys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    propKeys[_key - 1] = arguments[_key];
  }

  var keys = propKeys.flat().map(function (k) {
    if (typeof k === "function") return k(o);
    if (k instanceof RegExp) return Object.keys(o).filter(function (key) {
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
  for (var _len2 = arguments.length, propKeys = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    propKeys[_key2] = arguments[_key2];
  }

  return function (o) {
    var keys = parseKeys.apply(void 0, [o].concat(propKeys));

    var encryptProps = function encryptProps(obj) {
      return keys.map(function (key) {
        return obj[key] ? _defineProperty({}, key, (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__.encrypt)(obj[key])) : {};
      }).reduce(function (p, c) {
        return _objectSpread(_objectSpread({}, p), c);
      });
    };

    return _objectSpread(_objectSpread({
      encryptProperties: function encryptProperties() {
        return encryptProps(this);
      }
    }, addValidation({
      model: o,
      name: encryptProperties.name,
      input: enableValidation.onUpdate,
      output: enableValidation.onCreate,
      order: 99
    })), {}, {
      decrypt: function decrypt() {
        var _this = this;

        return keys.map(function (key) {
          return _this[key] ? _defineProperty({}, key, (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__.decrypt)(_this[key])) : {};
        }).reduce(function (p, c) {
          return _objectSpread(_objectSpread({}, p), c);
        });
      }
    });
  };
};
/**
 * Prevent properties from being modified.
 * Accepts a property name or a function that returns a property name.
 * @param  {Array<string | function(*):string | RegExp>} propKeys - names of properties to freeze
 */

var freezeProperties = function freezeProperties() {
  for (var _len3 = arguments.length, propKeys = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    propKeys[_key3] = arguments[_key3];
  }

  return function (o) {
    var preventUpdates = function preventUpdates(obj) {
      var keys = parseKeys.apply(void 0, [obj].concat(propKeys));
      var sideEffects = Object.keys(obj).filter(function (key) {
        return keys.includes(key);
      });

      if ((sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.length) > 0) {
        throw new Error("cannot update readonly properties: ".concat(sideEffects));
      }
    };

    return _objectSpread({
      freezeProperties: function freezeProperties() {
        preventUpdates(this);
      }
    }, addValidation({
      model: o,
      name: freezeProperties.name,
      input: enableValidation.onUpdate,
      order: 20
    }));
  };
};
/**
 * Enforce required fields.
 * @param {Array<string | function(*):string | RegExp>} propKeys -
 * required property key names - can be a function or regex
 * that returns the property key names
 */

var requireProperties = function requireProperties() {
  for (var _len4 = arguments.length, propKeys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    propKeys[_key4] = arguments[_key4];
  }

  return function (o) {
    var keys = parseKeys.apply(void 0, [o].concat(propKeys));

    function requireProps(obj) {
      var missing = keys.filter(function (key) {
        return key && !obj[key];
      });

      if ((missing === null || missing === void 0 ? void 0 : missing.length) > 0) {
        throw new Error("missing required properties: ".concat(missing));
      }
    }

    return _objectSpread({
      requireProperties: function requireProperties() {
        requireProps(this);
      }
    }, addValidation({
      model: o,
      name: requireProperties.name,
      output: enableValidation.onCreateAndUpdate,
      order: 75
    }));
  };
};
/**
 * Hash passwords.
 * @param {*} hash hash algorithm
 * @param  {Array<string | function(*):string | RegExp>} propKeys name of password props
 */

var hashPasswords = function hashPasswords() {
  for (var _len5 = arguments.length, propKeys = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    propKeys[_key5] = arguments[_key5];
  }

  return function (o) {
    var keys = parseKeys.apply(void 0, [o].concat(propKeys));

    function hashPwds(obj) {
      return keys.map(function (key) {
        return obj[key] ? _defineProperty({}, key, (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__.hash)(obj[key])) : {};
      }).reduce(function (p, c) {
        return _objectSpread(_objectSpread({}, p), c);
      });
    }

    return _objectSpread({
      hashPasswords: function hashPasswords() {
        return hashPwds(this);
      }
    }, addValidation({
      model: o,
      name: hashPasswords.name,
      input: enableValidation.onUpdate,
      output: enableValidation.onCreate,
      order: 80
    }));
  };
};
var internalPropList = [];
/**
 * Reject unknown properties in user input. Allow only approved keys.
 * @param  {...any} propKeys
 */

var allowProperties = function allowProperties() {
  for (var _len6 = arguments.length, propKeys = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    propKeys[_key6] = arguments[_key6];
  }

  return function (o) {
    function rejectUnknownProps() {
      var keys = parseKeys.apply(void 0, [o].concat(propKeys));
      var allowList = keys.concat(internalPropList);
      var unknownProps = Object.keys(o).filter(function (key) {
        return !allowList.includes(key);
      });

      if ((unknownProps === null || unknownProps === void 0 ? void 0 : unknownProps.length) > 0) {
        throw new Error("invalid properties: ".concat(unknownProps));
      }
    }

    return _objectSpread({
      rejectUnknownProperties: function rejectUnknownProperties() {
        return rejectUnknownProps(this);
      }
    }, addValidation({
      model: o,
      name: "rejectUnknownProperties",
      input: enableValidation.onUpdate,
      order: 15
    }));
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
    var _expr = Object.keys(this).includes(expr) && this[expr] instanceof RegExp ? this[expr] : expr;

    return _expr.test(val);
  }
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
  var compareVal = v.unique.encrypted ? (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__.encrypt)(propVal) : propVal;
  return o.listSync(_defineProperty({}, v.propKey, compareVal)).length < 1;
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
    "typeof": function _typeof(v, o, propVal) {
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
    }
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
  }
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

      if ((invalid === null || invalid === void 0 ? void 0 : invalid.length) > 0) {
        throw new Error("invalid value for ".concat(_toConsumableArray(invalid.map(function (v) {
          return v.propKey;
        }))));
      }
    }

    return _objectSpread({
      validateProperties: function validateProperties() {
        validate(this);
      }
    }, addValidation({
      model: o,
      name: validateProperties.name,
      input: enableValidation.onUpdate,
      output: enableValidation.onCreate,
      order: 90
    }));
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

      if ((updates === null || updates === void 0 ? void 0 : updates.length) > 0) {
        return updates.map(function (u) {
          return u.update(o, obj[u.propKey]);
        }).reduce(function (p, c) {
          return _objectSpread(_objectSpread({}, p), c);
        });
      }
    }

    return _objectSpread({
      updateProperties: function updateProperties() {
        return updateProps(this);
      }
    }, addValidation({
      model: o,
      name: updateProperties.name,
      input: enableValidation.onUpdate,
      order: 35
    }));
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
  for (var _len7 = arguments.length, args = new Array(_len7 > 3 ? _len7 - 3 : 0), _key7 = 3; _key7 < _len7; _key7++) {
    args[_key7 - 3] = arguments[_key7];
  }

  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(o) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _objectSpread(_objectSpread({}, o), {}, {
                invokePort: function invokePort() {
                  console.log({
                    func: "invokePort",
                    fn: fn,
                    args: args
                  });
                  return this[fn].apply(this, args).then(function (o) {
                    return o;
                  });
                }
              }, addValidation({
                model: o,
                name: "invokePort",
                output: enableValidation.onUpdate,
                order: 85
              })));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref5.apply(this, arguments);
    };
  }();
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
  for (var _len8 = arguments.length, args = new Array(_len8 > 3 ? _len8 - 3 : 0), _key8 = 3; _key8 < _len8; _key8++) {
    args[_key8 - 3] = arguments[_key8];
  }

  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(o) {
      var functionType;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              functionType = {
                "function": function _function(fn, obj) {
                  for (var _len9 = arguments.length, args = new Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
                    args[_key9 - 2] = arguments[_key9];
                  }

                  return fn.apply(void 0, [obj].concat(args)).then(function (o) {
                    return o;
                  });
                },
                string: function string(fn, obj) {
                  for (var _len10 = arguments.length, args = new Array(_len10 > 2 ? _len10 - 2 : 0), _key10 = 2; _key10 < _len10; _key10++) {
                    args[_key10 - 2] = arguments[_key10];
                  }

                  return obj[fn].apply(obj, args).then(function (o) {
                    return o;
                  });
                }
              };
              return _context3.abrupt("return", _objectSpread(_objectSpread({}, o), {}, {
                execMethod: function execMethod() {
                  var _this3 = this;

                  return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    var model;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return functionType[_typeof(fn)].apply(functionType, [fn, _this3].concat(args));

                          case 2:
                            model = _context2.sent;
                            return _context2.abrupt("return", model);

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }))();
                }
              }, addValidation({
                model: o,
                name: "execMethod",
                output: enableValidation.onUpdate,
                order: 40
              })));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }();
};
/**
 * Create a method on a model.
 * @param {*} fn
 * @param  {...any} args
 */

var createMethod = function createMethod(fn) {
  for (var _len11 = arguments.length, args = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
    args[_key11 - 1] = arguments[_key11];
  }

  return function (o) {
    return _objectSpread(_objectSpread({}, o), {}, _defineProperty({}, fn.name, function () {
      return fn.apply(void 0, args);
    }));
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

var encryptPersonalInfo = encryptProperties(/^last.*Name$|^surname$|^family.*Name$/i, /^shipping.*Address$/i, /^billing.*Address$/i, /^home.*Address$/i, /email|e-mail/i, /^phone$|^home.*phone$/i, /^mobile$|^mobile.*number$|^cell.*number$/i, /^credit.*Card/i, /^cvv$/i, /^ssn$|^socialSecurity/i, /^encrypted/i);
/**
 * Global mixins
 */

var GlobalMixins = [encryptPersonalInfo];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalMixins);

/***/ })

};
;
//# sourceMappingURL=src_models_mixins_js.js.map