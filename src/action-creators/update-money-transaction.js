const updateMoneyTransactionActionCreator = (payload) => async (dispatch) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };
    await fetch('http://localhost:3001/money-transaction', requestOptions)
      .then(async (response) => {
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
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  } catch (exp) {
    dispatch({
      type: 'updateMoneyTransaction/error',
      payload: { exp },
    });
  }
};

export default updateMoneyTransactionActionCreator;
