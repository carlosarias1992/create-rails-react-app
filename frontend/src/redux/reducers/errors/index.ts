import { combineReducers } from "redux";
import sessionReducer from "./session";

const errorsReducer = combineReducers({
  session: sessionReducer
});

export default errorsReducer;
