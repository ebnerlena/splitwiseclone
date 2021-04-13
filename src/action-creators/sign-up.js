import { auth } from '../firebase';

const signUp = ({ email, password, history }) => async (dispatch) => {
  try {
    const response = await auth.createUserWithEmailAndPassword(email, password);
    // auth.signInWithEmailAndPassword(email, password)
    const token = response.user.refreshToken;
    dispatch({
      type: 'user/signedUp',
      payload: { token },
    });

    history.push('/money-transactions');
  } catch (exp) {
    console.log(exp);
    dispatch({
      type: 'user/signedUp/error',
      payload: { exp },
    });
  }
};

export default signUp;
