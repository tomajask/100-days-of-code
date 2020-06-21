const temp = 0
const isFreezing = temp <= 0

if (isFreezing) {
  console.log("It's freezing.")
}
else {
  console.log("It's not freezing.")
}


console.log(isFreezing)

// === - equality operator
// !== - no equal operator
// <   - less than operator
// >
// <=  - less or equal than operator
// >=

const age = 1
const isChild = age <= 7
const isSenior = age >= 65

if (isChild) {
  console.log("Child's price")
} else if (isSenior) {
  console.log("Senior's discount")
}

