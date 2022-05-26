import React from 'react';
import './App.css'
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      title: 'Clothes',
      amount: 50,
      date: new Date(2021, 7, 17),
    },
    {title: 'Laptop', amount: 799, date: new Date(2021, 0, 13) },
    {
      title: 'Books',
      amount: 200,
      date: new Date(2020, 2, 23),
    },
    
  ];

  return (
    <div>
      <h2>welcome to React</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
