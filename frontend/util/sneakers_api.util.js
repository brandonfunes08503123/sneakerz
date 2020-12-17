// get all shoes

export const getAllShoes = () =>
  $.ajax({
    url: "/api/sneakers",
  });

export const getShoe = (sneakerId) =>
  $.ajax({
    url: `/api/sneakers/${sneakerId}`,
  });
