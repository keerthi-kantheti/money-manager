import './index.css'

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

/* const initialTransactionList = [
  {id: uuidv4(), title: 'Salary', amount: 10000, type: 'Income'},
  {id: uuidv4(), title: 'Car Loan', amount: 590, type: 'Expenses'},
  {id: uuidv4(), title: 'Part time', amount: 15000, type: 'Income'},
  {id: uuidv4(), title: 'Phone', amount: 7000, type: 'Expenses'},
] */

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    income: 0,
    expenses: 0,
    type: transactionTypeOptions[0].optionId,
    transactionsList: [],
    title: '',
    amount: '',
  }

  onChangeOfTitleInput = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amount: event.target.value})
  }

  onChangeOfTypeInput = event => {
    this.setState({type: event.target.value})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {title, type, amount, income, expenses} = this.state
    const displayType = type === 'INCOME' ? 'Income' : 'Expenses'
    const newTransaction = {
      id: uuidv4(),
      title,
      type: displayType,
      amount,
    }
    const newIncome = type === 'INCOME' ? income + parseInt(amount) : income
    const newExpenses =
      type === 'EXPENSES' ? expenses + parseInt(amount) : expenses

    this.setState(prev => ({
      transactionsList: [...prev.transactionsList, newTransaction],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
      income: newIncome,
      expenses: newExpenses,
    }))
  }

  onDeleteTransaction = (id, type, amount) => {
    const {transactionsList, income, expenses} = this.state
    const filteredList = transactionsList.filter(each => each.id !== id)
    if (type === 'Income') {
      this.setState({
        transactionsList: filteredList,
        income: income - parseInt(amount),
      })
    } else {
      this.setState({
        transactionsList: filteredList,
        expenses: expenses - parseInt(amount),
      })
    }
  }

  render() {
    const {income, expenses, type, title, amount, transactionsList} = this.state

    console.log(transactionsList)
    return (
      <div className="money-manager-background-container">
        <div className="money-manager-name-container">
          <h1 className="richard-name">Hi, Richard</h1>
          <p className="welcome-back-para">
            Welcome back to your
            <span className="money-manager-span"> Money Manager</span>
          </p>
        </div>

        <MoneyDetails income={income} expenses={expenses} />
        <div className="transaction-container">
          <div className="form-container">
            <h1 className="form-heading">Add Transaction</h1>
            <form className="transaction-form" onSubmit={this.onClickAddButton}>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                placeholder="Title"
                value={title}
                onChange={this.onChangeOfTitleInput}
                type="text"
              />
              <br />
              <label htmlFor="amount">Amount</label>
              <input
                id="amount"
                placeholder="Amount"
                value={amount}
                onChange={this.onChangeAmountInput}
                type="text"
              />
              <br />
              <label htmlFor="drop-down-list">Type</label>
              <select
                id="drop-down-list"
                value={type}
                onChange={this.onChangeOfTypeInput}
              >
                <option
                  value={transactionTypeOptions[0].optionId}
                  key={transactionTypeOptions[0].displayText}
                >
                  {transactionTypeOptions[0].displayText}
                </option>
                <option
                  value={transactionTypeOptions[1].optionId}
                  key={transactionTypeOptions[1].displayText}
                >
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-heading">History</h1>

            <ul>
              <li>
                <p className="transaction-headers">Title</p>
                <p className="transaction-headers">Amount</p>
                <p className="transaction-headers">Type</p>
              </li>

              {transactionsList.map(each => (
                <TransactionItem
                  itemDetails={each}
                  key={each.id}
                  onDelete={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
