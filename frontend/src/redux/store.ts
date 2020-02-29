import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import ReduxLogger from "redux-logger";
import rootReducer from "./reducers/root";

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(ReduxThunk, ReduxLogger)
  );
};

export default configureStore;
