import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers/root";

/*
  To use the redux logger:
    + import ReduxLogger from "redux-logger";

    - applyMiddleware(ReduxThunk)
    + applyMiddleware(ReduxThunk, ReduxLogger)
 */

const configureStore = (preloadedState = {}) => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(ReduxThunk)
    );
};

export default configureStore;
