import { auth } from '../firebase';

const signOut = () => async (dispatch) => {
  // token needs to be removed from state in reducer
  console.log('logging out now');
  auth.signOut();
  dispatch({ type: 'user/signedOut' });
};

export default signOut;
