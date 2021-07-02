exports.id = "src_services_event-bus_js";
exports.ids = ["src_services_event-bus_js"];
exports.modules = {

/***/ "./src/services/event-bus.js":
/*!***********************************!*\
  !*** ./src/services/event-bus.js ***!
  \***********************************/
/*! namespace exports */
/*! export EventBus [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventBus": () => /* binding */ EventBus
/* harmony export */ });
/* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../adapters */ "./src/adapters/index.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-service */ "./src/services/event-service.js");
 // Build EventBus client for host




var _notify = (0,_adapters__WEBPACK_IMPORTED_MODULE_0__.notify)(_event_service__WEBPACK_IMPORTED_MODULE_1__.Event);

var _listen = (0,_adapters__WEBPACK_IMPORTED_MODULE_0__.listen)(_event_service__WEBPACK_IMPORTED_MODULE_1__.Event);

var model = {
  listen: _listen
};
var EventBus = {
  notify: function notify(topic, message) {
    return _notify({
      model: model,
      args: [topic, message]
    });
  },
  listen: function listen(options) {
    return _listen({
      model: model,
      args: [options]
    });
  }
};

/***/ })

};
;
//# sourceMappingURL=src_services_event-bus_js.js.map