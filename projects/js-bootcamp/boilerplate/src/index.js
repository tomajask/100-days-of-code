
const printTeam = (teamName, coach, ...players) => {
  console.log(`Team: ${teamName}`)
  console.log(`Coach: ${coach}`)
  console.log(`Playes: ${players.join(', ')}`)
}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')

const team = {
  name: 'Liberty',
  coach: 'Casey Penn',
  players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}

printTeam(team.name, team.coach, ...team.players)

const cities = ['Barcelona', 'Cape Town', 'Bordeaux']
const citiesCopy = ['Santiago', ...cities, 'Cracow']

console.log(citiesCopy)

let house = {
  bedrooms: 2,
  bathrooms: 1.5,
  yearBuilt: 2017
}
// Object Spread Operator
let newHouse = {
  basement: true,
  ...house,
  bedrooms: 3
}

console.log(newHouse)

const person = {
  name: 'Thomas',
  age: 21
}
const location = {
  city: 'Berlin',
  country: 'Germany'
}

const overview = {
  ...person,
  ...location
}
console.log(overview)


const todo = {
  id: '1234567890',
  text: 'Pay the bills',
  completed: true
}

// Destructuring
const { id:todoId, text, details = 'No details provided', ...others } = todo
console.log(todoId, text, details, others)


const age = [65, 0, 13, 21]

const [firstAge, secondAge, , fourthAge, lastAge = 123] = age
console.log(firstAge, secondAge, fourthAge, lastAge)

const [ageOne, ...otherAges] = age
console.log(ageOne, otherAges)
