/** Responsible for combining our multiple, domain-specific reducers */

import { combineReducers } from "redux";
<<<<<<< HEAD:frontend/reducers/root_reducer.js
import sessionReducer from "./session_Reducer";
import entitiesReducer from "./entities_Reducer";
import errorsReducer from "./errorsReducer";
import uiReducer from "./ui_Reducer";
=======
import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from "./ui_reducer";
>>>>>>> search_products:Sneakerz/frontend/reducers/root_reducer.js

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer,
});
export default rootReducer;
