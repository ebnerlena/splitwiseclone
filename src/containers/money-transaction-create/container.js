import { connect } from 'react-redux';
import MoneyTransactionsCreate from './presentation';
import fetchUsers from '../../action-creators/fetch-users';
import createMoneyTransactions from '../../action-creators/create-money-transactions';

const mapStateToProps = (state, props) => (
  {
    users: state.users,
    moneyTransactions: state.moneyTransactions,
  }
);

const mapDispatchToProps = (dispatch, props) => (
  {
    onLoadData: () => {
      dispatch(fetchUsers());
    },
    onCreate: (data) => {
      dispatch(createMoneyTransactions(data));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(MoneyTransactionsCreate);
