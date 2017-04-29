import {createStore} from 'redux';
import rootReducer from '../reducers/index';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

composeStoreWithMiddleware = applyMiddleware(
  promiseMiddleware(),
  logger,
  thunk
)(createStore);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composeStoreWithMiddleware);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
