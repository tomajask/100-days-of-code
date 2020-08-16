'use strict'

// Read existing notes from localStorage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')
  try {
    return notesJSON !== null ? JSON.parse(notesJSON) : []
  } catch (e) {
    return []
  }
}

// Save notes to localStorage
const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove note from localStorage
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id)
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}

// Generate DOM structure for a note
const generateNoteDOM = (note) => {
  const noteEl = document.createElement('a')
  const textEl = document.createElement('p')
  const statusEl = document.createElement('p')

  if (note.title.length > 0) {
    textEl.textContent = note.title
  } else {
    textEl.textContent = 'Unnamed note'
  }
  textEl.classList.add('list-item__title')
  noteEl.appendChild(textEl)


  // Setup the link
  noteEl.setAttribute('href', `/edit.html#${note.id}`)
  noteEl.classList.add('list-item')

  // Setup status message
  statusEl.textContent = generateLastEdited(note.updatedAt)
  noteEl.classList.add('list-item__subtitle')
  noteEl.appendChild(statusEl)

  return noteEl
}

// Sort notes by one of three ways
const sortNotes = (notes, sortBy) => {
  switch (sortBy) {
    case 'byEdited':
      return notes.sort((a, b) => b.updatedAt - a.updatedAt)
      break
    case 'byCreated':
      return notes.sort((a, b) => b.createdAt - a.createdAt)
      break
    case 'alphabetically':
      return notes.sort((a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1
        } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1
        } else {
          return 0
        }
      })
      break
    default:
      return notes
  }
}

// Render application notes
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy)
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

  const notesEl = document.querySelector('#notes')
  notesEl.innerHTML = ''

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteEl = generateNoteDOM(note)
      notesEl.appendChild(noteEl)
    })
  } else {
    const emptyMessage = document.createElement('p')
    emptyMessage.textContent = 'No notes to show.'
    emptyMessage.classList.add('empty-message')
    notesEl.appendChild(emptyMessage)
  }

}

// Generate the last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`
