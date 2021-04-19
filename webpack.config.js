var path = require("path");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const httpNode = require("./webpack/http-node");
const NodemonPlugin = require("nodemon-webpack-plugin");

var serverConfig = {
  target: httpNode,
  entry: ["@babel/polyfill", path.resolve(__dirname, "src/index.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    //publicPath: "http://localhost:8060",
    publicPath: "https://raw.githubusercontent.com/",
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
      },
    }),
  ],
};

module.exports = [serverConfig];
