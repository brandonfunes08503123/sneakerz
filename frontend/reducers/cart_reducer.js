import { GET_ITEMS, REMOVE_ITEM, ADD_ITEM } from "../actions/cart_actions";

//  ADD_ITEM_TO_CART,
// case ADD_ITEM_TO_CART:
//   return [...state, action.cartItem];

const cartReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case GET_ITEMS:
      return Object.assign({}, state, action.cart);
    case ADD_ITEM:
      return Object.assign({}, state, action.item);
    case REMOVE_ITEM:
      let newState = Object.assign({}, state);
      delete newState[action.itemId];
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
