import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  ),
);

export default store;
