import { auth } from '../firebase';

const fetchMoneyTransactionsActionCreator = () => async (dispatch) => {
  if (!auth.currentUser) {
    return;
  }

  dispatch({
    type: 'fetchMoneyTransactions/inital',
    payload: {},
  });
  try {
    const moneyTransactions = await fetch('http://localhost:3001/money-transaction').then((response) => response.json());
    dispatch({
      type: 'fetchMoneyTransactions/success',
      payload: moneyTransactions,
    });
  } catch (exp) {
    const error = exp.message;
    dispatch({
      type: 'fetchMoneyTransactions/error',
      payload: { error },
    });
  }
};

export default fetchMoneyTransactionsActionCreator;
