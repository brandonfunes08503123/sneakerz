import { combineReducers } from "redux";
import ModalReducer from "./modal_Reducer";

const uiReducer = combineReducers({
  modal: ModalReducer,
});

export default uiReducer;
