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

// console.log(notes)

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

// console.log(note)

// const filteredNotes = notes.filter(function (note, _index) {
//   return note.title.toLowerCase().includes('ne') || note.body.toLowerCase().includes('ne')
// })
// console.log(filteredNotes)

const findNotes = function (notes, query) {
  return notes.filter(function (note, _index) {
    const isTitleMatch =  note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
}

// console.log(findNotes(notes, 'NE'))

const sortNotes = function (notes) {
  return notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

console.log(sortNotes(notes))
