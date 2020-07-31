'use strict'

const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('')
  this.guessedLetters = [' ']
  this.remainingGuesses = remainingGuesses
}

Hangman.prototype.getPuzzle = function () {
  const puzzle = this.word.map((letter) => this.guessedLetters.includes(letter) ? letter : '*')
  return puzzle.join('')
}

const game1 = new Hangman('Hangman', 3)
const game2 = new Hangman('New Jersey', 4)

console.log(game1.getPuzzle())    // *******
console.log(game2.getPuzzle())    // *** ******

// Add one guessed letter
game1.guessedLetters.push('n')
game2.guessedLetters.push('e')

console.log(game1.getPuzzle())    // **n***n
console.log(game2.getPuzzle())    // *e* *e**e*
