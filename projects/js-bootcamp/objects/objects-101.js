const myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

console.log(myBook)
console.log(myBook.author)
console.log(myBook.pageCount)
console.log(myBook.title)

myBook.title = 'Animal Farm'

console.log(myBook)

const person = {
  name: 'Kubuś Puchatek',
  age: 150,
  location: 'Forest'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age += 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
