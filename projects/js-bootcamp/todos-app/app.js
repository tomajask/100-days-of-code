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

const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed
})

const summaryItem = document.createElement('h3')
summaryItem.textContent = `You have ${incompleteTodos.length} todos left.`

const bodyElement = document.querySelector('div#notes-summary')
bodyElement.appendChild(summaryItem)

const renderTodos = function (todos, filters) {
  const todosElement = document.querySelector('div#todos')
  todosElement.innerHTML = ''
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  filteredTodos.forEach(function (todo) {
    const newElement = document.createElement('p')
    newElement.textContent = todo.text
    newElement.classList.add('todo')
    todosElement.appendChild(newElement)
  })
}

renderTodos(incompleteTodos, filters)

document.querySelector('button#add-todo').addEventListener('click', function(ev) {
  console.log(ev)
  console.log("You added a new todo!")
})

document.querySelector('input#new-todo').addEventListener('input', function(e) {
  console.log(e)
})

document.querySelector('input#search-todos').addEventListener('input', function(e) {
  filters.searchText = e.target.value
  renderTodos(incompleteTodos, filters)
})
