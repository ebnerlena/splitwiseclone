import { connect } from 'react-redux';
import UserSignIn from './presentation';
import signIn from '../../action-creators/sign-in';

const mapStateToProps = (state) => (
  {
    auth: state.auth,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onSignIn: (email, password, history) => {
      dispatch(signIn({ email, password, history }));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserSignIn);
