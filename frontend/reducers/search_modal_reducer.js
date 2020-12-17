import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const searchModalReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case OPEN_MODAL:
      return action.value;
    case CLOSE_MODAL:
      return [];
    default:
      return oldState;
  }
};

export default searchModalReducer;
