const name = '  Thomas Jaskiewicz  '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Documentation for String in JavaScript
// https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/String
// Type in Google: `mdn string

console.log(name.toLowerCase())

const password = "abc123passwor"

console.log(password.includes("password"))

console.log(name.trim())

const isValidPassword = function (password) {
  return password.length >= 8 && !password.includes("password")
}

console.log(isValidPassword("asdfg"))
console.log(isValidPassword("kajsdkljsdgiwi9393932--2s;fs'"))
console.log(isValidPassword("asdfg[]''/,,.`password"))
