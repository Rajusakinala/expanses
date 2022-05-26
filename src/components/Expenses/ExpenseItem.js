import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../Ui/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <Card className='expenseItem'>
      
      <ExpenseDate date={props.date} />
      <div className='expenseItemTitle'>
        <h1>{props.title}</h1>
        <div className='expenseItemPrice'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
