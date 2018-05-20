//TYPES

export const GET_ORDERS = 'GET_ORDERS';
export const GET_ORDERS_FAILED = 'GET_ORDERS_FAILED';
export const GET_ORDERS_SUCCEEDED = 'GET_ORDERS_SUCCEEDED';

//REDUCER
const orders = (state = [], action) => {
  switch (action.type) {
    case GET_ORDERS_SUCCEEDED: return action.orders;
    default: return state;
  }
}

//ACTIONS
export const getOrders = (selectedCurrency) => {
  return { type: GET_ORDERS, selectedCurrency: selectedCurrency };
}

export default orders;