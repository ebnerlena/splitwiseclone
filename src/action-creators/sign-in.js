import { auth } from '../firebase';

const signIn = ({ email, password, history }) => async (dispatch) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    history.push('money-transactions');
  } catch (exp) {
    const error = exp.message;
    dispatch(
      {
        type: 'auth/signedIn/error',
        payload: { signInError: error },
      },
    );
  }
};

export default signIn;
