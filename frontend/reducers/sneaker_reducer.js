import { RECEIVE_SNEAKER } from "../actions/sneakers_actions";

const alsoViewedReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SNEAKER:
      return action.sneaker;
    default:
      return state;
  }
};

export default alsoViewedReducer;
