import { RECEIVE_SNEAKER, REMOVE_SNEAKER } from "../actions/sneakers_actions";

const sneakerReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SNEAKER:
      return action.sneaker;
    default:
      return state;
  }
};

export default sneakerReducer;
