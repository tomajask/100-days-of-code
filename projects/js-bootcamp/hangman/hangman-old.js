'use strict'

const Hangman = function (word, remainingGuesses) {
  this.status = 'playing'
  this.word = word.toLowerCase().split('')
  this.guessedLetters = [' ']
  this.remainingGuesses = remainingGuesses
}

Hangman.prototype.getPuzzle = function () {
  const puzzle = this.word.map((letter) => this.guessedLetters.includes(letter) ? letter : '*')
  return puzzle.join('')
}

Hangman.prototype.makeGuess = function (letter) {
  letter = letter.toLowerCase()

  if (this.word.includes(letter)) {
    if (!this.guessedLetters.includes(letter)) {
      this.guessedLetters.push(letter)
    }
  } else {
    this.remainingGuesses--
  }
}

Hangman.prototype.printRemainingGuesses = function () {
  guessesEl.textContent = this.remainingGuesses
}

Hangman.prototype.printPuzzle = function () {
  puzzleEl.textContent = this.getPuzzle()
}

Hangman.prototype.calculateStatus = function () {
  const isFinished = this.word.every((letter) => this.guessedLetters.includes(letter))

  if (isFinished && this.remainingGuesses >= 0) {
    this.status = 'finished'
  } else if (this.remainingGuesses === 0) {
    this.status = 'failed'
  }
}
