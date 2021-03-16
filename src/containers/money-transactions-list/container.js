import { connect } from 'react-redux';
import MoneyTransactionsList from './presentation';
import fetchMoneyTransactions from '../../action-creators/fetch-money-transactions';
import fetchUsers from '../../action-creators/fetch-users';

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
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(MoneyTransactionsList);
