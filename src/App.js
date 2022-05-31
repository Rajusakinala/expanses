import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import './App.css'
const App = () => {
  const expenses = [
    {
      title: 'Clothes',
      amount: 50,
      date: new Date(2021, 3, 23),
    },
    {title: 'Laptop', amount: 999, date: new Date(2022, 0, 13) },
    {
      title: 'Food',
      amount: 100,
      date: new Date(2022, 8, 18),
    },
    
  ];

  const addExpenseHandler = expense => {
    console.log('In expense item');
    console.log(expense);
  };

  return (
    <div>
      <h2>My Expenses</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
