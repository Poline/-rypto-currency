import { fork, all } from 'redux-saga/effects';
import currenciesSaga from './currencies';
import ordersSaga from './orders';

export default function* rootSaga() {
  yield all([fork(currenciesSaga), fork(ordersSaga)]);
}
