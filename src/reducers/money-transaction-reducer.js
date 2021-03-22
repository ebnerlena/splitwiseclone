const initialState = [];

const MoneyTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'fetchMoneyTransactions/success':
      return [...action.payload];
    case 'createMoneyTransactions/success':
      return [...state, action.payload];
    case 'updateMoneyTransaction/success':
      return [...state, action.payload];
    case 'resetMoneyTransactions':
      return initialState;
    default:
      return state;
  }
};

export default MoneyTransactionReducer;
