import * as APIUtil from "../util/cart_api_util";

export const RECEIVE_CART = "RECEIVE_CART";

export const getCart = (cart) => ({
  type: RECEIVE_CART,
  cart,
});

export const addToCart = (currentUser, inventoryId) => (dispatch) => {
  return APIUtil.addToCart(currentUser, inventoryId).then((cart) =>
    dispatch(getCart(cart))
  );
};
