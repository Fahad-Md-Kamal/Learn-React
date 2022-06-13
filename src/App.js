import React from "react";

import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      date: new Date(2022, 4, 22),
      title: "Car Insurance",
      amount: 5.13,
    },
    {
      date: new Date(2022, 2, 5),
      title: "Buy Car",
      amount: 1500000,
    },
    {
      date: new Date(2021, 12, 6),
      title: "Our Precious",
      amount: 3000000,
    },
    {
      date: new Date(2022, 1, 2),
      title: "Last Conversation",
      amount: 15,
    },
  ];

  const addExpenseHandler  = expense => {
    console.log('In App.js');
    console.log(expense);
  };



  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
