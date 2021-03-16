const fetchUsersActionCreator = () => async (dispatch) => {
  dispatch({
    type: 'fetchUsers/inital',
    payload: {},
  });
  try {
    const users = await fetch('http://localhost:3001/user').then((respone) => respone.json());
    dispatch({
      type: 'fetchUsers/success',
      payload: users,
    });
  } catch (exp) {
    dispatch({
      type: 'fetchUsers/error',
      payload: { exp },
    });
  }
};

export default fetchUsersActionCreator;
