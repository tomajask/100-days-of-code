// Global scope (convertFahrenheitToCelsius, temp)
  // Local scope (fahrenheit, celsius)

const convertFahrenheitToCelsius = function (fahrenheit) {
  const celsius = (fahrenheit - 32) * 5/9
  return celsius
}

temp = convertFahrenheitToCelsius(32)
console.log(temp)
console.log(convertFahrenheitToCelsius(68))
