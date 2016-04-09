/*
* Application config
 */
'use strict';

function resolveBase (b) {
  return b === './' ? '.' : b;
}

const config = {};

config.dest = {};
config.dest.base = './';
config.dest.styles = resolveBase(config.dest.base) + '/css';
config.dest.scripts = resolveBase(config.dest.base) + '/js';
config.dest.views = resolveBase(config.dest.base);

config.src = {};
config.src.base = './src';
config.src.styles = resolveBase(config.src.base) + '/sass';
config.src.scripts = resolveBase(config.src.base) + '/';
config.src.entry = [`./app.js`];

module.exports = config;
