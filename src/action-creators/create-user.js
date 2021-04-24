export const createUsersActionCreator = ({ username }) => async (dispatch, _, { getFirebase }) => {
  await getFirebase()
    .ref('users')
    .push({ username });
};

export default createUsersActionCreator;
