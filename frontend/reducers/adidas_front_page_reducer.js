import { RECEIVE_ADIDAS_FRONT_PAGE_COLLECTION } from "../actions/sneakers_actions";

const adidasFrontPageReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ADIDAS_FRONT_PAGE_COLLECTION:
      return action.sneakers;
    default:
      return state;
  }
};

export default adidasFrontPageReducer;
