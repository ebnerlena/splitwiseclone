const updateMoneyTransactionActionCreator = (payload) => async (dispatch, _, { getFirebase }) => {
  try {
    getFirebase()
      .ref('moneyTransactions')
      .child(payload.id)
      .update({ paidAt: payload.paidAt });
  } catch (exp) {
    console.log(exp.message);
    dispatch({
      type: 'updateMoneyTransaction/error',
      payload: { exp },
    });
  }
  return {};
};

export default updateMoneyTransactionActionCreator;
