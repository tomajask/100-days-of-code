// Undefined for variable
let name

if (name === undefined) {
  console.log("Provide the name")
} else {
  console.log("Name is " + name)
}

console.log(name)

// const firstName -> SyntaxError: Missing initializer in const declaration

// Undefined for function argument

const square = function (num) {
  console.log(num)
}

square(2)
square() // -> undefined

// Undefined as function return default value

const result = square()
console.log(result)


let age = 30
age = null
console.log(age)

// Undefined - never defined
// Null - defined but cleared on the way
