// Callback

const getDataCallback = (callback) => {
  setTimeout(() => {
    // callback(undefined, 'This is the data')
    callback('This is my callback error')
  }, 2000)
}

getDataCallback((err, data) => { // it starts performing at this point
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

// Promise

const getDataPromise = (data) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`This is the promise data with: ${data}`)
    // reject('This is my promise error')
  }, 2000)
})

const myPromise = getDataPromise(123) // it starts performing at this point

myPromise.then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})
