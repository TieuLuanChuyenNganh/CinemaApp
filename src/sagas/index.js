import { fork, all } from 'redux-saga/effects';
import sceneChangeFlow from './sceneChange.saga';

function* rootSagas() {
  yield all([
      fork(sceneChangeFlow),
  ]);
}

export default rootSagas;
