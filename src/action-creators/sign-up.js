import { auth } from '../firebase';

const signUp = ({ email, password, history }) => async (dispatch, _, { getFirebase }) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);

    await getFirebase()
      .ref('users')
      .push({ email });

    history.push('/money-transactions');
  } catch (exp) {
    const error = exp.message;
    dispatch({
      type: 'auth/signedUp/error',
      payload: { signUpError: error },
    });
  }
};

export default signUp;
