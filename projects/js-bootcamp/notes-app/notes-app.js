// DOM - Document Object Model
const notes = getSavedNotes()

const filters = {
  searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (event) {
  notes.push({
    id: uuidv4(),
    title: '',
    body: ''
  })
  saveNotes(notes)
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
