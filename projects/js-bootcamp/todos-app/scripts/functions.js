'use strict'

// Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos')
  try {
    return todosJSON ? JSON.parse(todosJSON) : []
  } catch (e) {
    return []
  }
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
  if (todo) {
    todo.completed = !todo.completed
  }
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
  const todosElement = document.querySelector('#todos')
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

  if (filteredTodos.length === 0) {
    const pEl = document.createElement('p')
    pEl.classList.add('empty-message')
    pEl.textContent = 'No todos to show.'
    todosElement.appendChild(pEl)
  }
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('label')
  const containerEl = document.createElement('div')
  const todoText = document.createElement('span')
  const checkbox = document.createElement('input')
  const button = document.createElement('button')

  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = todo.completed
  checkbox.addEventListener('change', (e) => {
    toggleTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  // Setup container
  todoEl.classList.add('list-item')
  containerEl.classList.add('list-item__container')
  todoEl.appendChild(containerEl)

  // Setup the remove button
  button.textContent = 'remove'
  button.classList.add('button', 'button--text')
  button.addEventListener('click', () => {
    removeTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  todoText.textContent = todo.text

  containerEl.appendChild(checkbox)
  containerEl.appendChild(todoText)
  todoEl.appendChild(button)

  return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summaryItem = document.createElement('h2')
  const plural = incompleteTodos.length === 1 ? '' : 's'
  summaryItem.textContent = `You have ${incompleteTodos.length} todo${plural} left.`
  summaryItem.classList.add('list-title')
  return summaryItem
}
