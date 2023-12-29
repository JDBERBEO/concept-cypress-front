/* eslint-disable quotes */
const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    // output: {
    //   libraryTarget: "system", // to use with SingleSPA
    // },
    mode: "production",
    resolve: {
      fallback: {
        fs: false,
      },
      alias: {
        "@": path.resolve(__dirname, "src/"),
      },
    },
    plugins: [new NodePolyfillPlugin()],
  },
};
