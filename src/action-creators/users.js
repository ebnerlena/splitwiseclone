const UsersActionCreator = () => async (dispatch) => {
  dispatch({
    type: 'createUsers/inital',
    payload: {},
  });
  try {
    const users = await fetch('http://localhost:3001/user').then((respone) => respone.json());
    dispatch({
      type: 'createUsers/success',
      payload: users,
    });
  } catch (exp) {
    dispatch({
      type: 'createUsers/error',
      payload: { exp },
    });
  }
};

export default UsersActionCreator;
