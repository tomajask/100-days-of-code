'use strict'

class Hangman {
  constructor(word, remainingGuesses) {
    this.status = 'playing'
    this.word = word.toLowerCase().split('')
    this.guessedLetters = [' ']
    this.remainingGuesses = remainingGuesses
  }

  getPuzzle() {
    const puzzle = this.word.map((letter) => this.guessedLetters.includes(letter) ? letter : '*')
    return puzzle.join('')
  }

  makeGuess(letter) {
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

  calculateStatus() {
    const isFinished = this.word.every((letter) => this.guessedLetters.includes(letter))

    if (isFinished && this.remainingGuesses >= 0) {
      this.status = 'finished'
    } else if (this.remainingGuesses === 0) {
      this.status = 'failed'
    }
  }

  getStatusMessage() {
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
}
