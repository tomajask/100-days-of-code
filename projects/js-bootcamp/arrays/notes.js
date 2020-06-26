const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.sort().reverse())

// console.log(notes.pop())
// notes.push('My new note')
// console.log(notes)

// console.log(notes.shift())
// console.log(notes)
// notes.unshift('My first note')
// console.log(notes)

notes.splice(1, 1)

console.log(notes)

notes.splice(1, 0, 'This is a new second item')

console.log(notes)

notes.forEach(function (item, index) {
  console.log(index)
  console.log(item)
})
