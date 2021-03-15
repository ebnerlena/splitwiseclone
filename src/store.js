import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { useHTTP } from './containers/money-transactions/index';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  ),
);

window.store = store;

const MoneyTransactionAtionCreator = () => async (dispatch) => {
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

const UsersActionCreator = () => async (dispatch) => {
  dispatch({
    type: 'createUsers/inital',
    payload: {},
  });
  try {
    const users = await fetch('http://localhost:3001/user').then((respone) => respone.json());
    dispatch({
      type: 'createUsers/success',
      payload: users,
    });
  } catch (exp) {
    dispatch({
      type: 'createUsers/error',
      payload: { exp },
    });
  }
};

store.dispatch(UsersActionCreator());
store.dispatch(MoneyTransactionAtionCreator());

export default store;
