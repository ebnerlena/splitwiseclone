import { connect } from 'react-redux';
import UserSignOut from './presentation';
import signOut from '../../action-creators/sign-out';

const mapStateToProps = (state, props) => (
  {
  }
);

const mapDispatchToProps = (dispatch, props) => (
  {
    onSignOut: (history) => {
      dispatch(signOut({history}));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserSignOut);
