import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import MoneyTransactionsCreate from './presentation';
import fetchUsers from '../../action-creators/fetch-users';
import createMoneyTransactions from '../../action-creators/create-money-transactions';

const mapStateToProps = (state) => (
  {
    users: state.firebase.ordered.users,
    // moneyTransactions: state.moneyTransactions,
    moneyTransactions: state.firebase.ordered.moneyTransactions,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onLoadData: () => {
      dispatch(fetchUsers());
    },
    onCreate: (data) => {
      dispatch(createMoneyTransactions(data));
    },
  }
);

export default compose(
  firebaseConnect(['moneyTransactions' , 'users']),
  connect(mapStateToProps, mapDispatchToProps),
)(MoneyTransactionsCreate);

// export default connect(mapStateToProps, mapDispatchToProps)(MoneyTransactionsCreate);
