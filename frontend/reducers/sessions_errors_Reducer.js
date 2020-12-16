/** This file will keep track of any error messages */

import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  REMOVE_ERRORS,
} from "../actions/session_actions";

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON;
    case REMOVE_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;
