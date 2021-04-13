/** Responsible for combining our multiple, domain-specific reducers */

import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from "./ui_reducer";
import searchResultsReducer from "./search_results_reducer";

/**
 * goal is to clear cart state when user logs out
 */

const appReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer,
  searchResults: searchResultsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_CURRENT_USER") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
