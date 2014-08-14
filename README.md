# nodeON-base

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

**[[⬆]](#TOC)**

### <a name='toApi'>Getting an API Safe verison</a>

> ### errInstance.toApi()
>
> *Returns* `Object` A sanitized object.

Clones the error object and strips it of all the `Error` getters (like `stack`) and the following attributes:
    
    * `srcError`

```js
var appErr = require('nodeon-error');

var error = new appErr.Error();

console.log(error.toApi());
```

## Release History

- **v0.0.1**, *TBD*
    - Big Bang

## License

Copyright (c) 2014 Thanasis Polychronakis. Licensed under the MIT license.
