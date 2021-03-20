// get all shoes

export const getAllShoes = () =>
  $.ajax({
    url: "/api/sneakers",
  });

export const getShoe = (skuId) =>
  $.ajax({
    url: `/api/sneakers/${skuId}`,
  });
