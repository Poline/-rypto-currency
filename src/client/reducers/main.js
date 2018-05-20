//TYPES

export const CHANGE_SELECTED_CURRENCY = 'CHANGE_SELECTED_CURRENCY';

//REDUCER
const main = (state = [], action) => {
  switch (action.type) {
    case CHANGE_SELECTED_CURRENCY: return {selectedCurrency: action.selectedCurrency};
    default: return state;
  }
}

//ACTIONS
export const changeSelectedCurrency = (selectedCurrency) => {
  return { type: CHANGE_SELECTED_CURRENCY, selectedCurrency };
}

export default main;