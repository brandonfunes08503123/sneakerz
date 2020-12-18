import { combineReducers } from "redux";
<<<<<<< HEAD
import ModalReducer from "./modal_reducer";

const uiReducer = combineReducers({
  modal: ModalReducer,
=======
import searchModalReducer from "./search_modal_reducer";
import menuModalReducer from "./menu_modal_reducer";

const uiReducer = combineReducers({
  search: searchModalReducer,
  menu: menuModalReducer,
>>>>>>> search_products
});

export default uiReducer;
