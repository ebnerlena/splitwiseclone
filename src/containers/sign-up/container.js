import { connect } from 'react-redux';
import UserSignUp from './presentation';
import signUp from '../../action-creators/sign-up';
import create from '../../action-creators/create-user';

const mapStateToProps = (state) => (
  {
    auth: state.auth,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onSignUp: (email, password, history) => {
      dispatch(signUp({ email, password, history }));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUp);
