const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/sneakerz.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },

      {
        test: /\.(sass|css|less)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "fonts",
            outputPath: "fonts",
          },
        },
      },
    ],
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
};
