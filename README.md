# mocha-parallel-generators
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads][downloads-image]][downloads-url]

- executes each of your test files in a separate process  
- maintain the output structure of mocha
- support thunk/generator/promise

It is based on [Co Mocha](https://github.com/blakeembrey/co-mocha) and [Mocha Parallel Tests](https://github.com/mocha-parallel/mocha-parallel-tests)



## Installation

```
npm install --save-dev mocha mocha-parallel-tests mocha-parallel-generators
```



## Usage
### In your editor:
```js
require('mocha-parallel-generators'); // just require this module
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});
```

### CLI
```
./node_modules/mocha-parallel-tests/dist/bin/cli.js test/test.js 
```

> see more [Mocha Parallel Tests CLI](https://github.com/mocha-parallel/mocha-parallel-tests/blob/master/README.md#cli)




## Comparison with `Co Mocha`
[Co Mocha](https://github.com/blakeembrey/co-mocha) is a mocha patch which allows you to run genarator-style mocha test.But it doesn't support thunk-style mocha test and it only yield a function, promise, generator, array, or object, not constant such as `yield "123"` or `yield 123`.This module can support these and it is base on [thunks](https://github.com/thunks/thunks).



[npm-url]: https://npmjs.org/package/mocha-parallel-generators
[npm-image]: http://img.shields.io/npm/v/mocha-parallel-generators.svg

[travis-url]: https://travis-ci.org/gaohuifeng/mocha-parallel-generators
[travis-image]: https://travis-ci.org/gaohuifeng/mocha-parallel-generators.svg?branch=master

[downloads-url]: https://npmjs.org/package/mocha-parallel-generators
[downloads-image]: https://img.shields.io/github/downloads/atom/atom/latest/total.svg

