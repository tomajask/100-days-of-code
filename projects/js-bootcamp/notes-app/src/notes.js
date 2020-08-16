import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

let notes = []

// Read existing notes from localStorage
const loadNotes = () => {
  const notesJSON = localStorage.getItem('notes')
  try {
    return notesJSON !== null ? JSON.parse(notesJSON) : []
  } catch (e) {
    return []
  }
}

// Save notes to localStorage
const saveNotes = () => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Expose notes from module
const getNotes = () => notes

// Save new note
const createNote = () => {
  const id = uuidv4()
  const timestamp = moment().valueOf()

  notes.push({
    id:         id,
    createdAt:  timestamp,
    updatedAt:  timestamp,
    title:      '',
    body:       ''
  })
  saveNotes()

  return id
}

// Remove note from localStorage
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id)
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
    saveNotes()
  }
}

// Sort notes by one of three ways
const sortNotes = (sortBy) => {
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

// Update the note
const updateNote = (id, updates) => {
  const note = notes.find((note) => note.id === id)

  if (!note) {
    return
  }

  if (typeof updates.title === 'string') {
    note.title = updates.title
    note.updatedAt = moment().valueOf()
  }
  if (typeof updates.body === 'string') {
    note.body = updates.body
    note.updatedAt = moment().valueOf()
  }

  saveNotes()
  return note
}


notes = loadNotes()

export { getNotes, createNote, removeNote, sortNotes, updateNote }
