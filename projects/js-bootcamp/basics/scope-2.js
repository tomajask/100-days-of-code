// Global (name)
  // Local (name) - variable shadowing, it shadows the variable from Global scope
    // Local
  // Local

const name = 'Andrew'

if (true) {
  let name = 'Mike'

  if (true) {
    name = 'Jen'
    console.log(name)
  }
}

if (true) {
  console.log(name)
}



// Leaked global


if (true) {
  if (true) {
    firstName = 'Jen'
    console.log(firstName)
  }
}

if (true) {
  console.log(firstName)
}
