import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction, getTopFiveProducts } = useContext(GlobalContext);

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      <span className="alignleft">{transaction.name}</span>
      <span className="alightleftmid">{transaction.quantity}</span>
      <span className="alignrightmid">
        ${numberWithCommas(Math.abs(transaction.amount.toFixed(2)))}
      </span>
      <span className="alignright">
        $
        {numberWithCommas(
          Math.abs(transaction.amount).toFixed(2) *
            transaction.quantity.toFixed(2)
        )}
      </span>
      <button
        onClick={() => {
          deleteTransaction(transaction._id);
          getTopFiveProducts();
        }}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
