// DOM - Document Object Model
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

const filters = {
  searchText: ''
}

const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  document.querySelector('#notes').innerHTML = ''
  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement('p')
    noteEl.textContent = note.title
    noteEl.classList.add("note")
    document.querySelector('#notes').appendChild(noteEl)
  })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (event) {
  // console.log(event)
  event.target.textContent = 'This button was clicked'
})

document.querySelector('#search-text').addEventListener('input', function(e) {
  console.log(e.target.value)
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#for-fun').addEventListener('change', function (e) {
  console.log(e.target.checked)
})










// // Query and remove
// const p = document.querySelector('p')
// // p.remove()

// // Query all and remove
// const ps = document.querySelectorAll('p')
// console.log(ps)

// ps.forEach(function (item, _index) {
//   // console.log(item.textContent)
//   item.textContent = '******'
//   // item.remove()
// })

// const newNote = document.createElement('p')
// newNote.textContent = 'This is a new element from JS.'

// document.querySelector('body').appendChild(newNote)
