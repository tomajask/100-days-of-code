// Read existing notes from localStorage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')

  if (notesJSON !== null) {
    return JSON.parse(notesJSON)
  } else {
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
  const noteEl = document.createElement('div')
  const textEl = document.createElement('a')
  const button = document.createElement('button')
  const lastEdited = document.createElement('span')

  button.textContent = 'X'
  noteEl.appendChild(button)
  button.addEventListener('click', () => {
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

  document.querySelector('#notes').innerHTML = ''
  filteredNotes.forEach((note) => {
    const noteEl = generateNoteDOM(note)
    document.querySelector('#notes').appendChild(noteEl)
  })
}

// Generate the last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`
