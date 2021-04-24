const initialState = [];

const showOnlyLatestState = (transactions) => {
  const result = new Set();
  transactions.reverse().forEach((t) => { result.add(transactions.find((x) => x.id === t.id)); });
  return Array.from(result).sort((t1, t2) => t1.id - t2.id);
};

const MoneyTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'fetchMoneyTransactions/success':
      return [...action.payload];
    case 'createMoneyTransactions/success':
      return [...state, action.payload];
    case 'updateMoneyTransaction/success':
      return showOnlyLatestState([...state, action.payload]);
    case 'resetMoneyTransactions':
      return initialState;
    default:
      return state;
  }
};

export default MoneyTransactionReducer;
