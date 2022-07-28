import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const currentDate = new Date().toISOString().split("T")[0];
  const amounts = transactions
    .filter(
      (transaction) => transaction.createdAt.split("T")[0] === currentDate
    )
    .reduce((acc, item) => (acc += item.amount * item.quantity), 0)
    .toFixed(2);
  const total = transactions
    .reduce((acc, item) => (acc += item.amount * item.quantity), 0)
    .toFixed(2);

  return (
    <>
      <div className="list">
        <h4>Total Revenue</h4>
        <h1>${numberWithCommas(total)}</h1>
      </div>
      <div className="list">
        <h4>Today's Revenue</h4>
        <h1>${numberWithCommas(amounts)}</h1>
      </div>
    </>
  );
};
