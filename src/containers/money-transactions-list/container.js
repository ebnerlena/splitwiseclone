import { connect } from 'react-redux';
import MoneyTransactionsList from './presentation';
import fetchMoneyTransactions from '../../action-creators/fetch-money-transactions';
import fetchUsers from '../../action-creators/fetch-users';
import updateMoneyTransaction from '../../action-creators/update-money-transaction';

const mapStateToProps = (state, props) => (
  {
    users: state.users,
    moneyTransactions: state.moneyTransactions,
  }
);

const mapDispatchToProps = (dispatch, props) => (
  {
    onLoadData: () => {
      dispatch(fetchMoneyTransactions());
      dispatch(fetchUsers());
    },
    onUpdate: (data) => {
      dispatch(updateMoneyTransaction(data));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(MoneyTransactionsList);
