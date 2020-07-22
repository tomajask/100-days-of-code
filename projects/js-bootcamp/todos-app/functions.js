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

// Remove a todo from localStorage
const removeTodo = function (id) {
  const todoIndex = todos.findIndex(function (todo) {
    return todo.id === id
  })
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

// Toggle todo's checkbox
const toggleTodo = function (id) {
  const todo = todos.find(function (todo) {
    return todo.id === id
  })
  if (todo !== undefined) {
    todo.completed = !todo.completed
  }
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
  const newElement = document.createElement('div')
  const textEl = document.createElement('span')

  const checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = todo.completed
  checkbox.addEventListener('change', function(e) {
    toggleTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  const button = document.createElement('button')
  button.textContent = 'X'
  button.addEventListener('click', function(_e) {
    removeTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  textEl.textContent = `Completed: ${todo.completed} | ${todo.text}`

  newElement.appendChild(checkbox)
  newElement.appendChild(textEl)
  newElement.appendChild(button)
  return newElement
}

// Get the DOM elements for list summary
const generateSummaryDOM = function(incompleteTodos) {
  const summaryItem = document.createElement('h3')
  summaryItem.textContent = `You have ${incompleteTodos.length} todos left.`
  return summaryItem
}
