'use strict'

const isGenerator = require('is-generator').fn
const thunk = require('thunks')()

const patchArgs = (args) => {
  let testFunc = args.pop()
  if (isGenerator(testFunc)) {
    args.push(function (done) {
      thunk(testFunc.bind(this))(done)
    })
  } else {
    args.push(testFunc)
  }

  return args
}

const patch = (method) => {
  const originalFn = global[method]
  global[method] = function () {
    // function(...args) not support node < 6 ,here use [].slice.call(arguments)
    return originalFn.apply(null, patchArgs([].slice.call(arguments)))
  }
  if (method === 'it') {
    global.it.only = function () {
      return originalFn.only.apply(null, patchArgs([].slice.call(arguments)))
    }
  }
}

module.exports = (() => ['it', 'beforeEach', 'afterEach', 'before', 'after'].map(patch))()
