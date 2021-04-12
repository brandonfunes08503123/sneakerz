export const addToCart = (currentUser, inventoryId) =>
  $.ajax({
    method: "POST",
    url: "/api/cart_products",
    data: {
      user_id: currentUser,
      inventory_id: inventoryId,
    },
  });

export const getUserCart = () =>
  $.ajax({
    url: "/api/cart_products",
  });
