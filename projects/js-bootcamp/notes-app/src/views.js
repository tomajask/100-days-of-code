import moment from 'moment'
import { getFilters } from './filters'
import { getNotes, sortNotes } from './notes'

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


// Render application notes
const renderNotes = () => {
  const notesEl = document.querySelector('#notes')
  const filters = getFilters()
  const notes = sortNotes(filters.sortBy)
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

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

// Initialize Edit Page
const initializeEditPage = (noteId) => {
  const titleInput = document.querySelector('#note-title')
  const bodyInput = document.querySelector('#note-body')
  const dateElement = document.querySelector('#last-edited')

  const notes = getNotes()
  const note = notes.find((note) => note.id === noteId)

  if (!note) {
    location.assign('/index.html')
  }

  titleInput.value = note.title
  bodyInput.value = note.body
  dateElement.textContent = generateLastEdited(note.updatedAt)
}

// Generate the last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`

export { generateNoteDOM, renderNotes, generateLastEdited, initializeEditPage }
