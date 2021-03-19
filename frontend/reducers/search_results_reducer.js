import { SEARCH_RESULT, NO_RESULT } from "../actions/search_actions";

const searchResultReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case SEARCH_RESULT:
      return action.sneakerRes;
    case NO_RESULT:
      return action.noResultStr;
    default:
      return state;
  }
};

export default searchResultReducer;
