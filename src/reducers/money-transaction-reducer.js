const initialState = {
  status: 'idle',
  entities: {},
};

// https://redux.js.org/tutorials/fundamentals/part-7-standard-patterns
/* */

/* const showOnlyLatestState = (transactions) => {
  const result = new Set();
  transactions.reverse().forEach((t) => { result.add(transactions.find((x) => x.id === t.id)); });
  return Array.from(result).sort((t1, t2) => t1.id - t2.id);
}; */

const MoneyTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'fetchMoneyTransactions/success':
      // return [...action.payload];
      return {
        ...state,
        status: 'succeeded',
        entities: {
          ...action.payload,
        },
      };
      // use normalized version to make sure that only one copy is there and can be looked up by id
    case 'createMoneyTransactions/success': {
      const transaction = action.payload;
      console.log(transaction);
      return {
        ...state,
        status: 'succeeded',
        entities: {
          ...state.entities,
          [transaction.id]: transaction,
        },
      };
    }
    // return [...state, action.payload];
    case 'updateMoneyTransaction/success': {
      const transaction = action.payload;
      return {
        ...state,
        status: 'succeeded',
        entities: {
          ...state.entities,
          [transaction.id]: transaction,
        },
      };
    }
    // return showOnlyLatestState([...state, action.payload]);
    case 'resetMoneyTransactions':
      return initialState;
    default:
      return state;
  }
};

const selectTransactionEntities = (state) => state.moneyTransactions.entities;

export const selectTransactions = (state) => Object.values(state.entities);

export const selectTransactionById = (state, id) => selectTransactionEntities(state)[id];

export default MoneyTransactionReducer;
