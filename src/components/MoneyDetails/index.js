// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props
  const reqBalance = income - expenses < 0 ? 0 : income - expenses

  return (
    <div className="money-details-bg-container">
      <div className="money-details-list-item1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-details-image"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {reqBalance}</p>
        </div>
      </div>
      <div className="money-details-list-item2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-details-image"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {income}</p>
        </div>
      </div>
      <div className="money-details-list-item3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-details-image"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
