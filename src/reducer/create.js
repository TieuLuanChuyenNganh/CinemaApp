import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
//import reduxThunkMiddleware from 'redux-thunk';
//import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';
import createLogger from 'redux-logger';
//import mySaga from '@src/sagas/sagas';
import { Router } from 'react-native-router-flux';

// create the saga middleware
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })


 const enhancer = 
// (true) ?
//   composeWithDevTools(
//     applyMiddleware(
//       //reduxThunkMiddleware,
//       // Reactotron.reduxMiddleware,
//       sagaMiddleware,
//       //storeMiddleware
//     )
//   )
// :
  compose(
    applyMiddleware(
      //reduxThunkMiddleware,
      // Reactotron.reduxMiddleware,
      //sagaMiddleware,
      loggerMiddleware
      //storeMiddleware
    )
  );




export default function configureStore(initialState): Store {
  const store = createStore(
    combineReducers({ ...reducers }),
    initialState,
    enhancer
  );  
  sagaMiddleware.run(mySaga);
  //Reactotron.addReduxStore(store);
  return store
}
