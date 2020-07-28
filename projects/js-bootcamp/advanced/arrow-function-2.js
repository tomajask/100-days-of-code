const add = function () { // doesn't work for arrow functions
  return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))

const car = {
  color: 'red',
  getSummary: function () { // `this` is not bound in arrow functions
    return `The car is ${this.color}`
  },
  getSummaryShort() {
    return `The car is ${this.color}`
  }
}

console.log(car.getSummary())
console.log(car.getSummaryShort())
