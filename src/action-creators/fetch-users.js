const fetchUsersActionCreator = () => async (dispatch, _, { getFirebase }) => {
  /* dispatch({
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
  } */
  await getFirebase().promiseEvents([
    { path: 'users' },
  ]);
};

export default fetchUsersActionCreator;
