const num = 3.1415

console.log(num.toFixed(2))

console.log(Math.round(num))

console.log(Math.floor(num))
console.log(Math.ceil(num))


console.log(Math.random())

const min = 10
const max = 20
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min


console.log(randomNum)

const makeGuess = function (guess) {
  const min = 1
  const max = 5
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
  return guess === randomNum
}

console.log(makeGuess(1))
