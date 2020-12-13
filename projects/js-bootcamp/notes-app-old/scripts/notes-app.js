'use strict'

// DOM - Document Object Model
let notes = getSavedNotes()

const filters = {
  searchText: '',
  sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
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

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
  filters.sortBy = e.target.value
  renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
  }
})