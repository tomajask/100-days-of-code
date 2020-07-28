const square  = (num) => { return num ** 2 }
const square2 = (num) => num ** 2

// console.log(square(5))
console.log(square2(5))

const people = [{
  name: 'Andrew',
  age: 27
}, {
  name: 'Vikram',
  age: 31
}, {
  name: 'Jess',
  age: 22
}]

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

// const under30Long = people.filter(function (person) {
//   return person.age < 30
// })

const person = people.find((person) => person.age === 22)
console.log(person.name)
