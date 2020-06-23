// Multiple arguments
const add = function (a, b) {
  return a + b
}

console.log(add(10, 1))

// Default arguments
const getScoreText = function (name = 'Anonymous', score = 0) {
  return `${name} score ${score} points.`
}

console.log(getScoreText())
console.log(getScoreText('Andrew', 100))
console.log(getScoreText(undefined, 99))

const calculateTip = function (total, tipPercent = .2) {
  console.log(`A ${tipPercent * 100}% for $${total} would be $${total * tipPercent}.`)
  return total * tipPercent
}

console.log(calculateTip(100))
console.log(calculateTip(100, 0.3))
console.log(calculateTip(40, .25))
