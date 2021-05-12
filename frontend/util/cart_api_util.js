export const addToCart = (currentUser, inventoryId) =>
  $.ajax({
    method: "POST",
    url: "/api/cart_products",
    data: {
      user_id: currentUser,
      inventory_id: inventoryId,
    },
  });

// cart_product deconstructs currentuser and inventoryId
// ajax call passes one object

export const getUserCart = () =>
  $.ajax({
    url: "/api/cart_products",
  });

export const removeItem = (itemId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/cart_products/${itemId}`,
  });
