import { auth } from '../firebase';

// thunk functions - so that async is allowed
const createMoneyTransactionsActionCreator = (payload) => async (dispatch, _, { getFirebase }) => {
  try {
    if (!auth.currentUser) {
      return {};
    }

    await getFirebase()
      .ref('moneyTransactions')
      .push(payload);

    return {};
  } catch (exp) {
    console.log(exp.message);
    dispatch({
      type: 'createMoneyTransaction/error',
      payload: { exp },
    });
  }
  return {};
};

export default createMoneyTransactionsActionCreator;
