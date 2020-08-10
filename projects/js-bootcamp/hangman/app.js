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
}).catch((err) => {
  console.log(err)
})

getCurrentCountry().then((data) => {
  console.log(`You are currently in ${data.location.city}, ${data.location.region}, ${data.country.name}`)
}).catch((err) => {
  console.log(err)
})

// getLocation().then((location) => {
//   return getCountry(location.country).then((country) => {
//     console.log(`You are currently in ${location.city}, ${location.region}, ${country.name}`)
//   })
// }).catch((err) => {
//   console.log(err)
// })


// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//   if (response.status === 200) {
//     return response.json()
//   } else {
//     throw new Error('Unable to fetch puzzle')
//   }
// }).then((data) => {
//   console.log(data.puzzle)
// }).catch((err) => {
//   console.log(err)
// })
