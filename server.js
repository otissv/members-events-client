/**
 * Require Browsersync along with webpack and middleware for it
 */
var browserSync = require('browser-sync');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

/**
 * Require ./webpack.config.js and make a bundler from it
 */
var webpackConfig = require('./webpack.config');
var bundler = webpack(webpackConfig);

/**
 * Run Browsersync and use middleware for Hot Module Replacement
 */
browserSync({
  files: ['*.html', 'css/*.css', 'js/*.js'],
  exclude: false,
  server: {
    baseDir: './',
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {
          colors: true
        }
      }),
      webpackHotMiddleware(bundler)]
  },
  port: 9000,
  // proxy: 'http://localhost:8000',
  startPath: null,
  ghostMode: {
    clicks: true,
    links: true,
    forms: true,
    scroll: true
  },
  open: false,
  noOpen: false,
  noNotify: false,
  xip: true,
  timestamps: true,
  fileTimeout: 1000,
  injectChanges: true,
  scrollProportionally: true,
  scrollThrottle: 0,
  notify: false,
  host: null,
  excludedFileTypes: [],
  reloadDelay: 0
});
