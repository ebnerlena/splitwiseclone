import { connect } from 'react-redux';
import UserSignUp from './presentation';
import signUp from '../../action-creators/sign-up';

const mapStateToProps = (state, props) => (
  {
  }
);

const mapDispatchToProps = (dispatch, props) => (
  {
    onSignUp: (email, password, history) => {
      dispatch(signUp({ email, password, history }));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUp);
