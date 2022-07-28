import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  transactions: [],
  topproducts: [],
  authToken: "",
  error: null,
  loading: true,
};
const config = {
  headers: {
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJkZmNlOTk4ODBhZjA0ZmI4NDFkZmZiIiwiZW1haWwiOiJtZWhyYS5yaXRpazE4QGdtYWlsLmNvbSIsImlhdCI6MTY1ODg2Mjg5NCwiZXhwIjoxNjU4ODcwMDk0fQ.6A-EvNzSyHR1mWbywgNycewcMi9_3puM6L0d-qIZvDQ",
    "Content-Type": "application/json",
  },
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const res = await axios.get("/api/product", config);

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/product/${id}`, config);

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function addTransaction(transaction) {
    try {
      const res = await axios.post("/api/product", transaction, config);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }
  async function getTopFiveProducts() {
    try {
      const res = await axios.get("/api/product/getTopFiveProducts", config);
      dispatch({
        type: "GET_TOP_PRODUCTS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "GET_TOP_PRODUCTS_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        topproducts: state.topproducts,
        authToken: state.authToken,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
        getTopFiveProducts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
