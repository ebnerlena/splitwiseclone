const fetchUsersActionCreator = () => async (dispatch, _, { getFirebase }) => {
  await getFirebase().promiseEvents([
    { path: 'users' },
  ]);
};

export default fetchUsersActionCreator;
