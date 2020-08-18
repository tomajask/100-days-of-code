import { getFilters } from './filters'
import { getTodos, removeTodo, saveTodos, toggleTodo } from './todos'

const renderTodos = () => {
  const todos = getTodos()
  const { searchText, hideCompleted } = getFilters()
  const todosElement = document.querySelector('#todos')
  todosElement.innerHTML = ''

  const incompleteTodos = todos.filter((todo) => !todo.completed)

  const filteredTodos = todos.filter((todo) => {
    const matchingSearchText = todo.text.toLowerCase().includes(searchText.toLowerCase())
    const shouldBeDisplayed = !(hideCompleted && todo.completed)
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
    saveTodos()
    renderTodos()
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
    saveTodos()
    renderTodos()
  })

  todoText.textContent = todo.text

  containerEl.appendChild(checkbox)
  containerEl.appendChild(todoText)
  todoEl.appendChild(button)

  return todoEl
}

const generateSummaryDOM = (incompleteTodos) => {
  const summaryItem = document.createElement('h2')
  const plural = incompleteTodos.length === 1 ? '' : 's'
  summaryItem.textContent = `You have ${incompleteTodos.length} todo${plural} left.`
  summaryItem.classList.add('list-title')
  return summaryItem
}


export { renderTodos }
