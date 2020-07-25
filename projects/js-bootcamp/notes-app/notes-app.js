// DOM - Document Object Model
let notes = getSavedNotes()

const filters = {
  searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (event) {
  const note = {
    id: uuidv4(),
    title: '',
    body: ''
  }
  notes.push(note)
  saveNotes(notes)
  // renderNotes(notes, filters)
  location.assign(`/edit.html#${note.id}`)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
  console.log(e.target.value)
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
  console.log(e.target.value)
})

window.addEventListener('storage', function(e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
  }
})

const date = moment()
date.year(1970).month("Jan").date(1).hour(1)
console.log(date.format("MMM D, YYYY"))
