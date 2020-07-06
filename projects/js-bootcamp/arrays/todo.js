const todos = [{
  text: 'Mount the roof rack',
  completed: true
}, {
  text: 'Go shopping',
  completed: false
}, {
  text: 'Watch A on Netflix',
  completed: true
}, {
  text: 'Go swimming',
  completed: false
}, {
  text: 'Go for a walk',
  completed: true
}]

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (note, _index) {
    return note.text.toLowerCase() === todoText.toLowerCase()
  })
  if (index > -1 ) {
    todos.splice(index, 1)
  }
}

const getThingsToDo = function(todos) {
  return todos.filter(function (todo, _index) {
    return !todo.completed
  })
}

console.log(getThingsToDo(todos))
console.log()

const sortTodos = function(todos) {
  return todos.sort(function (a, b) {
    if (a.completed < b.completed) {
      return -1
    } else if (a.completed > b.completed) {
      return 1
    } else {
      return 0
    }
  })
}

console.log(sortTodos(todos))
