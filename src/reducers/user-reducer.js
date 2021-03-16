const initialState = [];

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'fetchUsers/success':
      return [...action.payload];
    case 'resetUsers':
      return initialState;
    default:
      return state;
  }
};

export default UserReducer;
