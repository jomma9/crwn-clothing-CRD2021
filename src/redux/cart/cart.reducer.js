const { act } = require('react-dom/test-utils');
const { default: CartActionTypes } = require('./cart.types');

const INITIAL_STATE = {
  hidden: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGLLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
