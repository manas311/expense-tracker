import React , { useState } from "react";
import NewExpense from "./components/AddExpense/NewExpense";
import Expenses from "./components/ExpenseData/Expenses";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Electricity Bills",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [newExpense, setNewExpense] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setNewExpense(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={newExpense} />
    </>
  );
};

export default App;
