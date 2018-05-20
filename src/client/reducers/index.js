import { combineReducers } from 'redux';
import currencies from './currencies';
import main from './main';
import orders from './orders';

const rootReducer = combineReducers({
  currencies,
  main,
  orders,
});

export default rootReducer;
