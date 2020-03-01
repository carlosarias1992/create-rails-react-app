import { combineReducers } from "redux";
import sessionReducer from "./session";
import usersReducer from "./users";

const errorsReducer = combineReducers({
  session: sessionReducer,
  users: usersReducer
});

export default errorsReducer;
