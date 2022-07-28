import React from "react";
import { numberWithCommas } from "../utils/format";

export const TopProducts = ({ product }) => {
  return (
    <li className="top">
      <span className="alignleft">{product.name}</span>
      <span className="alightleftmid">{product.quantity}</span>
      <span className="alignrightmid">
        ${numberWithCommas(Math.abs(product.amount.toFixed(2)))}
      </span>
      <span className="alignright">
        $
        {numberWithCommas(
          Math.abs(product.amount).toFixed(2) * product.quantity.toFixed(2)
        )}
      </span>
    </li>
  );
};
