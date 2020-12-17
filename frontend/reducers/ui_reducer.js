import { combineReducers } from "redux";
import searchModalReducer from "./search_modal_reducer";
import menuModalReducer from "./menu_modal_reducer";

const uiReducer = combineReducers({
  search: searchModalReducer,
  menu: menuModalReducer,
});

export default uiReducer;
