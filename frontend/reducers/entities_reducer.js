import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import sneakersReducer from "./sneakers_reducer";

const entitiesReducer = combineReducers({
  sneakers: sneakersReducer,
  users: usersReducer,
});

export default entitiesReducer;
