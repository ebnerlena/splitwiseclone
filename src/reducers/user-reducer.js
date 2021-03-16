const initialState = [];

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'createUsers/success':
      return [...state, ...action.payload];
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export default UserReducer;
