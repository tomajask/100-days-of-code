const todos = [
  'Mount the roof rack',
  'Go shopping',
  'Watch A on Netflix',
  'Go swimming',
  'Go for a walk'
]

console.log(`You have ${todos.length} todos.`)
console.log(`TODO: ${todos[todos.length - 1]}`)

todos.splice(2, 1)                  // remove the third item
todos.push('Learn some Javacript')  // add new last item
todos.shift()                       // remove the first item

todos.forEach(function (item, index) { // callback function passed to the forEach function
  console.log(`${index + 1}. ${item}`)
})

