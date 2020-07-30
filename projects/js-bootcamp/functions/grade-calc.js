const getScore = function (studentScore, totalScore) {
  if (typeof studentScore !== 'number' || typeof totalScore !== 'number') {
    throw Error('Arguments must be numbers')
  }

  const percentage = studentScore / totalScore * 100
  let letterGrade = ''

  if (percentage >= 90) {
    letterGrade = 'A'
  } else if (percentage >= 80) {
    letterGrade = 'B'
  } else if (percentage >= 70) {
    letterGrade = 'C'
  } else if (percentage >= 60) {
    letterGrade = 'D'
  } else {
    letterGrade = 'F'
  }
  return `You got an ${letterGrade} (${percentage}%)`
}

console.log(getScore(99, 100))
console.log(getScore(2, 6))
console.log(getScore(15, 20))

try {
  console.log(getScore('number', 10))
} catch (e) {
  console.log(`Caught an error: ${e.message}`)
}
