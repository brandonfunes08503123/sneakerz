/** Responsible for combining our multiple, domain-specific reducers */

import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from "./ui_reducer";
import searchResultsReducer from "./search_results_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer,
  searchResults: searchResultsReducer,
});
export default rootReducer;
