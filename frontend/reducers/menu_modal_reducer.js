import { OPEN_MENU_MODAL, CLOSE_MENU_MODAL } from "../actions/modal_actions";

const menuModalReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case OPEN_MENU_MODAL:
      return action.value;
    case CLOSE_MENU_MODAL:
      return [];
    default:
      return oldState;
  }
};

export default menuModalReducer;
