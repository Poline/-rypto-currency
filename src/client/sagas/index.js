import { fork, all } from 'redux-saga/effects';
import mainSaga from './main';

export default function* rootSaga() {
  yield all([fork(mainSaga)]);
}
