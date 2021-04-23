const updateMoneyTransactionActionCreator = (payload) => async (dispatch) => {
  try {
    const transaction = await fetch(`http://localhost:3001/money-transaction/${payload.id}`)
      .then((response) => response.json());
    transaction.paidAt = payload.paidAt;

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction),
    };
    const response = await fetch(`http://localhost:3001/money-transaction/${payload.id}`, requestOptions);

    const data = await response.json();
    if (!response.ok) {
      const error = (data && data.message) || response.status;
      return Promise.reject(error);
    }

    dispatch({
      type: 'updateMoneyTransaction/success',
      payload: data,
    });
    return data;
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
