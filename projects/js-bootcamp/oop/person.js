// Prototypal Inheritance

const Person = function (firstName, lastName, age, likes = []) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.likes = likes
}

Person.prototype.getBio = function () {
  let bio = `${this.firstName} is ${this.age}.`

  this.likes.forEach((like) => {
    bio += ` ${this.firstName} likes ${like}.`
  })

  return bio
}
Person.prototype.setName = function (fullName) {
  // Destructuring assignment - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  [this.firstName, this.lastName] = fullName.split(' ')
}
console.log(Person.prototype)


const me = new Person('Thomas', 'Jaskiewicz', 29, ['Coding', 'Plants'])

// me.getBio = function () {
//   return 'This is fake!'
// }

me.setName('Alexis Turner')
console.log(me)
console.log(me.getBio())

const person2 = new Person('Andrew', 'Mead', 27)
console.log(person2.getBio())
