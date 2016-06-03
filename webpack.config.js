// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
const webpack = require('webpack');
const path = require('path');
const config = require('./app.config');


module.exports = {
  debug: true,
  devtool: '#eval-source-map',
  context: path.join(__dirname, config.src.base),

  entry: config.src.entry,

  output: {
    path: path.join(__dirname, config.dest.scripts),
    publicPath: '/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'src',
      'src/actions',
      'node_modules'
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      React   : 'react',
      ReactDOM: 'react-dom'
    })
  ],

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};
