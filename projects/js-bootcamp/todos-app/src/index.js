import { setFilters } from './filters'
import { renderTodos } from './views'
import { createTodo } from './todos'

renderTodos()

document.querySelector('input#search-todos').addEventListener('input', (e) => {
  setFilters({
    searchText: e.target.value
  })
  renderTodos()
})

document.querySelector('form#todo-form').addEventListener('submit', (e) => {
  e.preventDefault()

  const text = e.target.elements.text.value.trim()

  if (text.length > 0) {
    createTodo(text)
  }
  e.target.elements.text.value = ''
  renderTodos()
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
  setFilters({
    hideCompleted: e.target.checked
  })
  renderTodos()
})

window.addEventListener('storage', (e) => {
  if (e.key === 'todos') {
    renderTodos()
  }
})
