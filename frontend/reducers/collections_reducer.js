import {
  RECEIVE_ADIDAS_COLLECTION,
  RECEIVE_JORDAN_COLLECTION,
  RECEIVE_YEEZY_COLLECTION,
  RECEIVE_SBS_COLLECTION,
} from "../actions/sneakers_actions";

const collectionsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_JORDAN_COLLECTION:
      return action.sneakers;
    case RECEIVE_ADIDAS_COLLECTION:
      return action.sneakers;
    case RECEIVE_YEEZY_COLLECTION:
      return action.sneakers;
    case RECEIVE_SBS_COLLECTION:
      return action.sneakers;
    default:
      return state;
  }
};

export default collectionsReducer;
