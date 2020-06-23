
const greetUser = function () {
  console.log("Welcome User!")
}

greetUser()
greetUser()
greetUser()

const square = function (num) {
  return num ** 2
}

const value = square(2)
const otherValue = square(10)
console.log(value)
console.log(otherValue)

const convertFahrenheitToCelsius = function (valueInFahrenheit) {
  return (valueInFahrenheit - 32) * 5/9
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))

// convertFahrenheitToCelsius2 = (temp) => (temp - 32) * 5/9

// console.log(
//   convertFahrenheitToCelsius2(32)
// )
