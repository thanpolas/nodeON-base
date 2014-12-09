/**
 * @fileOverview Plain key value store for options.
 */
var __ = require('lodash');
var appError = require('nodeon-error');

var config = module.exports = {};

config.opts = {
  redis: {
    namespace: null,
    port: null,
    host: null,
    pass: null,
    options: null,
  },
  isHeroku: false,
  errorName: 'nodeonBase',
};

/**
 * Set options.
 *
 * @param {Object} opts Key value options.
 */
config.options = function (opts) {
  __.extend(config.opts, opts);
  appError.setName(config.opts.errorName);
};
