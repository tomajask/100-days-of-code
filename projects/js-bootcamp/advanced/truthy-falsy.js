const products = ['ss']
const product = products[0]

// Truthy - values that resolve to true in Boolean context
// Falsy - values that resolve to false in Boolean context
  // falsy values -> false, 0, '' (empty string), null, undefined

if (product !== undefined) {
  console.log('Product found')
} else {
  console.log('Product not found')
}
