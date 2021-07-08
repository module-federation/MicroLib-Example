/**
 * WEBSWITCH (c)
 * websocket clients connect to a common server,
 * which broadcasts any messages it receives.
 */
"use strict";

import WebSocket from "ws";
import dns from "dns/promises";

const FQDN = process.env.WEBSWITCH_HOST || "webswitch.aegis.dev";
const PORT = 8062;
const PATH = "/api/publish";

async function getHostName() {
  try {
    return (await dns.lookup(FQDN), address => console.log(address))
      ? FQDN
      : "localhost";
  } catch (error) {
    console.warn("dns lookup", error);
  }
  return "localhost";
}

/**@type import("ws/lib/websocket") */
let ws;

export async function publishEvent(event, observer, useWebswitch = true) {
  if (!event) return;

  const hostname = await getHostName();
  const serializedEvent = JSON.stringify(event);

  try {
    function webswitch() {
      console.debug("sending", event);

      if (!ws) {
        ws = new WebSocket(`ws://${hostname}:${PORT}${PATH}`);

        ws.on("message", function (message) {
          const event = JSON.parse(message);
          console.debug(message);
          console.debug(event);
          observer.notify(event.eventName, event);
        });

        ws.on("open", function () {
          ws.send(serializedEvent);
        });

        ws.on("error", function (error) {
          console.error("webswitchClient.on(error)", error);
        });
        return;
      }
      ws.send(serializedEvent);
    }
    webswitch();
  } catch (e) {
    console.warn(publishEvent.name, e.message);
  }
}

// setTimeout(() => {
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

// function getHeaders(method, payload) {
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
