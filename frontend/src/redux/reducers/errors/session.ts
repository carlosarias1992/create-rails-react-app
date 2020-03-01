import { merge } from "lodash";
import { RECEIVE_SESSION_ERRORS } from "../../actions/session";

export default (
  state = {},
  action: { type: any; user: { id: any }; users: any }
) => {
  const oldState = Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      newState = { errors: action.errors };
      return merge({}, oldState, newState);
    default:
      return state;
  }
};
