import { combineReducers } from 'redux';
import currencies from './currencies';
import main from './main';

const rootReducer = combineReducers({
  currencies,
  main,
});

export default rootReducer;
