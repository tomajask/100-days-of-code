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

const filters = {
  searchText: ''
}

const renderTodos = function (todos, filters) {
  const todosElement = document.querySelector('div#todos')
  todosElement.innerHTML = ''

  const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
  })
  const filteredTodos = incompleteTodos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  const summaryItem = document.createElement('h3')
  summaryItem.textContent = `You have ${incompleteTodos.length} todos left.`
  todosElement.appendChild(summaryItem)

  filteredTodos.forEach(function (todo) {
    const newElement = document.createElement('p')
    newElement.textContent = todo.text
    newElement.classList.add('todo')
    todosElement.appendChild(newElement)
  })
}

renderTodos(todos, filters)

document.querySelector('input#search-todos').addEventListener('input', function(e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('form#todo-form').addEventListener('submit', function (e) {
  e.preventDefault()
  todos.push({
    text: e.target.elements.text.value,
    comepleted: false
  })
  renderTodos(todos, filters)
  e.target.elements.text.value = ''
})
