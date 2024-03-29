import { v4 as uuidv4 } from 'uuid'

let todos = []

const loadTodos = () => {
  const todosJSON = localStorage.getItem('todos')
  try {
    todos = todosJSON ? JSON.parse(todosJSON) : []
  } catch (e) {
    todos = []
  }
}

const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodos = () => todos

const createTodo = (text) => {
  todos.push({
    id: uuidv4(),
    text,
    completed: false
  })
  saveTodos()
}

const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id)
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
}

loadTodos()

export { loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo }
