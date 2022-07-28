import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const currentDate = new Date();
  const { addTransaction, getTopFiveProducts } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      name,
      amount: +amount,
      quantity,
      currentDate,
    };

    addTransaction(newTransaction);
    getTopFiveProducts();
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />( Positive : Income, Negative : Expense)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="quantity">
            Quantity <br />
          </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
