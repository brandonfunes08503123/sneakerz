// get all shoes

export const getAllShoes = () =>
  $.ajax({
    url: "/api/sneakers",
  });

export const getShoe = (skuId) =>
  $.ajax({
    url: `/api/sneakers/${skuId}`,
  });

export const getAlsoViewed = (sneakerID) =>
  $.ajax({
    url: `/api/sneakers/${sneakerID}/also_viewed`,
  });

export const getAdidasFullCollection = () =>
  $.ajax({
    url: `/api/sneakers/adidas_full_collection`,
  });

export const getYeezyFullCollection = () =>
  $.ajax({
    url: `/api/sneakers/yeezy_full_collection`,
  });

export const getJordanFullCollection = () =>
  $.ajax({
    url: `/api/sneakers/jordan_full_collection`,
  });

export const getSbsFullCollection = () =>
  $.ajax({
    url: `/api/sneakers/sbs_full_collection`,
  });

export const getAdidasFrontPageCollection = () =>
  $.ajax({
    url: `/api/sneakers/adidas_front_page_collection`,
  });

export const getYeezyFrontPageCollection = () =>
  $.ajax({
    url: `/api/sneakers/yeezy_front_page_collection`,
  });

export const getJordanFrontPageCollection = () =>
  $.ajax({
    url: `/api/sneakers/jordan_front_page_collection`,
  });

export const getSbsFrontPageCollection = () =>
  $.ajax({
    url: `/api/sneakers/sbs_front_page_collection`,
  });
