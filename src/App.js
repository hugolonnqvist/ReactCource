import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const expenses = [
    { title: "baba", amount: 23.22, date: new Date(2021, 10, 30) },
    { title: "baba2", amount: 28.22, date: new Date(2020, 10, 3) },
    { title: "baba3", amount: 23.22, date: new Date(2021, 10, 4) },
  ];

  const addExpenseHandler = (expense) => {
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
