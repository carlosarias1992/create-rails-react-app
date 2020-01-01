import { combineReducers } from "redux";
import sessionErrorsReducer from "./sessions";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer
});

export default errorsReducer;
