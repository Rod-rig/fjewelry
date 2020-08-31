const StyleLintPlugin = require("stylelint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssoWebpackPlugin = require("csso-webpack-plugin").default;
const Autoprefixer = require("autoprefixer");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const config = require("./webpack.config");

module.exports = {
  ...config,
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new StyleLintPlugin(),
    new MiniCssExtractPlugin({
      filename: "../css/[name].css",
    }),
    new CssoWebpackPlugin({
      comments: false,
    }),
    Autoprefixer,
  ],
  optimization: {
    sideEffects: false,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};
