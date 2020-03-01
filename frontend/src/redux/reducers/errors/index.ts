import { merge } from "lodash";
import { RECEIVE_ERRORS } from "../../actions";

export default (
  state = [],
  action: { type: any; user: { id: any }; users: any }
) => {
  const oldState = Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ERRORS:
      const newState = merge({}, oldState);
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};
