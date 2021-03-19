export const searchShoe = (shoeStr) =>
  $.ajax({
    url: `/api/searches?query=${shoeStr}`,
  });
