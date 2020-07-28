// Read existing notes from localStorage
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem('notes')

  if (notesJSON !== null) {
    return JSON.parse(notesJSON)
  } else {
    return []
  }
}

// Save notes to localStorage
const saveNotes = function (notes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove note from localStorage
const removeNote = function (id) {
  const noteIndex = notes.findIndex(function (note) {
    return note.id === id
  })
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}

// Generate DOM structure for a note
const generateNoteDOM = function (note) {
  const noteEl = document.createElement('div')
  const textEl = document.createElement('a')
  const button = document.createElement('button')
  const lastEdited = document.createElement('span')

  button.textContent = 'X'
  noteEl.appendChild(button)
  button.addEventListener('click', function(_e) {
    removeNote(note.id)
    saveNotes(notes)
    renderNotes(notes, filters)
  })

  if (note.title.length > 0) {
    textEl.textContent = note.title
  } else {
    textEl.textContent = 'Unnamed note'
  }
  textEl.setAttribute('href', `/edit.html#${note.id}`)
  noteEl.classList.add("note")
  noteEl.appendChild(textEl)

  lastEdited.textContent = generateLastEdited(note.updatedAt)
  noteEl.appendChild(lastEdited)

  return noteEl
}

// Sort notes by one of three ways
const sortNotes = function (notes, sortBy) {
  switch (sortBy) {
    case 'byEdited':
      return notes.sort((a, b) => b.updatedAt - a.updatedAt)
      break
    case 'byCreated':
      return notes.sort((a, b) => b.createdAt - a.createdAt)
      break
    case 'alphabetical':
      return notes // TODO:
      break
    default:
      return notes
  }
}

// Render application notes
const renderNotes = function(notes, filters) {
  notes = sortNotes(notes, filters.sortBy)
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  document.querySelector('#notes').innerHTML = ''
  filteredNotes.forEach(function (note) {
    const noteEl = generateNoteDOM(note)
    document.querySelector('#notes').appendChild(noteEl)
  })
}

// Generate the last edited message
const generateLastEdited = function(timestamp) {
  return `Last edited ${moment(timestamp).fromNow()}`
}
