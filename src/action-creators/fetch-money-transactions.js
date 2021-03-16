const fetchMoneyTransactionsActionCreator = () => async (dispatch) => {
  dispatch({
    type: 'fetchMoneyTransactions/inital',
    payload: {},
  });
  try {
    const moneyTransactions = await fetch('http://localhost:3001/money-transaction').then((respone) => respone.json());
    dispatch({
      type: 'fetchMoneyTransactions/success',
      payload: moneyTransactions,
    });
  } catch (exp) {
    dispatch({
      type: 'fetchMoneyTransactions/error',
      payload: { exp },
    });
  }
};

export default fetchMoneyTransactionsActionCreator;
