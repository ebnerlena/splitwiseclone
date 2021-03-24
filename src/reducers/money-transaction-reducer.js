const initialState = [];
const showOnlyLatestState = (transactions) => {
  const result = new Set();
  // todo: improve so that it must not be reveresed
  transactions.reverse().forEach((t) => { result.add(transactions.find((x) => x.id === t.id)); });
  return Array.from(result);
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
