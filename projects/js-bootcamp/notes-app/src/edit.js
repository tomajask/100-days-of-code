import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

const titleInput = document.querySelector('#note-title')
const bodyInput = document.querySelector('#note-body')
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)

titleInput.addEventListener('change', (e) => {
  const note = updateNote(noteId, {
    title: e.target.value
  })
  dateElement.textContent = generateLastEdited(note.updatedAt)
})

bodyInput.addEventListener('change', (e) => {
  const note = updateNote(noteId, {
    body: e.target.value
  })
  dateElement.textContent = generateLastEdited(note.updatedAt)
})

document.querySelector('#remove-note').addEventListener('click', () => {
  removeNote(noteId)
  location.assign('/index.html')
})

document.querySelector('#save-note').addEventListener('click', () => {
  location.assign('/index.html')
})

// It fires for other tabs, not the current tab.
window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    initializeEditPage(noteId)
  }
})
