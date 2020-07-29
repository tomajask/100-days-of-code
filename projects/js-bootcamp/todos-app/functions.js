// Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos')
  return todosJSON !== null ? JSON.parse(todosJSON) : []
}

// Save todos to localstorage
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove a todo from localStorage
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id)
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

// Toggle todo's checkbox
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id)
  if (todo !== undefined) {
    todo.completed = !todo.completed
  }
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
  const todosElement = document.querySelector('div#todos')
  todosElement.innerHTML = ''

  const incompleteTodos = todos.filter((todo) => !todo.completed)

  const filteredTodos = todos.filter((todo) => {
    const matchingSearchText = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const shouldBeDisplayed = !(filters.hideCompleted && todo.completed)
    return matchingSearchText && shouldBeDisplayed
  })
  todosElement.appendChild(generateSummaryDOM(incompleteTodos))

  filteredTodos.forEach((todo) => {
    todosElement.appendChild(generateTodoDOM(todo))
  })
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
  const newElement = document.createElement('div')
  const textEl = document.createElement('span')

  const checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = todo.completed
  checkbox.addEventListener('change', (e) => {
    toggleTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  const button = document.createElement('button')
  button.textContent = 'X'
  button.addEventListener('click', () => {
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
const generateSummaryDOM = (incompleteTodos) => {
  const summaryItem = document.createElement('h3')
  summaryItem.textContent = `You have ${incompleteTodos.length} todos left.`
  return summaryItem
}
