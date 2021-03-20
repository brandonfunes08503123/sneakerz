import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import sneakersReducer from "./sneakers_reducer";
import sneakerReducer from "./sneaker_reducer";

const entitiesReducer = combineReducers({
  sneakers: sneakersReducer,
  sneaker: sneakerReducer,
  users: usersReducer,
});

export default entitiesReducer;
