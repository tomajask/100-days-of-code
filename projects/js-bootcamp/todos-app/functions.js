// Fetch existing todos from localStorage
const getSavedTodos = function () {
  const todosJSON = localStorage.getItem('todos')
  if (todosJSON !== null) {
    return JSON.parse(todosJSON)
  } else {
    return []
  }
}

// Save todos to localstorage
const saveTodos = function (todos) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
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
  todosElement.appendChild(generateSummaryDOM(incompleteTodos))

  filteredTodos.forEach(function (todo) {
    todosElement.appendChild(generateTodoDOM(todo))
  })
}

// Get the DOM elements for an individual note
const generateTodoDOM = function(todo) {
  const newElement = document.createElement('p')
  newElement.textContent = `Completed: ${todo.completed} | ${todo.text}`
  newElement.classList.add('todo')
  return newElement
}

// Get the DOM elements for list summary
const generateSummaryDOM = function(incompleteTodos) {
  const summaryItem = document.createElement('h3')
  summaryItem.textContent = `You have ${incompleteTodos.length} todos left.`
  return summaryItem
}
