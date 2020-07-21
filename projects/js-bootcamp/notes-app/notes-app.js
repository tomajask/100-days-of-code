// DOM - Document Object Model
let notes = []

const filters = {
  searchText: ''
}

const notesJSON = localStorage.getItem('notes')
if (notesJSON !== null) {
  notes = JSON.parse(notesJSON)
}

const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  document.querySelector('#notes').innerHTML = ''
  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement('p')
    if (note.title.length > 0) {
      noteEl.textContent = note.title
    } else {
      noteEl.textContent = 'Unnamed note'
    }
    noteEl.classList.add("note")
    document.querySelector('#notes').appendChild(noteEl)
  })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (event) {
  notes.push({ title: '', body: ''})
  localStorage.setItem('notes', JSON.stringify(notes))
  renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
  console.log(e.target.value)
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
  console.log(e.target.value)
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
