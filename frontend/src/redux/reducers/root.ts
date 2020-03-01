import { combineReducers } from "redux";
import entitiesReducer from "./entities";
import errorsReducer from "./errors";

export default combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer
});
