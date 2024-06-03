const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js").replaceAll("\\", "/"),
  output: {
    path: path.join(__dirname, "dist").replaceAll("\\", "/"),
    filename: "index.[contenthash].js",
    assetModuleFilename: path
      .join("images", "[name].[contenthash][ext]")
      .replaceAll("\\", "/"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: path
            .join("fonts", "[name].[contenthash][ext]")
            .replaceAll("\\", "/"),
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
        generator: {
          filename: path
            .join("icons", "[name].[contenthash][ext]")
            .replaceAll("\\", "/"),
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path
        .join(__dirname, "src", "template.html")
        .replaceAll("\\", "/"),
      filename: "index.html",
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: [
            {
              source: path.join(__dirname, "dist").replaceAll("\\", "/"),
              options: {
                force: true,
                recursive: true,
              },
            },
          ],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  devServer: {
    watchFiles: path.join(__dirname, "src").replaceAll("\\", "/"),
    port: 9000,
  },
};
