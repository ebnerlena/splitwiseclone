import { auth } from '../firebase';

// thunk functions - so that async is allowed
const createMoneyTransactionsActionCreator = (payload) => async (dispatch, _, { getFirebase }) => {
  console.log(payload);
  if (!auth.currentUser) {
    return {};
  }

  await getFirebase()
    .ref('moneyTransactions')
    .push(payload);

  console.log('i am here');
  /* try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };
    const response = await fetch('http://localhost:3001/money-transaction', requestOptions);
    const data = await response.json();
    if (!response.ok) {
      const error = (data && data.message) || response.status;
      return Promise.reject(error);
    }
    dispatch({
      type: 'createMoneyTransactions/success',
      payload: data,
    });
    return data;
  } catch (exp) {
    console.log(exp);
    const error = exp.message;
    dispatch({
      type: 'createMoneyTransactions/error',
      payload: { error },
    });
  } */
  return {};
};

export default createMoneyTransactionsActionCreator;
