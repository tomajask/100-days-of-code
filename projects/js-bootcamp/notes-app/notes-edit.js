const titleInput = document.querySelector('#note-title')
const bodyInput = document.querySelector('#note-body')
const dateElement = document.querySelector('#last-edited')

const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note) {
  return note.id === noteId
})

if (note === undefined) {
  location.assign('/index.html')
}

titleInput.value = note.title
bodyInput.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

titleInput.addEventListener('change', function(e) {
  note.title = e.target.value
  note.updatedAt = moment().valueOf()
  dateElement.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

bodyInput.addEventListener('change', function(e) {
  note.body = e.target.value
  note.updatedAt = moment().valueOf()
  dateElement.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

document.querySelector('#remove-note').addEventListener('click', function(_e) {
  removeNote(noteId)
  saveNotes(notes)
  location.assign('/index.html')
})

// It fires for other tabs, not the current tab.
window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    note = notes.find(function (note) {
      return note.id === noteId
    })

    if (note === undefined) {
      location.assign('/index.html')
    }

    titleInput.value = note.title
    bodyInput.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)
  }
})
