const initialState = [];

const MoneyTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'createTransactions/success':
      return [...state, ...action.payload];
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export default MoneyTransactionReducer;
