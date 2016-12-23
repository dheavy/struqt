var webpack = require('webpack');
var path = require('path');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;
var nodeExternals = require('webpack-node-externals');
var plugins = [];

var config = {
  entry: 'babel-polyfill',
  devtool: 'source-map',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /(\.js)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ["es2015", "stage-0"]
        }
      },
      {
        test: /(\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ["es2015", "stage-0"]
        }
      }
    ]
  },
  resolve: {
    root: './src',
    extensions: ['', '.js']
  },
  plugins: plugins
};

var singly = Object.assign({}, config, {
  name: 'singly-linked-list',
  entry: './src/linkedlists/singly.js',
  output: {
    path: './linkedlists',
    filename: 'singly.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
});

var doubly = Object.assign({}, config, {
  name: 'doubly-linked-list',
  entry: './src/linkedlists/doubly.js',
  output: {
    path: './linkedlists',
    filename: 'doubly.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
});

module.exports = [singly, doubly];
