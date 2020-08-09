// Fetch API
const getPuzzle = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch the puzzle.')
    }
  }).then((data) => {
    return data.puzzle
  })
}

const getCountry = (countryCode) => {
  return fetch(`http://restcountries.eu/rest/v2/all`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Could not fetch a countries list.')
    }
  }).then((data) => {
    return data.find((country) => country.alpha2Code === countryCode)
  })
}

const getLocation = () => {
  return fetch('http://ipinfo.io?token=token').then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Could not fetch IP info.')
    }
  })
}

// Deprecated
// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//   const request = new XMLHttpRequest()

//   request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status == 200) {
//       const data = JSON.parse(e.target.responseText)
//       resolve(data.puzzle)
//     } else if (e.target.readyState === 4) {
//       reject(`An error has taken place. Error: ${e.target.responseText}`)
//     }
//   })

//   request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//   request.send()
// })

// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//   const req = new XMLHttpRequest()

//   req.addEventListener('readystatechange', (e) => {
//     if (e.target.status === 200 & e.target.readyState === 4) {
//       const data = JSON.parse(e.target.responseText)
//       const country = data.find((item) => item.alpha2Code === countryCode)
//       resolve(country)
//     } else if (e.target.readyState === 4) {
//       reject(`An error has taken place. Error: ${e.target.responseText}`)
//     }
//   })

//   req.open('GET', 'http://restcountries.eu/rest/v2/all')
//   req.send()
// })


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
