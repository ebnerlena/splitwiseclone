import { combineReducers } from 'redux';
import UserReducer from './user-reducer';
import MoneyTransactionReducer from './money-transaction-reducer';

const rootReducer = combineReducers({
  users: UserReducer,
  moneyTransactions: MoneyTransactionReducer,
});

export default rootReducer;
