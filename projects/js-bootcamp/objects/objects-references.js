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

const addIncome = function (account, income) {
  account.income += income
}

const resetAccount = function (account) {
  account.income = 0
  account.expenses = 0
}

const getAccountSummary = function (account) {
  const balance = account.income - account.expenses
  console.log(
    `Account for ${account.name} has $${balance}. $${account.income} in income. ` +
    `$${account.expenses} in expenses.`
  )
}

resetAccount(myAccount)
addExpense(myAccount, 1500)
addExpense(myAccount, 100)
addIncome(myAccount, 10000)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)
