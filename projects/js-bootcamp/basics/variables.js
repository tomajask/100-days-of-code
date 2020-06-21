let petName = 'Hal'
// let petName = 'Spot' -> SyntaxError: Identifier 'petName' has already been declared
petName = 'Spot'

console.log(petName)

const fishName = 'Nemo'
// fishName = 'Meg' -> TypeError: Assignment to constant variable.

console.log(fishName)


// let 3 = 2 -> SyntaxError: Unexpected number
let test_$ = 2
let result = 3 + 4 + test_$

console.log(result)


// let let = 12 -> SyntaxError: let is disallowed as a lexically bound name


