// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

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
  set fullName(fullName) {
    // Destructuring assignment - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    [this.firstName, this.lastName] = fullName.split(' ')
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes)
    this.position = position
  }

  getBio() {
    return `${this.fullName} is a ${this.position}.`
  }

  getYearsLeft() {
    return 65 - this.age
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes)
    this.grade = grade
  }

  getBio() {
    const status = this.grade >= 70 ? 'passing' : 'failing'
    return `${this.firstName} is ${status} the course!`
  }

  updateGrade(change) {
    this.grade += change
  }
}

const student = new Employee('Rocky', 'Balboa', 49, 'Fighter')
student.fullName = 'Clancey Turner'
console.log(student.getBio())


// const student = new Student('Rocky', 'Balboa', 23, 90)
// student.fullName = 'Clancey Turner'
// console.log(student.getBio())
// student.updateGrade(-40)
// console.log(student.getBio())





// const myPerson = new Employee('Andrew', 'Mead', 29, 'Triathlete', ['Cycling'])
// console.log(myPerson)
// // console.log(myPerson.getBio())

// myPerson.setName('Thomas Jaskiewicz')
// console.log(myPerson)
// console.log(myPerson.getBio())
// console.log(myPerson.getYearsLeft())

// const person = new Person('Clancey', 'Turner', 51)
// console.log()
// console.log(person)
// console.log(myPerson.getBio())
