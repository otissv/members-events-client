// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
const webpack = require('webpack');
const path = require('path');
const config = require('app.config');

module.exports = {
  context: path.join(__dirname, config.src.base),

  entry: [
    './app'
  ],

  output: {
    path: path.join(__dirname, './docs/scripts/'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
