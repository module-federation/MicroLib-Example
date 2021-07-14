exports.id = "src_services_webswitch_js";
exports.ids = ["src_services_webswitch_js"];
exports.modules = {

/***/ "./src/services/webswitch.js":
/*!***********************************!*\
  !*** ./src/services/webswitch.js ***!
  \***********************************/
/*! namespace exports */
/*! export publishEvent [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "publishEvent": () => /* binding */ publishEvent
/* harmony export */ });
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ws */ "./node_modules/ws/index.js");
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ws__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dns_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dns/promises */ "dns/promises");
/* harmony import */ var dns_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dns_promises__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WEBSWITCH (c)
 * websocket clients connect to a common server,
 * which broadcasts any messages it receives.
 */


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var FQDN = process.env.WEBSWITCH_HOST || "webswitch.aegis.dev";
var PORT = 8062;
var PATH = "/webswitch/broadcast";

function lookup(_x) {
  return _lookup.apply(this, arguments);
}

function _lookup() {
  _lookup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(hostname) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return dns_promises__WEBPACK_IMPORTED_MODULE_1___default().lookup(hostname);

          case 3:
            result = _context.sent;
            console.debug("server address", result, result.address);
            return _context.abrupt("return", result.address);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.warn("dns lookup", _context.t0);

          case 11:
            return _context.abrupt("return", null);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _lookup.apply(this, arguments);
}

function getHostName() {
  return _getHostName.apply(this, arguments);
}
/**@type import("ws/lib/websocket") */


function _getHostName() {
  _getHostName = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var hostname;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return lookup(FQDN);

          case 2:
            hostname = _context2.sent;
            return _context2.abrupt("return", hostname ? hostname : "localhost");

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getHostName.apply(this, arguments);
}

var ws;
function publishEvent(_x2, _x3) {
  return _publishEvent.apply(this, arguments);
}

function _publishEvent() {
  _publishEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event, observer) {
    var hostname, serializedEvent, webswitch;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            webswitch = function _webswitch() {
              console.debug("webswitch sending", event);

              if (!ws) {
                ws = new (ws__WEBPACK_IMPORTED_MODULE_0___default())("ws://".concat(hostname, ":").concat(PORT).concat(PATH));
                ws.on("message", function (message) {
                  console.debug(message);
                  var event = JSON.parse(message);
                  if (event.eventName) observer.notify(event.eventName, event);
                });
                ws.on("open", function () {
                  ws.send(JSON.stringify("webswitch"));
                });
                ws.on("error", function (error) {
                  console.error("webswitchClient.on(error)", error);
                });
                return;
              }

              function send() {
                if (ws.readyState) {
                  ws.send(serializedEvent);
                  return;
                }

                setTimeout(function () {
                  return send();
                }, 1000);
              }

              send();
            };

            if (event) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return");

          case 3:
            _context3.next = 5;
            return getHostName();

          case 5:
            hostname = _context3.sent;
            serializedEvent = JSON.stringify(event);

            try {
              webswitch();
            } catch (e) {
              console.warn(publishEvent.name, e.message);
            }

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _publishEvent.apply(this, arguments);
}

/***/ })

};
;
//# sourceMappingURL=src_services_webswitch_js.js.map