/** Responsible for combining our multiple, domain-specific reducers */

import { combineReducers } from "redux";
import sessionReducer from "./session_Reducer";
import entitiesReducer from "./entities_Reducer";
import errorsReducer from "./errorsReducer";
import uiReducer from "./ui_Reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer,
});
export default rootReducer;
