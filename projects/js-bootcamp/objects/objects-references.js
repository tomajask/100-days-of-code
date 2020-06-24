const myAccount = {
  name: 'Thomas',
  expenses: 0,
  income: 0
}

const otherAccount = myAccount
otherAccount.income = 1000 // it will modify also the 'myAccount'

const addExpense = function (account, amount) {
  account.expenses += amount // it will modify the 'expenses' field
  // account = {} -> this will be applied only in this local scope
}

console.log(myAccount)
addExpense(myAccount, 2.50)

console.log(myAccount)
