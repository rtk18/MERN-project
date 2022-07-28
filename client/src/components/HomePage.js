import React from "react";
import { Header } from "./Header";
import { Balance } from "./Balance";
// import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import { TopSellingProducts } from "./TopSellingProducts";

import { GlobalProvider } from "../context/GlobalState";

import "../App.css";

function HomePage() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        {/* <IncomeExpenses /> */}
        <TopSellingProducts />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default HomePage;
