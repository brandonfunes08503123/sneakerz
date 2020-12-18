import {
  OPEN_SEARCH_MODAL,
  CLOSE_SEARCH_MODAL,
} from "../actions/modal_actions";

const searchModalReducer = (oldState = "", action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case OPEN_SEARCH_MODAL:
      return action.value;
    case CLOSE_SEARCH_MODAL:
      return [];
    default:
      return oldState;
  }
};

export default searchModalReducer;
