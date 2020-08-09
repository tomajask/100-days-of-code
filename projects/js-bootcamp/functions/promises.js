// Callback

const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === 'number') {
      callback(undefined, num * 2)
    } else {
      callback('Number must be provided')
    }
  }, 2000)
}

getDataCallback(2, (err, data) => { // it starts performing at this point
  if (err) {
    console.log(err)
  } else {
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log(data)
      }
    })
  }
})

// Promise

const getDataPromise = (num) => new Promise((resolve, reject) => {
  setTimeout(() => {
    typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
  }, 2000)
})

// Not so good -> nasty nesting...
getDataPromise(3).then((data) => {
  getDataPromise(data).then((data) => {
    getDataPromise(data).then((data) => {
      console.log(data)
    }, (err) => {
      console.log(err)
    })
  }, (err) => {
    console.log(err)
  })
}, (err) => {
  console.log(err)
})

// Promise chaining -> better!
getDataPromise(10).then((data) => {
  return getDataPromise(data)
}).then((data) => {
  return getDataPromise(data)
}).then((data) => {
  console.log(data)
}).catch((err) => {
  console.log(err)
})
