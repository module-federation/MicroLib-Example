"use strict";

const session = require("express-session");
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const { uuid } = require("./lib/utils");
require("dotenv").config();
const services = require("./service-registry").default;
const cluster = require("cluster");
const fs = require("fs");
//const { handleEvents } = require("./services-mock/event-service");

const app = express();
const map = new Map();
const API_ROOT = "/api";
const PORT = 8060;

import axios from "axios";
// list the models we expose to host through module federation
import { models } from "./models";
console.log(models);

// Run test service endpoints
services.init();

// We need the same instance of the session parser in express and
// WebSocket server.
const sessionParser = session({
  saveUninitialized: false,
  secret: "$eCuRiTy",
  resave: false,
});

// Serve static files from the 'public' folder.
app.use(express.static("public"));
app.use(express.static("dist")); // remoteEntry.js
app.use(sessionParser);
app.use(express.json());

app.post("/login", function (req, res) {
  // "Log in" user and set userId to session.
  const id = uuid();
  console.log(`Updating session for user ${id}`);
  req.session.userId = id;
  res.send({ result: "OK", message: "Session updated" });
});

app.delete("/logout", function (request, response) {
  const ws = map.get(request.session.userId);
  console.log("Destroying session");
  request.session.destroy(function () {
    if (ws) ws.close();
    response.send({ result: "OK", message: "Session destroyed" });
  });
});

app.get(`${API_ROOT}/fedmonserv`, (req, res) =>
  res.send("Federated Monolith Service")
);

app.get(`${API_ROOT}/service1`, (req, res) => {
  console.log({ from: req.ip, url: req.originalUrl });
  res.status(200).send({
    from: "fedmonserv",
    ip: req.ip,
    port: PORT,
    url: req.originalUrl,
    date: new Date().toUTCString(),
  });
});

// Create HTTP server
const server = http.createServer(app);
const wss = new WebSocket.Server({ clientTracking: true, noServer: true });

// Send events emitted from host to any WS clients
app.post(`${API_ROOT}/publish`, (req, res) => {
  console.log({ event: req.body });
  //handleEvents(req, res);
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ event: req.body }));
    }
  });
});

// Handle request to upgrade to websocket protocol
server.on("upgrade", function (request, socket, head) {
  console.log("Parsing session from request...");

  sessionParser(request, {}, () => {
    if (!request.session.userId) {
      socket.destroy();
      return;
    }
    console.log("Session is parsed");
    wss.handleUpgrade(request, socket, head, function (ws) {
      wss.emit("connection", ws, request);
    });
  });
});

wss.on("connection", function (ws, request) {
  const userId = request.session.userId;
  map.set(userId, ws);

  ws.on("message", function (message) {
    console.log(`Received message ${message} from user ${userId}`);
  });

  ws.on("close", function () {
    map.delete(userId);
  });
});

function startServer() {
  server.listen(PORT, function () {
    console.log(`Listening on http://localhost:${PORT}\n`);
  });
}

function hotReload() {
  const url = process.env.RELOAD_URL || "http://localhost:8070";
  const auth = /true/i.test(process.env.AUTH_ENABLED);
  const ssl = url.startsWith("https");
  if (auth) {
    const text = fs.readFileSync("./public/token.json", "utf-8");
    const token = JSON.parse(text);
    axios.defaults.headers.common[
      "Authorization"
    ] = `bearer ${token.access_token}`;
  }
  // setTimeout(() => {
  try {
    if (ssl) {
      const https = require("https");
      const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
      });
      axios
        .get(url, { httpsAgent })
        .then(response => console.log(response.data));
    } else {
      axios.get(url).then(response => console.log(response.data));
    }
  } catch (e) {
    console.log(e.message);
  }
  //}, 10000);
}

// function startHotLoadWorker() {
//   const worker = cluster.fork();
//   const timerId = setTimeout(function (params) {
//     startHotLoadWorker();
//   }, 10000);
//   worker.on("message", msg => {
//     if (msg?.status === "done") {
//       clearTimeout(timerId);
//     }
//   });
//
__webpack__;

if (cluster.isMaster) {
  cluster.fork();
  startServer();
} else {
  hotReload();
}

// let reloaded = false;
// let serverRunning = false;

// (async () => {
//   while (!reloaded) {
//     const worker = cluster.fork();

//     if (cluster.master) {
//       if (!serverRunning) {
//         startServer();
//         serverRunning = true;
//       }
//       function waitOnHotLoad() {
//         return new Promise(function (resolve) {
//           worker.on("message", msg => {
//             if (msg === "all good") {
//               reloading = true;
//               resolve(true);
//             }
//           });
//         });
//       }
//       await waitOnHotLoad();

//       await new Promise(r => setTimeout(r, 2000));
//     }
//   }
// })();

// if (cluster.worker) {
//   hotReload();
//   process.send("all good");
// }
