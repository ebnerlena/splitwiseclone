import { connect } from 'react-redux';
import UserSignOut from './presentation';
import signOut from '../../action-creators/sign-out';

const mapStateToProps = () => (
  {
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onSignOut: () => {
      dispatch(signOut());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserSignOut);
