import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDate, setItemDate] = useState("");

  const titleChangeHandler = (event) => {
    setItemName(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setItemPrice(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setItemDate(event.target.value);
  };

  const submitButtonHandler = (event)=>{
      event.preventDefault();
      const expenseItemData = {
          title: itemName,
          price : itemPrice,
          date: new Date(itemDate)
      };
      console.log(expenseItemData);
      setItemName('');
      setItemPrice('');
      setItemDate('');

  };

  return (
    <form onSubmit={submitButtonHandler}>
      <div className="newExpenseControls">
        <div className="newExpenseControl">
          <label>Name</label>
          <input type="text" value={itemName} onChange={titleChangeHandler} />
        </div>
        <div className="newExpenseControl">
          <label>Price</label>
          <input type="number" min="0" step="1" value={itemPrice} onChange={priceChangeHandler} />
        </div>
        <div className="newExpenseControl">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-01-01"
            value={itemDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="newExpenseSubmitButton">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
