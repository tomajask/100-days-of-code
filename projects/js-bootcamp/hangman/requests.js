const getPuzzle = (callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status == 200) {
      const data = JSON.parse(e.target.responseText)
      callback(undefined, data.puzzle)
    } else if (e.target.readyState === 4) {
      callback(`An error has taken place. Error: ${e.target.responseText}`)
    }
  })

  request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
  request.send()
}

const getCountry = (countryCode, callback) => {
  const req = new XMLHttpRequest()

  req.addEventListener('readystatechange', (e) => {
    if (e.target.status === 200 & e.target.readyState === 4) {
      const data = JSON.parse(e.target.responseText)
      const country = data.find((item) => item.alpha2Code === countryCode)
      callback(undefined, country)
    } else if (e.target.readyState === 4) {
      callback(`An error has taken place. Error: ${e.target.responseText}`)
    }
  })

  req.open('GET', 'http://restcountries.eu/rest/v2/all')
  req.send()
}



// (!!!) Don't use synchronous requests!
// const getPuzzleSync = () => {
//   const request = new XMLHttpRequest()
//   request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=3', false)
//   request.send()

//   if (request.readyState === 4 && request.status == 200) {
//     const data = JSON.parse(request.responseText)
//     return data.puzzle
//   } else if (request.readyState === 4) {
//     throw new Error(`An error has taken place. Error: ${requestresponseText}`)
//   }
// }
