/**
 * @fileOverview Base API Surface tests.
 */
var chai = require('chai');
var expect = chai.expect;

var base = require('../..');

describe('Base API Surface', function() {
  it('should export properly', function(){
    expect(base.EntityBase).to.be.a('function');
    expect(base.ModelBase).to.be.a('function');
    expect(base.ControllerBase).to.be.a('function');
    expect(base.ModelRedisBase).to.be.a('function');
    expect(base.ModelMongoBase).to.be.a('function');
    expect(base.ModelPostgresBase).to.be.a('function');
    expect(base.MiddlewareBase).to.be.a('function');
    expect(base.options).to.be.a('function');
  });
});
