const todos = []

const filters = {
  searchText: '',
  hideCompleted: false
}

const todosJSON = localStorage.getItem('todos')
if (todosJSON !== null) {
  todos = JSON.parse(todosJSON)
}

const renderTodos = function (todos, filters) {
  const todosElement = document.querySelector('div#todos')
  todosElement.innerHTML = ''

  const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
  })
  const filteredTodos = todos.filter(function (todo) {
    const matchingSearchText = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const shouldBeDisplayed = !(filters.hideCompleted && todo.completed)
    return matchingSearchText && shouldBeDisplayed
  })
  const summaryItem = document.createElement('h3')
  summaryItem.textContent = `You have ${incompleteTodos.length} todos left.`
  todosElement.appendChild(summaryItem)

  filteredTodos.forEach(function (todo) {
    const newElement = document.createElement('p')
    newElement.textContent = `Completed: ${todo.completed} | ${todo.text}`
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
    completed: false
  })
  localStorage.setItem('todos', JSON.stringify(todos))
  renderTodos(todos, filters)
  e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})
