import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const INITIAL_EXPENSES = [
  { id: "e1", title: "Book", amount: 29.99, date: new Date(2021, 10, 30) },
  { id: "e2", title: "Jeans", amount: 19.99, date: new Date(2020, 10, 3) },
  { id: "e3", title: "T-shirt", amount: 49.99, date: new Date(2021, 10, 4) },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    console.log("In app.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
