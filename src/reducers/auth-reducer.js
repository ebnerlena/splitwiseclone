const initialState = [];

const removeErrorMessages = (state) => state.filter((e) => !e.signInError && !e.signUpError);

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'user/signedUp':
      state = removeErrorMessages(state);
      return [state, action.payload];
    case 'user/signedIn':
      state = removeErrorMessages(state);
      return [state, action.payload];
    case 'user/signedOut':
      return initialState;
    case 'user/signedUp/error':
      return [...state, action.payload];
    case 'user/signedIn/error':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default AuthReducer;
