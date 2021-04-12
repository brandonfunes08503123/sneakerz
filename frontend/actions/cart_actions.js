import * as APIUtil from "../util/cart_api_util";

// export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const GET_CART = "GET_CART";

// export const addItemToCart = (cartItem) => ({
//   type: ADD_ITEM_TO_CART,
//   cartItem,
// });

export const getCart = (cart) => ({
  type: GET_CART,
  cart,
});

// export const addToCart = (currentUser, inventoryId) => (dispatch) => {
//   console.log("cart actions current user: ", currentUser);
//   console.log("cart actions inventoryId", inventoryId);
//   return APIUtil.addToCart(currentUser, inventoryId).then((cart) =>
//     dispatch(addItemToCart(cart))
//   );
// };

export const addToCart = (currentUser, inventoryId) => {
  return APIUtil.addToCart(currentUser, inventoryId);
};

export const getUserCart = () => (dispatch) => {
  return APIUtil.getUserCart().then((cart) => {
    dispatch(getCart(cart));
  });
};
