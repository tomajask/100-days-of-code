const account = {
  name: 'Thomas Jaskiewicz',
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    })
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount
    })
  },
  getAccountSummary: function () {
    const totalExpenses = this.expenses.reduce(function (total, expense) {
      return total += expense.amount
    }, 0)
    const totalIncome = this.income.reduce(function (total, income) {
      return total += income.amount
    }, 0)
    return `${this.name} has a balance of $${totalIncome - totalExpenses}. $${totalIncome} in income. $${totalExpenses} in expenses.`
  }
}

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Thomas Jaskiewicz has $1250 in expenses.

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('eShop', 2000)
console.log(account)
console.log(account.getAccountSummary())

// addIncome() -> desc, amount
// tweak getAccountSummary -> Thomas Jaskiewicz has a balance of $1100. $2000 in income. $900 in expenses
