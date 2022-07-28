export default (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "GET_TOP_PRODUCTS":
      return {
        ...state,
        loading: true,
        topproducts: action.payload,
      };
    case "GET_TOP_PRODUCTS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "GET_TOKEN":
      return {
        ...state,
        authToken: action.payload,
        error: action.payload,
      };
    case "TOKEN_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
