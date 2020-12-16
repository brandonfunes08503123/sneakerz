import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const modalReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case OPEN_MODAL:
      console.log("MADE IT");
      return action.value;
    case CLOSE_MODAL:
      return [];
    default:
      return oldState;
  }
};

export default modalReducer;
