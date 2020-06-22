// Lexical Scope (Static Scope)
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestor scope.

// Global Scope - varOne
  // Local Scope - varTwo
    // Local Scope = varFour
  // Local Scope = vatThree

const varOne = 'varOne' // global

if (true) {
  console.log(varOne)
  const varTwo = 'varTwo' // local
  console.log(varTwo)

  if (true) {
    const varFour = 'varFour'
  }
}

// console.log(varTwo) -> ReferenceError: varTwo is not defined

if (true) {
  const varThree = 'varThree'
}
