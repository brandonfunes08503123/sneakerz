/** This file will be responsible for combining our reducers
 *  that handle errors
 */

<<<<<<< HEAD
import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
=======
import { combineReducers } from 'redux';
import sessionErrorsReducer from './sessions_errors_reducer';
>>>>>>> 7296f746f9e9d1371f7b3a12bbc1e54886645aa5

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
});

export default errorsReducer;
