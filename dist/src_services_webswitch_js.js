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
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! websocket */ "./node_modules/websocket/index.js");
/* harmony import */ var websocket__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(websocket__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dns_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dns/promises */ "dns/promises");
/* harmony import */ var dns_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dns_promises__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WEBSWITCH (c)
 * websocket clients connect to a common server,
 * which broadcasts any messages it receives.
 */


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var FQDN = process.env.WEBSWITCH_HOST || "webswitch.aegis.dev";
var PORT = 8060;
var PATH = "/api/publish";

function getHostName() {
  return _getHostName.apply(this, arguments);
}

function _getHostName() {
  _getHostName = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return dns_promises__WEBPACK_IMPORTED_MODULE_2___default().lookup(FQDN);

          case 3:
            if (!_context.sent) {
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

function httpClient(_x) {
  return _httpClient.apply(this, arguments);
}
/**
 * Connect to Webswitch server.
 * @param {websocket.client} client
 * @returns {Promise<websocket.connection>}
 */


function _httpClient() {
  _httpClient = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref) {
    var hostname, port, path, _ref$method, method, _ref$payload, payload;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            hostname = _ref.hostname, port = _ref.port, path = _ref.path, _ref$method = _ref.method, method = _ref$method === void 0 ? "GET" : _ref$method, _ref$payload = _ref.payload, payload = _ref$payload === void 0 ? "" : _ref$payload;
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              var contentLength = ["POST", "PATCH"].includes(method) ? Buffer.byteLength(payload) : 0;
              var contentHeaders = {
                "Content-Type": "application/json"
              };
              var headers = contentLength > 0 ? _objectSpread(_objectSpread({}, contentHeaders), {}, {
                "Content-Length": contentLength
              }) : contentHeaders;
              var options = {
                hostname: hostname,
                port: port,
                path: path,
                method: method,
                headers: headers
              };

              try {
                var req = http__WEBPACK_IMPORTED_MODULE_0___default().request(options, function (res) {
                  res.setEncoding("utf8");
                  res.on("data", function (chunk) {
                    return console.log(chunk);
                  });
                  res.on("error", function (e) {
                    return console.warn(httpClient.name, e.message);
                  });
                  res.on("end", resolve);
                });
                req.on("error", function (e) {
                  reject(e);
                });
                if (contentLength > 0) req.on("connect", function () {
                  return req.write(payload);
                });
              } catch (e) {
                console.warn(httpClient.name, e.message);
              }
            }));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _httpClient.apply(this, arguments);
}

function webswitchConnect(_x2, _x3, _x4) {
  return _webswitchConnect.apply(this, arguments);
}

function _webswitchConnect() {
  _webswitchConnect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(client, url, observer) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", new Promise(function (resolve, reject) {
              try {
                console.debug("connecting to...", url);
                client.on("connect", function (connection) {
                  console.debug("...connected to", url, connection.remoteAddress);
                  connection.on("message", function (message) {
                    console.debug("received message from", url);
                    console.debug("@@@@@@@@@@@@@@@@@@@@@@@", message);

                    if (message.type === "utf8") {
                      var event = JSON.parse(message);
                      console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^", event);
                      observer.notify(event.eventName, {
                        message: message,
                        address: connection.remoteAddress
                      });
                    }
                  });
                  connection.on("error", function (error) {
                    console.warn(webswitchConnect.name, error.message);
                    reject(error);
                  });
                  resolve(connection);
                });
                client.on("connectFailed", function (error) {
                  reject(error);
                });
                client.on("error", function (error) {
                  reject(error);
                });
                client.connect(url);
              } catch (e) {
                console.warn(webswitchConnect.name, e.message);
              }
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _webswitchConnect.apply(this, arguments);
}

var webswitchConnection;
function publishEvent(_x5, _x6) {
  return _publishEvent.apply(this, arguments);
}

function _publishEvent() {
  _publishEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(event, observer) {
    var useWebswitch,
        hostname,
        serializedEvent,
        _args4 = arguments;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            useWebswitch = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : true;

            if (event) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt("return");

          case 3:
            _context4.next = 5;
            return getHostName();

          case 5:
            hostname = _context4.sent;
            serializedEvent = JSON.stringify(event);

            if (!useWebswitch) {
              _context4.next = 23;
              break;
            }

            if (webswitchConnection && webswitchConnection.connected) {
              _context4.next = 21;
              break;
            }

            _context4.prev = 9;
            _context4.next = 12;
            return httpClient({
              hostname: hostname,
              port: PORT,
              path: "/login",
              method: "POST"
            });

          case 12:
            _context4.next = 14;
            return webswitchConnect(new (websocket__WEBPACK_IMPORTED_MODULE_1___default().client)(), "ws://".concat(hostname, ":").concat(PORT).concat(PATH), observer);

          case 14:
            webswitchConnection = _context4.sent;
            webswitchConnection.sendUTF(serializedEvent);
            _context4.next = 21;
            break;

          case 18:
            _context4.prev = 18;
            _context4.t0 = _context4["catch"](9);
            console.warn(publishEvent.name, _context4.t0.message);

          case 21:
            _context4.next = 24;
            break;

          case 23:
            httpClient({
              hostname: hostname,
              port: port,
              path: path,
              method: "POST",
              payload: serialziedEvent
            });

          case 24:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[9, 18]]);
  }));
  return _publishEvent.apply(this, arguments);
}

/***/ })

};
;
//# sourceMappingURL=src_services_webswitch_js.js.map