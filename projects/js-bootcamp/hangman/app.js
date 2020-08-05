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

getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(puzzle)
  }
})


// // Making an HTTP request


// const countryCode = "PL"

// const req = new XMLHttpRequest()

// req.addEventListener('readystatechange', (e) => {
//   if (e.target.status === 200 & e.target.readyState === 4) {
//     const data = JSON.parse(e.target.responseText)
//     const country = data.find((item) => item.alpha2Code === countryCode)
//     console.log(country.name)
//   } else if (e.target.readyState === 4) {
//     console.log('An error has taken place')
//   }
// })

// req.open('GET', 'http://restcountries.eu/rest/v2/all')
// req.send()
