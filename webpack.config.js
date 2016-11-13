
require('es6-promise').polyfill();

const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./assets/app/index.js",
  output: {
    path: path.resolve(__dirname, "./assets/build"),
    publicPath: "/build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/ ,
      loaders: ['babel'],
      exclude: /^(node_modules)/,
    }, {
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
    }],
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      app: path.resolve(__dirname, './assets/app')
    },
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ],
};
