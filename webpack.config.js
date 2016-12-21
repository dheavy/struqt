var webpack = require('webpack');
var path = require('path');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;
var nodeExternals = require('webpack-node-externals');

var libraryName = 'struqt';
var plugins = [];
var outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

var config = {
  entry: [
    'babel-polyfill',
    './src/linkedlists/singly.js',
    './src/linkedlists/doubly.js',
  ],
  devtool: 'source-map',
  output: {
    path: './lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
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

module.exports = config;
