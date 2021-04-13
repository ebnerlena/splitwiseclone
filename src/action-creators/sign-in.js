import { auth } from '../firebase';

const signIn = ({ email, password, history }) => async (dispatch) => {
  try {
    const response = auth.signInWithEmailAndPassword(email, password);
    console.log(response);
    const token = (await response).user.refreshToken;

    dispatch(
      {
        type: 'user/signedIn',
        payload: { token },
      },
    );
    history.push('money-transactions');
  } catch (exp) {
    dispatch(
      {
        type: 'user/signedIn/error',
        payload: { exp },
      },
    );
  }
};

export default signIn;
