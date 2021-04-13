const initialState = [];

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'user/signedUp':
      return [...state, action.payload];
    case 'user/signedIn':
      return [...state, action.payload];
    case 'user/signedOut':
      return initialState;
    default:
      return state;
  }
};

export default AuthReducer;
