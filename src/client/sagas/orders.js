import { put, takeEvery } from 'redux-saga/effects';
import {
  GET_ORDERS,
  GET_ORDERS_SUCCEEDED,
  GET_ORDERS_FAILED,
} from '../reducers/orders';

function* getOrders({ selectedCurrency }) {
  try {
    const orders = yield fetch(`https://poloniex.com/public?command=returnLoanOrders&currency=${selectedCurrency}`)
      .then(res => res.json())
      .catch(e => {
        throw new Error(e.message);
      });
    yield put({type: GET_ORDERS_SUCCEEDED, orders});
  } catch (e) {
    console.log(e.message);
    yield put({type: GET_ORDERS_FAILED});
    return;
  }
}

function* ordersSaga() {
  yield takeEvery(GET_ORDERS, getOrders);
}

export default ordersSaga;
