const initialState = [];

// selector function should be used with useSelector in component
//  use state object structure would be better with error that gets an according value
const removeErrorMessages = (state) => state.filter((e) => !e.signInError && !e.signUpError);

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'user/signedUp':
      return [removeErrorMessages(state), action.payload];
    case 'user/signedIn':
      return [removeErrorMessages(state), action.payload];
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
