import React, {useState} from "react";

import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    date: new Date(2022, 4, 22),
    title: "Car Insurance",
    amount: 5.13,
  },
  {
    id: 'e2',
    date: new Date(2022, 2, 5),
    title: "Buy Car",
    amount: 1500000,
  },
  {
    id: 'e3',
    date: new Date(2021, 12, 6),
    title: "Our Precious",
    amount: 3000000,
  },
  {
    id: 'e4',
    date: new Date(2022, 1, 2),
    title: "Last Conversation",
    amount: 15,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler  = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };



  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
