/*
 * nodeON-base
 * The nodeON Base modules to inherit from.
 * https://github.com/thanpolas/nodeON-base
 *
 * Copyright (c) 2014 Thanasis Polychronakis
 * Licensed under the MIT license.
 */

var EntityBase = require('./entity-base');
var ModelBase = require('./model-base');
var ControllerBase = require('./controller-base');
var ModelRedisBase = require('./model-redis-base');
var ModelMongoBase = require('./model-mongo-base');
var ModelPostgresBase = require('./model-postgres-base');

var config = require('./config');

/**
 * @fileOverview Bootstrap module, exports all items.
 */

var base = module.exports = {
  EntityBase: EntityBase,
  ModelBase: ModelBase,
  ControllerBase: ControllerBase,
  ModelRedisBase: ModelRedisBase,
  ModelMongoBase: ModelMongoBase,
  ModelPostgresBase: ModelPostgresBase,
};

base.options = config.options;
