/**
 * @fileOverview The entities base class.
 */
var __ = require('lodash');

var EntityCrudMongoose = require('node-entity').Mongoose;
var appError = require('nodeon-error');
var log = require('logg').getLogger('nodeON-base.EntityBase');

/**
 * The base Entity Class all entities extend from.
 *
 * @constructor
 * @extends {crude.Entity}
 */
var Entity = module.exports = EntityCrudMongoose.extend();

/**
 * Wrap the default "create" method,
 * taking care to normalize any error messages.
 *
 * @param {Object} itemData The data to use for creating.
 * @param {Function(?app.error.Abstract, Mongoose.Model=)} done callback.
 * @override
 */
Entity.prototype._create = function(itemData) {
  // stub to default for now until Mongoose is normalized
  return EntityCrudMongoose.prototype._create.call(this, itemData)
    .bind(this)
    .catch(this._normalizeError);
};

/**
 * Wrap the default "update" method,
 * taking care to normalize any error messages.
 *
 * @param {Object|string} query The query.
 * @param {Object} itemData The data to use for updating.
 * @param {Function(?app.error.Abstract, Mongoose.Model=)} done callback.
 * @override
 */
Entity.prototype._update = function(query, itemData) {
  // stub to default for now until Mongoose is normalized
  return EntityCrudMongoose.prototype._update.call(this, query, itemData)
    .bind(this)
    .catch(this._normalizeError);
};

/**
 * Normalize errors comming from the db
 *
 * @param {Object} err Error as provided by the orm.
 * @return {Promise} A Promise.
 * @private
 * @throws {app.error.ErrorBase} always.
 */
Entity.prototype._normalizeError = function(err) {
  log.fine('_normalizeError() :: Error intercepted, code:', err.code, err.message);
  var error = new appError.Validation(err);
  switch(err.code) {
  case 11000:
    var items = err.err.match(/key error index:\s(.+)\.(\w+)\.\$([\w\_]+)\s/);
    // error.db = items[1];
    // error.collection = items[2];
    error.index = items[3];
    error.message = 'Duplicate record found';

    // now cleanup the error object
    delete error.err;
    delete error.code;
    delete error.n;
    delete error.connectionId;
    delete error.ok;

    break;
  case 11001:
    error.message = 'Duplicate record found';
    break;
  default:
    if (err.message === 'record not found') {
      error = new appError.Error('record not found');
    }

    if (err.type === 'ObjectId' && err.message.match(/Cast to ObjectId failed/)) {
      error.message = 'Attribute requires a proper id value';
    }
  }

  // check for mongoose specific validation errors
  if (err.name === 'ValidationError') {
    __.forOwn(err.errors, function(value) {
      error.errors.push(value);
    });
  }
  throw error;
};
