const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const config = require("./webpack.config");

module.exports = {
  ...config,
  mode: "development",
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/[name].css",
    }),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      files: ["**/*.php"],
      proxy: "http://starter/",
    }),
  ],
};
