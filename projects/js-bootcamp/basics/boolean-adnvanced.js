const isAccountLocked = false
const userRole = 'admin'

if (isAccountLocked) {
  console.log('Account Locked')
} else if (userRole === 'admin') {
  console.log('Welcome, Administrator!')
} else {
  console.log('Welcome!')
}


const temp = 23

if (temp <= 0) {
  console.log("It's freezing outside!")
} else if (temp >= 40) {
  console.log("It's hot outside!")
} else {
  console.log("Go for it. It's pretty nice outside.")
}
