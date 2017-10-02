import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import customMiddlewares from '../middlewares';
import rootReducers from './reducers.config';
import rootSagas from '../sagas';
import * as actions from '../actions';
import * as request from '../utils/request';
import * as constants from '../constants';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [...customMiddlewares, sagaMiddleware];

const configureStore = () => {
  let enhancers;

  if (constants.DEBUG) {
    // development env - enable dev tools
    /* eslint-disable import/no-extraneous-dependencies */
    const composeWithDevTools = require('redux-devtools-extension').composeWithDevTools;
    /* eslint-enable import/no-extraneous-dependencies */

    enhancers = composeWithDevTools(
      applyMiddleware(...middlewares),
    );
  } else {
    // production env - exclude dev tools
    enhancers = compose(
      applyMiddleware(...middlewares),
    );
  }

  const store = createStore(
    rootReducers,
    enhancers,
  );

  sagaMiddleware.run(rootSagas);
  request.setStore(store);
  store.dispatch(actions.loadInitialStateRequest());
  return store;
};

export default configureStore();
