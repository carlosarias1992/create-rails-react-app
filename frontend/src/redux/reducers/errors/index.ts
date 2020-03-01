import { merge } from "lodash";
import { RECEIVE_ERRORS } from "../../actions";

export default (state = [], action) => {
  const oldState = Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ERRORS:
      newState = merge({}, oldState);
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};
