let isRaining = true

isRaining = false

console.log(isRaining)

const isWindy = true

// isWindy = false -> TypeError: Assignment to constant variable.

console.log(isWindy)

// var name = "tom" -> It's functions scoped, not block scoped!

console.log(smth) // -> prints `undefined` -> declaration of the variable is hoisted to the beginning of the program
var smth = 10

// console.log(hello) // -> ReferenceError: Cannot access 'hello' before initialization
// let hello

blah = 10
console.log(blah) // -> print `10`
var blah
