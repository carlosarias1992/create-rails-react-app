import { combineReducers } from "redux";
import sessionReducer from "./session";

const entitiesReducer = combineReducers({
  session: sessionReducer
});

export default entitiesReducer;
