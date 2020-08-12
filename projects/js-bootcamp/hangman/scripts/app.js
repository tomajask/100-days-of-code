'use strict'
// Primitive value: string, number, boolean, undefined, null

// Object:    myObject    --> Object.prototype    --> null
// Array:     myArray     --> Array.prototype     --> Object.prototype  --> null
// Function:  myFunction  --> Function.prototype  --> Object.prototype  --> null
// String:    myString    --> String.prototype    --> Object.prototype  --> null
// Number:    myNumber    --> Number.prototype    --> Object.prototype  --> null
// Boolean:   myBoolean   --> Boolean.prototype   --> Object.prototype  --> null

const guessesEl = document.querySelector('#guesses')
const puzzleEl = document.querySelector('#puzzle')
let game1

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  render()
  console.log(`Status: ${game1.status}`)
})

const render = () => {
  puzzleEl.innerHTML = ''
  guessesEl.textContent = game1.statusMessage

  game1.puzzle.split('').forEach((char) => {
    const letterEl = document.createElement('span')
    letterEl.textContent = char
    puzzleEl.appendChild(letterEl)
  })
}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game1 = new Hangman(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// Async execution
// getPuzzle('3').then((puzzle) => {
//   console.log(puzzle)
// }).catch((err) => {
//   console.log(err)
// })

// getCurrentCountry().then((data) => {
//   console.log(`You are currently in ${data.location.city}, ${data.location.region}, ${data.country.name}`)
// }).catch((err) => {
//   console.log(err)
// })
