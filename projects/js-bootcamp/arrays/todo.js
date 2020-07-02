const todos = [{
  text: 'Mount the roof rack',
  completed: false
}, {
  text: 'Go shopping',
  completed: false
}, {
  text: 'Watch A on Netflix',
  completed: false
}, {
  text: 'Go swimming',
  completed: false
}, {
  text: 'Go for a walk',
  completed: false
}]

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (note, _index) {
    return note.text.toLowerCase() === todoText.toLowerCase()
  })
  if (index > -1 ) {
    todos.splice(index, 1)
  }
}

console.log(todos)

deleteTodo(todos, 'go shopping')

console.log(todos)
