const _ = require('lodash')
let b = { a: 100, b: 200 }
let c = _.clone(b)
console.warn(c, 'abb');