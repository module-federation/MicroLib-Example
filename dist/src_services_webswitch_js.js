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
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! https */ "https");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WEBSWITCH (c)
 * websocket clients connect to a common server,
 * which broadcasts any messages it receives.
 */


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var FQDN = process.env.WEBSWITCH_HOST || "webswitch.aegis.dev";
var PORT = 8062;
var PATH = "/api/publish";

function getHostName() {
  return _getHostName.apply(this, arguments);
}
/**@type import("ws/lib/websocket") */


function _getHostName() {
  _getHostName = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return dns_promises__WEBPACK_IMPORTED_MODULE_1___default().lookup(FQDN);

          case 3:
            if (!function (address) {
              return console.log(address);
            }) {
              _context.next = 7;
              break;
            }

            _context.t0 = FQDN;
            _context.next = 8;
            break;

          case 7:
            _context.t0 = "localhost";

          case 8:
            return _context.abrupt("return", _context.t0);

          case 11:
            _context.prev = 11;
            _context.t1 = _context["catch"](0);
            console.warn("dns lookup", _context.t1);

          case 14:
            return _context.abrupt("return", "localhost");

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));
  return _getHostName.apply(this, arguments);
}

var webswitchClient;
function publishEvent(_x, _x2) {
  return _publishEvent.apply(this, arguments);
} // function getHeaders(method, payload) {
//   const contentLength = ["POST", "PATCH"].includes(method)
//     ? Buffer.byteLength(payload)
//     : 0;
//   const contentHeaders = { "Content-Type": "application/json" };
//   return contentLength > 0
//     ? { ...contentHeaders, "Content-Length": contentLength }
//     : contentHeaders;
// }
// async function httpsClient({
//   hostname,
//   port,
//   path,
//   protocol = "https",
//   method = "GET",
//   payload = "",
//   safe = true,
// }) {
//   return new Promise(function (resolve, reject) {
//     const normal = {
//       hostname,
//       port,
//       path,
//       method,
//       headers: getHeaders(method, payload),
//     };
//     const options = safe ? normal : { ...normal, rejectUnauthorized: false };
//     const chunks = [];
//     const client = {
//       http: http,
//       https: https,
//     };
//     try {
//       const req = client[protocol].request(options, res => {
//         res.setEncoding("utf8");
//         res.on("data", chunk => chunks.push(chunk));
//         res.on("error", e => console.warn(httpsClient.name, e.message));
//         res.on("end", () => resolve(chunks.join("")));
//       });
//       req.on("error", e => reject(e));
//       if (payload) req.on("connect", () => req.write(payload));
//     } catch (e) {
//       console.warn(httpsClient.name, e.message);
//     }
//   });
// }
// else {
//   httpsClient({
//     hostname,
//     port,
//     path,
//     method: "POST",
//     payload: serialziedEvent,
//   });
// }

function _publishEvent() {
  _publishEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event, observer) {
    var useWebswitch,
        hostname,
        serializedEvent,
        webswitch,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            useWebswitch = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : true;

            if (event) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return");

          case 3:
            _context2.next = 5;
            return getHostName();

          case 5:
            hostname = _context2.sent;
            serializedEvent = JSON.stringify(event);

            try {
              webswitch = function webswitch() {
                console.debug("sending", event);

                if (!webswitchClient) {
                  webswitchClient = new (ws__WEBPACK_IMPORTED_MODULE_0___default())("ws://".concat(hostname, ":").concat(PORT).concat(PATH)); // setTimeout(() => {
                  //   webswitchClient.ping();
                  // }, 30000);
                  // const timerId = setTimeout(() => {
                  //   webswitchClient.terminate();
                  //   webswitch();
                  // }, 60000);
                  // webswitchClient.on("pong", function () {
                  //   clearTimeout(timerId);
                  //   setTimeout(() => webswitchClient.ping(), 30000);
                  // });

                  webswitchClient.on("message", function (message) {
                    // const event = JSON.parse(message);
                    console.debug(messaage);
                    observer.notify(event.eventName, event);
                  });
                }

                webswitchClient.send(serializedEvent);
              };

              webswitch();
            } catch (e) {
              console.warn(publishEvent.name, e.message);
            }

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _publishEvent.apply(this, arguments);
}

/***/ })

};
;
//# sourceMappingURL=src_services_webswitch_js.js.map