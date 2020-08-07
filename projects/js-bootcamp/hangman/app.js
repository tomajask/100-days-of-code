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

const game1 = new Hangman('New Jersey', 4)
guessesEl.textContent = game1.statusMessage
puzzleEl.textContent = game1.puzzle

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  guessesEl.textContent = game1.statusMessage
  puzzleEl.textContent = game1.puzzle
  console.log(`Status: ${game1.status}`)
})

// Async execution
getPuzzle('3').then((puzzle) => {
  console.log(puzzle)
}, (err) => {
  console.log(err)
})

getCountry('PL').then((country) => {
  console.log(country.name)
}, (err) => {
  console.log(error)
})
