import React, { useState } from "react";
import Card from "../UI/Card";
import "./css/Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const yearChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });


  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          chosenYear={selectedYear}
          onYearChange={yearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
