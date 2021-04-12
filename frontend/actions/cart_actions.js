import * as APIUtil from "../util/cart_api_util";

// export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const GET_ITEMS = "GET_ITEMS";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addItemToCart = (item) => ({
  type: ADD_ITEM,
  item,
});

export const getCart = (cart) => ({
  type: GET_ITEMS,
  cart,
});

export const deleteItem = (itemId) => ({
  type: REMOVE_ITEM,
  itemId,
});

export const addToCart = (currentUser, inventoryId) => (dispatch) => {
  return APIUtil.addToCart(currentUser, inventoryId).then((item) => {
    dispatch(addItemToCart(item));
  });
};

export const getUserCart = () => (dispatch) => {
  return APIUtil.getUserCart().then((cart) => {
    dispatch(getCart(cart));
  });
};

export const removeItem = (itemId) => (dispatch) => {
  return APIUtil.removeItem(itemId).then(() => {
    dispatch(deleteItem(itemId));
  });
};
