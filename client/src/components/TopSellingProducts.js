import React, { useContext, useEffect } from "react";

import { GlobalContext } from "../context/GlobalState";
import { TopProducts } from "./TopProducts";

export const TopSellingProducts = () => {
  const { topproducts, getTopFiveProducts } = useContext(GlobalContext);
  useEffect(() => {
    getTopFiveProducts();
    // eslint-disable-next-line
  }, []);

  //   const amount = topproducts.map((product) => product.amount);
  //   const totalAmount = topproducts.map(
  //     (product) => product.amount * product.quantity
  //   );
  //   const name = topproducts.map((product) => product.name);
  //   const quantity = topproducts.map((product) => product.quantity);
  //   console.log(topproducts);
  return (
    <>
      <h3>Top 5 Selling Products</h3>
      <span className="alignleft">Name </span>
      <span className="alignleftmid">Quantity</span>
      <span className="alignrightmid">Price</span>
      <span className="alignright">Total Price</span>
      <ul className="list">
        {topproducts.map((product) => (
          <TopProducts key={product._id} product={product} />
        ))}
      </ul>
      {/* <ul className="list">
        <li className={topproducts.amount < 0 ? "minus" : "plus"}>
          <span className="alignleft">{name}</span>

          <span className="alightleftmid">{quantity}</span>
          <span className="alignrightmid">${amount}</span>
          <span className="alignright">${totalAmount}</span>
        </li>
      </ul> */}
    </>
  );
};
