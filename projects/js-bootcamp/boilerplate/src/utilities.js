// Named export - multiple smaller things (e.g. methods, const)
// Default export - one big thing (e.g. class)

const add = (a, b) => a + b
const name = 'Thomas'
const square = (n) => n * n

console.log('from my code')
export { add, name, square as default }
