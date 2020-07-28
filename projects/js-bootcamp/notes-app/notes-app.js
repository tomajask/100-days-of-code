// DOM - Document Object Model
let notes = getSavedNotes()

const filters = {
  searchText: '',
  sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (event) {
  const id = uuidv4()
  const timestamp = moment().valueOf()
  notes.push({
    id:         id,
    createdAt:  timestamp,
    updatedAt:  timestamp,
    title:      '',
    body:       ''
  })
  saveNotes(notes)
  // renderNotes(notes, filters)
  location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
  filters.sortBy = e.target.value
  renderNotes(notes, filters)
})

window.addEventListener('storage', function(e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
  }
})
