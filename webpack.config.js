const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./js/main.js",
    catalog: "./js/catalog.js",
    card: "./js/card.js",
    other: "./js/other.js",
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist/js"),
    // publicPath: "/local/templates/<project-name>/dist/js/",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          "eslint-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "../img/[name].[ext]",
          },
        },
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    modules: ["node_modules", "img"],
    extensions: [".js", ".jsx"],
  },
};
