const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // Change mode to development for easier debugging
  entry: {
    application: "./app/javascript/application.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "app/assets/builds"),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Add .jsx if your components have that extension
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};
