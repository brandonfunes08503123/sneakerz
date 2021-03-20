import { RECEIVE_SNEAKER } from "../actions/sneakers_actions";

const sneakerReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SNEAKER:
      //   console.log("Sneaker id: ", action.sneaker.id);
      //   return Object.assign({}, state, {
      //     [action.sneaker.id]: action.sneaker,
      //   });

      return action.sneaker;
    default:
      return state;
  }
};

export default sneakerReducer;
