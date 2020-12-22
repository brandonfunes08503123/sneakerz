export const OPEN_MENU_MODAL = "OPEN_MENU_MODAL";
export const CLOSE_MENU_MODAL = "CLOSE_MENU_MODAL";
export const OPEN_SEARCH_MODAL = "OPEN_SEARCH_MODAL";
export const CLOSE_SEARCH_MODAL = "CLOSE_SEARCH_MODAL";

export const openSearchModal = (value) => ({
  type: OPEN_SEARCH_MODAL,
  value,
});

export const closeSearchModal = () => ({
  type: CLOSE_SEARCH_MODAL,
});

export const openMenuModal = (value) => ({
  type: OPEN_MENU_MODAL,
  value,
});

export const closeMenuModal = () => ({
  type: CLOSE_MENU_MODAL,
});
