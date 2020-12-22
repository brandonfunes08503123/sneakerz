export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (value) => ({
  type: OPEN_MODAL,
  value,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
