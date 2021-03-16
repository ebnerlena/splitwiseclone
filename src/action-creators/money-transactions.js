const MoneyTransactionActionCreator = () => async (dispatch) => {
  dispatch({
    type: 'createTransactions/inital',
    payload: {},
  });
  try {
    const moneyTransactions = await fetch('http://localhost:3001/money-transaction').then((respone) => respone.json());
    dispatch({
      type: 'createTransactions/success',
      payload: moneyTransactions,
    });
  } catch (exp) {
    dispatch({
      type: 'createTransactions/error',
      payload: { exp },
    });
  }
};

export default MoneyTransactionActionCreator;
