'use strict'

import getPuzzle from './requests'
import Hangman from './hangman'

const guessesEl = document.querySelector('#guesses')
const puzzleEl = document.querySelector('#puzzle')
let gameInstance

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  gameInstance.makeGuess(guess)
  render()
  console.log(`Status: ${gameInstance.status}`)
})

const render = () => {
  puzzleEl.innerHTML = ''
  guessesEl.textContent = gameInstance.statusMessage

  gameInstance.puzzle.split('').forEach((char) => {
    const letterEl = document.createElement('span')
    letterEl.textContent = char
    puzzleEl.appendChild(letterEl)
  })
}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  gameInstance = new Hangman(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
