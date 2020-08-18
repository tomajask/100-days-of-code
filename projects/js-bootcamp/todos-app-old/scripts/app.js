'use strict'

const todos = getSavedTodos()

const filters = {
  searchText: '',
  hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('input#search-todos').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('form#todo-form').addEventListener('submit', (e) => {
  e.preventDefault()

  const text = e.target.elements.text.value.trim()

  if (text.length > 0) {
    todos.push({
      id: uuidv4(),
      text,
      completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
  }
  e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})
