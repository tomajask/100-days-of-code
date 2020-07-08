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

const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed
})

const summaryItem = document.createElement('h3')
summaryItem.textContent = `You have ${incompleteTodos.length} todos left.`

const bodyElement = document.querySelector('body')
bodyElement.appendChild(summaryItem)

incompleteTodos.forEach(function (item) {
  const newElement = document.createElement('p')
  newElement.textContent = item.text
  bodyElement.appendChild(newElement)
})

document.querySelector('button').addEventListener('click', function(ev) {
  console.log(ev)
  console.log("You added a new todo!")
})

// const todoItems = document.querySelectorAll('p')

// todoItems.forEach(function (item, _index) {
//   if (item.textContent.includes('minima')) {
//     item.remove()
//   }
// })

