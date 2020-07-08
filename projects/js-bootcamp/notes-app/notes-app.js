// DOM - Document Object Model
const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Portugal'
}, {
  title: 'Habits to work on',
  body: 'Exercising. Eating a bit better.'
}, {
  title: 'Office modification',
  body: 'Get a new seat'
}]

document.querySelector('button').addEventListener('click', function (event) {
  console.log(event)
})



// // Query and remove
// const p = document.querySelector('p')
// // p.remove()

// // Query all and remove
// const ps = document.querySelectorAll('p')
// console.log(ps)

// ps.forEach(function (item, _index) {
//   // console.log(item.textContent)
//   item.textContent = '******'
//   // item.remove()
// })

// const newNote = document.createElement('p')
// newNote.textContent = 'This is a new element from JS.'

// document.querySelector('body').appendChild(newNote)
