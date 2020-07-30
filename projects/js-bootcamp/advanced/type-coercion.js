console.log('5' + 5) // 55 - string context
console.log('5' - 5) // 0  - number context

console.log(5 === 5)    // true
console.log('5' === 5)  // false
console.log('5' == 5)   // true

console.log(typeof 123)
console.log(typeof '123')
console.log(typeof({}))
console.log(typeof(undefined))
console.log(typeof(null))

const value = true + 12 // number context, `true` is 1, `false` is 0
console.log(`${typeof(value)}: ${value}`)
