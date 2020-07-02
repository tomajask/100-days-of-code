const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Portugal'
}, {
  title: 'Habits to work on',
  body: 'Exercising. Eating a bit better.'
}, {
  title: 'Office modification',
  body: 'Get a new seat'
}]

// console.log(notes.sort().reverse())

// console.log(notes.pop())
// notes.push('My new note')
// console.log(notes)

// console.log(notes.shift())
// console.log(notes)
// notes.unshift('My first note')
// console.log(notes)

// notes.splice(1, 1)

// console.log(notes)

// notes.splice(1, 0, 'This is a new second item')

console.log(notes)

// notes.forEach(function (item, index) {
//   console.log(index)
//   console.log(item)
// })

// Counting

// for (let count = 0; count <= 2; count++) {
//   console.log(count)
// }

// console.log()

// for (let count = 0; count < notes.length; count++) {
//   console.log(notes[count])
// }

// console.log(notes.indexOf({}))  // -1
// console.log({} === {})          // false
// const obj = {}
// const obj2 = obj
// console.log(obj === obj2)       // true

// const findNoteByTitle = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, _index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//   return notes[index]
// }

// const index = notes.findIndex(function (note, index) {
//   return note.title === 'Office modification'
// })

const findNoteByTitle = function (notes, noteTitle) {
  return notes.find(function (note, _index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

const note = findNoteByTitle(notes, 'office modification')

console.log(note)

