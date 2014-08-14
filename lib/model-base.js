/**
 * @fileOverview The base Model Class all models extend from.
 */
var EventEmitter = require('events').EventEmitter;

var cip = require('cip');

var CeventEmitter = cip.cast(EventEmitter);

/**
 * The base Model Class all models extend from.
 *
 * @extends {events.EventEmitter}
 * @constructor
 */
module.exports = CeventEmitter.extend();
