import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import MoneyTransactionsList from './presentation';
import updateMoneyTransaction from '../../action-creators/update-money-transaction';

const mapStateToProps = (state) => (
  {
    usersArray: state.firebase.ordered.users,
    usersObjects: state.firebase.data.users,
    moneyTransactions: state.firebase.ordered.moneyTransactions,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onLoadData: () => {
      // dispatch(fetchMoneyTransactions());
      // dispatch(fetchUsers());
    },
    onUpdateTransaction: (data) => {
      dispatch(updateMoneyTransaction(data));
    },
  }
);

export default compose(
  firebaseConnect(['moneyTransactions']),
  connect(mapStateToProps, mapDispatchToProps),
)(MoneyTransactionsList);
// export default connect(mapStateToProps, mapDispatchToProps)(MoneyTransactionsList);
