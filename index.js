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
  global[method] = function (...args) {
    return originalFn.apply(null, patchArgs(args))
  }
  if (method === 'it') {
    global.it.only = function (...args) {
      return originalFn.only.apply(null, patchArgs(args))
    }
  }
}

module.exports = (() => ['it', 'beforeEach', 'afterEach', 'before', 'after'].map(patch))()
