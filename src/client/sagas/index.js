import { fork, all } from 'redux-saga/effects';
import currenciesSaga from './currencies';

export default function* rootSaga() {
  yield all([fork(currenciesSaga)]);
}
