import { put, takeEvery } from 'redux-saga/effects';
import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCEEDED,
  GET_CURRENCIES_FAILED,
} from '../reducers/currencies';

function* getCurrencies() {
  try {
    const currencies = yield fetch('https://poloniex.com/public?command=returnCurrencies')
      .then(res => res.json())
      .catch(e => {
        throw new Error(e.message);
      });
    yield put({type: GET_CURRENCIES_SUCCEEDED, currencies});
  } catch (e) {
    console.log(e.message);
    yield put({type: GET_CURRENCIES_FAILED});
    return;
  }
}

function* currenciesSaga() {
  yield takeEvery(GET_CURRENCIES, getCurrencies);
}

export default currenciesSaga;
