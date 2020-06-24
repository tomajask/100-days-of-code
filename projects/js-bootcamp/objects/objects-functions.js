const myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

const otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
}

const getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
  }
}

const bookSummary = getSummary(myBook)
const otherBookSummary = getSummary(otherBook)

console.log(bookSummary.summary)
console.log(bookSummary.pageCountSummary)

console.log(otherBookSummary.summary)
console.log(otherBookSummary.pageCountSummary)

const convertTemp = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    celsius: (fahrenheit - 32) * 5/9,
    kelvin: (fahrenheit + 459.67) * 5/9
  }
}

const temps = convertTemp(32)
console.log(`Fahrenheit: ${temps.fahrenheit}\nCelsius: ${temps.celsius}\nKelvin: ${temps.kelvin}`)
