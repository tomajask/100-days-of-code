const titleInput = document.querySelector('#note-title')
const bodyInput = document.querySelector('#note-body')

const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note) {
  return note.id === noteId
})

if (note === undefined) {
  location.assign('/index.html')
}

titleInput.value = note.title
bodyInput.value = note.body

titleInput.addEventListener('change', function(e) {
  note.title = e.target.value
  saveNotes(notes)
})

bodyInput.addEventListener('change', function(e) {
  note.body = e.target.value
  saveNotes(notes)
})

document.querySelector('#remove-note').addEventListener('click', function(_e) {
  removeNote(noteId)
  saveNotes(notes)
  location.assign('/index.html')
})
