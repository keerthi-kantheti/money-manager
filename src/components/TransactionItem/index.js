// Write your code here

import './index.css'

const TransactionItem = props => {
  const {itemDetails, onDelete} = props
  const {id, title, amount, type} = itemDetails

  const onClickDelete = () => {
    onDelete(id, type, amount)
  }
  return (
    <li className="list-item">
      <p className="transaction-item">{title}</p>
      <p className="transaction-item">{amount}</p>
      <p className="transaction-item">{type}</p>
      <button
        type="button"
        className="delete-btn"
        data-testid="delete"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default TransactionItem
