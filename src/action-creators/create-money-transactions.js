async function postData(input) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  };
  await fetch('http://localhost:3001/money-transaction', requestOptions)
    .then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
}

const createMoneyTransactionsActionCreator = (payload) => async (dispatch) => {
  try {
    const data = await postData(payload);
    console.log(data);
    dispatch({
      type: 'createMoneyTransactions/success',
      payload: { payload },
    });
  } catch (exp) {
    console.log(exp);
    dispatch({
      type: 'createMoneyTransactions/error',
      payload: { exp },
    });
  }
};

export default createMoneyTransactionsActionCreator;
