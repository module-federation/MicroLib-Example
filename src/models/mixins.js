'use strict'

import {
  hash,
  encrypt,
  compose
} from './utils';

/**
 * Functional mixin
 * @callback mixinFunction
 * @param {Object} o Object to compose
 * @returns {Object} Composed object
 */

/**
 * @callback functionalMixinFactory
 * @param {*} mixinFunctionParams params for mixin function 
 * @returns {mixinFunction}
 */

/**
 * Key to access previous version of the model
 */
export const PREVMODEL = Symbol('prevModel');

/**
 * Process mixin pre or post update
 */
export const mixinType = {
  pre: Symbol('pre'),
  post: Symbol('post')
}

/**
 * Stored mixins - use private symbol as key to prevent overwrite
 */
export const mixinSets = {
  [mixinType.pre]: Symbol('preUpdateMixins'),
  [mixinType.post]: Symbol('postUpdateMixins')
}

/**
 * Set of pre mixins
 */
const PREMIXINS = mixinSets[mixinType.pre];
/**
 * Set of post mixins
 */
const POSTMIXINS = mixinSets[mixinType.post];

/**
 * Apply any pre and post mixins and return the result.
 * 
 * @param {*} model - current model
 * @param {*} changes - object containing changes
 */
export function processUpdate(model, changes) {
  changes[PREVMODEL] = model; // keep history

  const updates = model[PREMIXINS]
    ? compose(...model[PREMIXINS].values())(changes)
    : changes;

  const updated = { ...model, ...updates };

  return model[POSTMIXINS]
    ? compose(...model[POSTMIXINS].values())(updated)
    : updated;
}

/**
 * Store mixins for execution on update
 * @param {mixinType} type 
 * run before changes are applied or afterward
 * @param {*} o  Object containing changes to apply (pre) 
 * or new object after changes have been applied (post)
 * @param {string} name `Function.name` 
 * @param {mixinFunction} cb mixin function
 */
function updateMixins(type, o, name, cb) {
  if (!mixinSets[type]) {
    throw new Error('invalid mixin type');
  }

  const mixinSet = o[mixinSets[type]] || new Map();

  if (!mixinSet.has(name)) {
    mixinSet.set(name, cb());

    return {
      ...o,
      [mixinSets[type]]: mixinSet
    }
  }
  return o;
}

/**
 * Execute any functions in `propKeys` and return keys
 * @param {*} o - Object to compose
 * @param  {Array<string | function(*):string>} propKeys - 
 * Names (or functions that return names) of properties
 * @returns {string[]} list of (resolved) property keys
 */
function getDynamicProps(o, ...propKeys) {
  return propKeys.map(k => typeof k === 'function' ? k(o) : k);
}

/**
 * Functional mixin that encrypts the properties specified in `propNames`  
 * @param  {Array<string | function(*):string>} propKeys - 
 * Names (or functions that return names) of properties to encrypt
 */
const encryptProperties = (...propKeys) => (o) => {
  const keys = getDynamicProps(o, ...propKeys);

  const encryptProps = () => {
    return keys.map(key => o[key]
      ? { [key]: encrypt(o[key]) }
      : {})
      .reduce((p, c) => ({ ...c, ...p }));
  }

  const mixins = updateMixins(
    mixinType.pre,
    o,
    encryptProperties.name,
    () => encryptProperties(...propKeys)
  );

  return {
    ...mixins,
    ...encryptProps()
  }
}

/**
 * Functional mixin that prevents properties from being updated.
 * Accepts a property name or a function that returns a property name.
 * @param {boolean} isUpdate - set to false on create and true on update
 * @param  {Array<string | function(*):string>} propKeys - names of properties to freeze
 */
