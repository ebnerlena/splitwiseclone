import { auth } from '../firebase';

const signUp = ({ email, password, history }) => async (dispatch, _, { getFirebase }) => {
  try {
    const response = await auth.createUserWithEmailAndPassword(email, password);
    // auth.signInWithEmailAndPassword(email, password)
    console.log(response);

    await getFirebase()
      .ref('users')
      .push({ email });

    console.log(response);

    /* const token = response.user.refreshToken;
    dispatch({
      type: 'user/signedUp',
      payload: { token },
    }); */

    history.push('/money-transactions');
  } catch (exp) {
    const error = exp.message;
    dispatch({
      type: 'user/signedUp/error',
      payload: { signUpError: error },
    });
  }
};

export default signUp;
