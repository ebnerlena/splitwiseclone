const initialState = [];

const removeErrorMessages = (state) => state.filter((e) => !e.signInError && !e.signUpError);

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'user/signedUp':
      return [removeErrorMessages(state), action.payload];
    case 'user/signedIn':
      return [removeErrorMessages(state), action.payload];
    case 'user/signedOut':
      return initialState;
    case 'auth/signedUp/error':
      return [...state, action.payload];
    case 'auth/signedIn/error':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default AuthReducer;
