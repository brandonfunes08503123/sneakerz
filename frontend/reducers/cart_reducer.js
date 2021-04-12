import { GET_CART } from "../actions/cart_actions";

//  ADD_ITEM_TO_CART,
// case ADD_ITEM_TO_CART:
//   return [...state, action.cartItem];

const cartReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case GET_CART:
      return action.cart;

    default:
      return state;
  }
};

export default cartReducer;
