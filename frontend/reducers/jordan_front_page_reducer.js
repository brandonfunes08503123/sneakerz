import { RECEIVE_JORDAN_FRONT_PAGE_COLLECTION } from "../actions/sneakers_actions";

const jordanFrontPageReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_JORDAN_FRONT_PAGE_COLLECTION:
      return action.sneakers;
    default:
      return state;
  }
};

export default jordanFrontPageReducer;
