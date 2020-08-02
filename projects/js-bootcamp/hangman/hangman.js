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
  if (this.status !== 'playing') {
    return
  }
  letter = letter.toLowerCase()

  if (this.word.includes(letter)) {
    if (!this.guessedLetters.includes(letter)) {
      this.guessedLetters.push(letter)
    }
  } else {
    this.remainingGuesses--
  }
  this.calculateStatus()
}

Hangman.prototype.calculateStatus = function () {
  const isFinished = this.word.every((letter) => this.guessedLetters.includes(letter))

  if (isFinished && this.remainingGuesses >= 0) {
    this.status = 'finished'
  } else if (this.remainingGuesses === 0) {
    this.status = 'failed'
  }
}

Hangman.prototype.getStatusMessage = function () {
  switch (this.status) {
    case 'playing':
      return `Guesses left: ${this.remainingGuesses}`
      break
    case 'failed':
      return `Nice try! The word was "${this.word.join('')}"`
      break
    case 'finished':
      return 'Great work! You guesses the word!'
      break
  }
}
