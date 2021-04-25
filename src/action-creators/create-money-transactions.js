import { auth } from '../firebase';

// thunk functions - so that async is allowed
const createMoneyTransactionsActionCreator = (payload) => async (dispatch, _, { getFirebase }) => {
  if (!auth.currentUser) {
    return {};
  }

  await getFirebase()
    .ref('moneyTransactions')
    .push(payload);

  return {};
};

export default createMoneyTransactionsActionCreator;