const freezeProperties = (isUpdate, ...propKeys) => (o) => {
  const preventUpdates = () => {
    const keys = getDynamicProps(o, ...propKeys);
    const mutations = Object.keys(o)
      .filter(key => keys.includes(key));

    if (mutations?.length > 0) {
      throw new Error(
        `cannot update readonly properties: ${mutations}`
      );
    }
  }

  if (isUpdate) {
    preventUpdates();
  }

  return updateMixins(
    mixinType.pre,
    o,
    freezeProperties.name,
    () => freezeProperties(true, ...propKeys)
  );
}

/** 
 * Functional mixin that enforces required fields 
 * @param {Array<string | function(*):string>} propKeys - 
 * required property names
 */
const requireProperties = (...propKeys) => (o) => {
  const keys = getDynamicProps(o, ...propKeys);
  const missing = keys.filter(key => !o[key]);
  if (missing?.length > 0) {
    throw new Error(`missing required properties: ${missing}`);
  }
  return o;
}

/**
 * Functional mixin that hashes passwords
 * @param {*} hash hash algorithm
 * @param  {Array<string | function(*):string>} propKeys name of password props
 */
const hashPasswords = (hash, ...propKeys) => (o) => {
  const keys = getDynamicProps(o, ...propKeys);

  function hashPwds() {
    return keys.map(key => o[key]
      ? { [key]: hash(o[key]) }
      : {})
      .reduce((p, c) => ({ ...c, ...p }));
  }

  const mixins = updateMixins(
    mixinType.pre,
    o,
    hashPasswords.name,
    () => hashPasswords(hash, ...propKeys)
  );

  return {
    ...mixins,
    ...hashPwds()
  }
}

const internalPropList = [];

/**
 * 
 * @param {*} isUpdate 
 * @param  {...any} propKeys 
 */
const allowProperties = (isUpdate, ...propKeys) => (o) => {
  function rejectUnknownProps() {
    const keys = getDynamicProps(o, ...propKeys);
    const allowList = keys.concat(internalPropList);
    const unknownProps = Object.keys(o).filter(
      key => !allowList.includes(key)
    );

    if (unknownProps?.length > 0) {
      throw new Error(`invalid properties: ${unknownProps}`);
    }
  }

  if (isUpdate) {
    rejectUnknownProps();
  }

  return updateMixins(
    mixinType.pre,
    o,
    allowProperties.name,
    () => allowProperties(true, ...propKeys)
  );
}

/**
 * @callback isValid
 * @param {Object} o - the property owner
 * @param {*} propVal - the property value
 * @returns {boolean} - true if valid
 */

/**
 * @typedef {{
 *  propKey:string,
 *  isValid?:isValid,
 *  values?:any[],
 *  regex?:'email'|'ipv4Addr'|string,
 *  maxlen?:number
 *  maxnum?:number
 *  typeof?:string
 * }} validation 
 */

/**
 * regular expressions to use with regex property validator
 */
