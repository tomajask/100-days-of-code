const todos = getSavedTodos()

const filters = {
  searchText: '',
  hideCompleted: false
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
  saveTodos(todos)
  renderTodos(todos, filters)
  e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})
