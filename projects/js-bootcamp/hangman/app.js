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

const game1 = new Hangman('Cat', 2)
game1.printRemainingGuesses()
game1.printPuzzle()

window.addEventListener('keypress', function(e) {
  if (game1.status === 'playing') {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    game1.calculateStatus()
    game1.printRemainingGuesses()
    game1.printPuzzle()
    console.log(`Status: ${game1.status}`)
  }
})
