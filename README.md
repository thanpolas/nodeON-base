# nodeON Base

> The nodeON Base modules to inherit from.

[![Build Status](https://secure.travis-ci.org/thanpolas/nodeON-base.png?branch=master)](http://travis-ci.org/thanpolas/nodeON-base)


## Install

Install the module using NPM:

```
npm install nodeon-base --save
```

## <a name='TOC'>Table of Contents</a>

1. [API](#api)

## API

Constructors and methods exposed:

* `base.EntityBase` Base Ctor for Entities.
* `base.ControllerBase` Base Ctor for Controllers.
* `base.ModelBase` Base Ctor for Models.
* `base.ModelRedisBase` Base Ctor for Redis Model, make sure to define options.
* `base.ModelMongoBase` Base Ctor for Mongo Models using Mongoose.
* `base.ModelPostgresBase` Base Ctor for Postgres Models using Sequelize.
* `base.MiddlewareBase` Base Ctor for Middleware.
* `base.options(opts)` Look at [Available Options](#available-options).

### Available Options

`base.options(opts)` Accepts the following key value pairs:

* `redis` And Object containing:
    * `namespace` **string** The namespace to prepend all keys with.
    * `port` **string** Connection port.
    * `host` **string** Hostname to connect to.
    * `pass` **string** Password to use.
    * `options` **Object** Options to pass to the redis client.
* `isHeroku` **boolean** Set to true if environment is Heroku.
* `errorName` **string** How to sign all generated error names, this is a prefix.

**[[⬆]](#TOC)**

## TODO

* Check on logging facilities and how they'll pipe.

## Release History

- **v0.2.2**, *16 Dec 2014*
    - Better handling for objectId type of errors.
- **v0.2.0**, *16 Dec 2014*
    - Upgraded all packages to latest, with the intend to get the `nodeon-error` 0.2.x series.
- **v0.1.9**, *09 Dec 2014*
    - Handle 'record not found' mongoose error cases.
    - Better handling of Mongoose duplicate errors.
        - Augmented with which is the offending index.
    - Now throws the original Error vs the "toApi()" version so Crude can handle properly.
    - Accepts the `errorName` config parameter for signing generated errors.
- **v0.1.6**, *31 Oct 2014*
    - Fixed config options propagation.
- **v0.1.4**, *12 Oct 2014*
    - Added method `show404()` on Controller base to show a 404 page depending on the accepts request header.
- **v0.1.3**, *15 Aug 2014*
    - Big Bang

## License

Copyright (c) 2014 Thanasis Polychronakis. Licensed under the MIT license.
