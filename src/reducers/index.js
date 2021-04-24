import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import UserReducer from './user-reducer';
import MoneyTransactionReducer from './money-transaction-reducer';
import AuthReducer from './auth-reducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  users: UserReducer,
  moneyTransactions: MoneyTransactionReducer,
  auth: AuthReducer,
});

export default rootReducer;
