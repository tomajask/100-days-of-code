// Prototypal Inheritance

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
  }
  setName(fullName) {
    // Destructuring assignment - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    [this.firstName, this.lastName] = fullName.split(' ')
  }
}
const myPerson = new Person('Thomas', 'Jaskiewicz', 29, ['Cycling'])
console.log(myPerson)
console.log(myPerson.getBio())

myPerson.setName('Andrew Mead')
console.log(myPerson)
console.log(myPerson.getBio())
