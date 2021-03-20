import { RECEIEVE_ALL_SNEAKERS } from "../actions/sneakers_actions";

const sneakersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIEVE_ALL_SNEAKERS:
      return action.sneakers;
    default:
      return oldState;
  }
};

export default sneakersReducer;
