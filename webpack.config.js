var path = require("path");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const httpNode = require("./webpack/http-node");
const NodemonPlugin = require("nodemon-webpack-plugin");

var serverConfig = {
  target: httpNode,
  entry: ["@babel/polyfill", path.resolve(__dirname, "src/index.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath:
      "https://api.github.com?owner=module-federation&repo=microlib-example&filedir=dist&branch=new-customer",
    libraryTarget: "commonjs",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js"],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new NodemonPlugin(),
    new ModuleFederationPlugin({
      name: "microservices",
      library: { type: "commonjs-module" },
      filename: "remoteEntry.js",
      exposes: {
        "./models": "./src/models",
        "./adapters": "./src/adapters",
        "./services": "./src/services",
        "./validations": "./src/models/mixins",
        "./event-bus": "./src/services/event-bus",
        "./webswitch": "./src/services/webswitch",
      },
      shared: {
        axios: {
          eager: true,
        },
        "smartystreets-javascript-sdk": {
          eager: true,
        },
        kafkajs: {
          eager: true,
        },
        nanoid: {
          eager: true,
        },
      },
    }),
  ],
};

module.exports = [serverConfig];