export const RegEx = {
  email: /(.+)@(.+){2,}\.(.+){2,}/,
  ipv4Address: /^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$/,
  ipv6Address: /^((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7}$/,
  phone: /^[1-9]\d{2}-\d{3}-\d{4}/,
  test: (expr, val) => {
    const _expr = Object.keys(RegEx).includes(expr) && typeof expr !== 'function'
      ? RegEx[expr]
      : expr;
    return _expr.test(val);
  }
}

/**
 * 
 */
const validator = {
  tests: {
    isValid: (v, o, propVal) => v(o, propVal),
    values: (v, o, propVal) => v.includes(propVal),
    regex: (v, o, propVal) => RegEx.test(v, propVal),
    typeof: (v, o, propVal) => v === typeof propVal,
    maxnum: (v, o, propVal) => v > propVal,
    maxlen: (v, o, propVal) => v > propVal.length
  },
  /**
   * Returns true if tests pass
   * @param {validation} v validation spec
   * @param {Object} o object to compose
   * @param {*} propVal value of property to validate
   * @returns {boolean} true if tests pass
   */
  isValid: (v, o, propVal) => {
    const tests = validator.tests;
    return Object.keys(tests).every(key => {
      if (v[key]) { // enabled
        return tests[key](v[key], o, propVal);
      }
      return true;
    });
  }
}

/**
 * 
 * @param {validation[]} validations
 */
const validateProperties = (validations) => (o) => {
  const invalid = validations.filter(v => {
    const propVal = o[v.propKey];
    if (!propVal) {
      return false;
    }
    return !validator.isValid(v, o, propVal);
  });

  if (invalid?.length > 0) {
    throw new Error(
      `invalid value for ${[...invalid.map(v => v.propKey)]}`
    );
  }

  return updateMixins(
    mixinType.post,
    o,
    validateProperties.name,
    () => validateProperties(validations)
  );
}

/**
 * @callback updaterFn 
 * @param {Object} o  
 * @param  {*} propVal 
 * @returns {Object} object with updated property
 */

/**
 * @typedef updater
 * @property {string} propKey property being updated 
 * @property {updaterFn} update return new object with updated property
 */

/**
 * 
 * @param {updater[]} updaters 
 */
const updateProperties = (isUpdate, updaters) => (o) => {
  function updateProps() {
    if (isUpdate) {
      const updates = updaters.filter(u => o[u.propKey]);
      if (updates?.length > 0) {
        return updates
          .map(u => u.update(o, o[u.propKey]))
          .reduce((p, c) => ({ ...p, ...c }));
      }
    }
    return {};
  }

  const mixins = updateMixins(
    mixinType.pre,
    o,
    updateProperties.name,
    () => updateProperties(true, updaters)
  );

  return {
    ...mixins,
    ...updateProps()
  }
}

/**
 * Require properties listed in `propKeys`
 * @param  {Array<string | function(*):string>} propKeys -
 * list of names (or functions that return names) of properties
 */
export function requirePropertiesMixin(...propKeys) {
  return requireProperties(...propKeys);
}

/**
 * Prevent updates to properties listed in `propKeys`
 * @param  {Array<string | function(*):string>} propKeys - 
 * list of names (or functions that return names) of properties 
 */
export function freezePropertiesMixin(...propKeys) {
  return freezeProperties(false, ...propKeys);
}

/**
 * Encyrpt properties listed in `propKeys`
 * @param  {Array<string | function(*):string>} propKeys -
 * list of names (or functions that return names) of properties
 */
export function encryptPropertiesMixin(...propKeys) {
  return encryptProperties(...propKeys);
}

/**
 * Hash passwords listed in `propKeys`
 * @param  {Array<string | function(*):string>} propKeys -
 * list of names (or functions that return names) of properties
 */
export function hashPasswordsMixin(...propKeys) {
  return hashPasswords(hash, ...propKeys);
}

/**
 * Only allow properties listed in `propKeys`
 * @param  {Array<string | function(*):string>} propKeys -
 * list of names (or functions that return names) of properties
 */
export function allowPropertiesMixin(...propKeys) {
  return allowProperties(false, ...propKeys);
}

/**
 * Validate property values are members of a list, 
 * match a regular expression, are of a certain length, or type,
 * or satisfy a custom validation function.
 * @param {validation[]} validations 
 */
export function validatePropertiesMixin(validations) {
  return validateProperties(validations);
}

/**
 * Update properties. Triggered by update to property listed
 * in `updater.propKey`.
 * @param {updater[]} updaters 
 */
export function updatePropertiesMixin(updaters) {
  return updateProperties(false, updaters);
}

const checkFormat = (propKey, expr) => (o) => {
  if (o[propKey] && !RegEx.test(expr, o[propKey])) {
    throw new Error(`invalid ${propKey}`);
  }
  return propKey;
}

/**
 * Implement GDPR encryption requirement across models
 */
const encryptPersonalInfo = encryptProperties(
  'lastName',
  'address',
  checkFormat('email', 'email'), // check format first
  checkFormat('phone', 'phone'),
  checkFormat('mobile', 'phone'),
  'creditCard',
  'ccv',
  'ssn'
);

/**
 * Global mixins
 */
const GlobalMixins = [
  encryptPersonalInfo
];

export default GlobalMixins;