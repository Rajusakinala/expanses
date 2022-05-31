import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newDate, setNewDate] = useState('');
  

  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setNewPrice(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
    
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: newTitle,
      amount: newPrice,
      date: new Date(newDate),
    };

    props.onSaveExpenseData(expenseData);
    setNewTitle('');
    setNewPrice('');
    setNewDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='newExpenseControls'>
        <div className='newExpenseControl'>
          <label>Title</label>
          <input
            type='text'
            value={newTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={newPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={newDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
