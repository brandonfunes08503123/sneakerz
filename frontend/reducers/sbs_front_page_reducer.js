import { RECEIVE_SBS_FRONT_PAGE_COLLECTION } from "../actions/sneakers_actions";

const sbsFrontPageReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SBS_FRONT_PAGE_COLLECTION:
      return action.sneakers;
    default:
      return state;
  }
};

export default sbsFrontPageReducer;
