import { combineReducers } from 'redux';
import UserReducer from './user-reducer';
import MoneyTransactionReducer from './money-transaction-reducer';
import AuthReducer from './auth-reducer';

const rootReducer = combineReducers({
  users: UserReducer,
  moneyTransactions: MoneyTransactionReducer,
  auth: AuthReducer,
});

export default rootReducer;
