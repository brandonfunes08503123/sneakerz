/** This file will be responsible for combining our reducers
 *  that handle errors
 */

<<<<<<< HEAD:frontend/reducers/errorsReducer.js
import { combineReducers } from 'redux';
import sessionErrorsReducer from './sessions_errors_Reducer';
=======
import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
>>>>>>> search_products:frontend/reducers/errors_reducer.js

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
});

export default errorsReducer;
