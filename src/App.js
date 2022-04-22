import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

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
  return (
    <div className="App">
      <h2>Bismillahir Rahmanir Rahim</h2>
     <p>In the name of Allah, I'm Starting to learn React as a responsibility of Full Stack Developer</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
