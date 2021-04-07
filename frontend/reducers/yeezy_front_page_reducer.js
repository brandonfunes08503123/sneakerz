import { RECEIVE_YEEZY_FRONT_PAGE_COLLECTION } from "../actions/sneakers_actions";

const yeezyFrontPageReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_YEEZY_FRONT_PAGE_COLLECTION:
      return action.sneakers;
    default:
      return state;
  }
};

export default yeezyFrontPageReducer;
