import { connect } from 'react-redux';
import MoneyTransaction from './presentation';
import createMoneyTransactions from '../../action-creators/money-transactions';
import createUsers from '../../action-creators/users';

const mapStateToProps = (state, props) => (
  {
    users: state.users,
    moneyTransactions: state.moneyTransactions,
  }
);

const mapDispatchToProps = (dispatch, props) => (
  {
    onLoadData: () => {
      dispatch(createMoneyTransactions());
      dispatch(createUsers());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(MoneyTransaction);
