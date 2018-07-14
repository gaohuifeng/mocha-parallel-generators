# mocha-parallel-generators

- executes each of your test files in a separate process  
- maintain the output structure of mocha
- support thunk/generator/promise

It is based on [Co Mocha](https://github.com/blakeembrey/co-mocha) and [Mocha Parallel Tests](https://github.com/mocha-parallel/mocha-parallel-tests)



## Installation

```
npm install --save-dev mocha-parallel-generators
npm install --save-dev mocha mocha-parallel-tests

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
