const createCounter = () => {
  let count = 0

  return {
    increment() {
      count++
    },
    decrement() {
      count--
    },
    get() {
      return count
    }
  }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())


const createAdder = (a) => {
  return (b) => {
    return a + b
  }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-90))


const createTipper = (baseTip) => {
  return (billAmount) => billAmount * baseTip
}

const tip15 = createTipper(.15)
console.log(tip15(150))

const tip30 = createTipper(.3)
console.log(tip30(200))


// const myFunction = () => {
//   const message = 'This is my message'
//   const printMessage = () => {
//     console.log(message)
//   }
//   return printMessage
// }

// const myPrintMessage = myFunction()
// myPrintMessage()
