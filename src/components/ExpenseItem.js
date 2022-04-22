import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>April 22nd, 2022</div>
      <div className="expense-item__description">
        <h2>Started Learing React</h2>
        <div className="expense-item__price">$500.88</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
