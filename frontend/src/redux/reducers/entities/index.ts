import { combineReducers } from "redux";
import usersReducer from "./users";
import sessionReducer from "./session";

const entitiesReducer = combineReducers({
  users: usersReducer,
  session: sessionReducer
});

export default entitiesReducer;
