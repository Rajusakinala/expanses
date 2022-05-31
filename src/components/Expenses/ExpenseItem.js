import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
const[title, setTitle] = useState(props.title)  
  function buttonhandler (event){
    setTitle('updated')
    console.log('updated')
  }
  return (
    
    <Card className='expenseItem'>
    
      <ExpenseDate date={props.date} />
      <div className='expenseItemCard'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={buttonhandler}>change</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
