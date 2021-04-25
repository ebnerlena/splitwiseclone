import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import UserSignUp from './presentation';
import signUp from '../../action-creators/sign-up';
import create from '../../action-creators/create-user';

const mapStateToProps = (state) => (
  {
    auth: state.auth,
    users: state.firebase.ordered.users,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onSignUp: (email, password, history) => {
      dispatch(signUp({ email, password, history }));
    },
  }
);
export default compose(
  firebaseConnect(['users']),
  connect(mapStateToProps, mapDispatchToProps),
)(UserSignUp);
// export default connect(mapStateToProps, mapDispatchToProps)(UserSignUp);
