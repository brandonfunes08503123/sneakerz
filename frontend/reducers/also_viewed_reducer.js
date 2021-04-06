import { RECEIVE_ALSO_VIEWED_SNEAKERS } from "../actions/sneakers_actions";

const sneakerReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALSO_VIEWED_SNEAKERS:
      return action.alsoViewedSneakers;
    default:
      return state;
  }
};

export default sneakerReducer;
