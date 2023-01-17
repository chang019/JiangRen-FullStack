import './App.css';
import Expenses from './components/Expenses/Expenses';
import ExpenseItem from './components/Expenses/ExpenseItem/ExpenseItem.jsx';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

function App() {
  const initialExpense = [
    {
        date: new Date(2022, 12, 20),
        title: 'Car Insurance',
        amount: '$1500'
    },
    {
        date: new Date(2022, 12, 25),
        title: 'Toilet Paper',
        amount: '$1.5'
    },
    {
        date: new Date(2022, 12, 30),
        title: 'Myki Top Up',
        amount: '$20'
    }
];

  const [expenses, setExpenses] = useState(initialExpense);

  const onAddNewExpense = NewExpense => {
    setExpenses([...expenses, NewExpense]);
  }

  return (
    <div className="App">
      <NewExpense addNewExpense={onAddNewExpense}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
