import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import sneakersReducer from "./sneakers_reducer";
import sneakerReducer from "./sneaker_reducer";
import alsoViewedReducer from "./also_viewed_reducer";
import adidasFrontPageReducer from "./adidas_front_page_reducer";
import yeezyFrontPageReducer from "./yeezy_front_page_reducer";
import sbsFrontPageReducer from "./sbs_front_page_reducer";
import jordanFrontPageReducer from "./jordan_front_page_reducer";

const entitiesReducer = combineReducers({
  adidasFrontPageCollection: adidasFrontPageReducer,
  alsoViewed: alsoViewedReducer,
  jordanFrontPageCollection: jordanFrontPageReducer,
  sbsFrontPageCollection: sbsFrontPageReducer,
  sneakers: sneakersReducer,
  sneaker: sneakerReducer,
  users: usersReducer,
  yeezyFrontPageCollection: yeezyFrontPageReducer,
});

export default entitiesReducer;
