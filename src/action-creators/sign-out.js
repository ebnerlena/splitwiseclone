import { auth } from '../firebase';

const signOut = () => async (dispatch) => {
  console.log(' i got called');
  // no http call required (token needs to be removed from state in reducer)
  auth.signOut();
  dispatch({ type: 'user/signedOut' });
};

export default signOut;
