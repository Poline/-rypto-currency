//TYPES

export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_FAILED = 'GET_CURRENCIES_FAILED';
export const GET_CURRENCIES_SUCCEEDED = 'GET_CURRENCIES_SUCCEEDED';

//REDUCER
const currencies = (state = [], action) => {
  switch (action.type) {
    case GET_CURRENCIES_SUCCEEDED: return action.currencies;
    default: return state;
  }
}

//ACTIONS
export const getCurrencies = () => {
  return { type: GET_CURRENCIES };
}

export default currencies;