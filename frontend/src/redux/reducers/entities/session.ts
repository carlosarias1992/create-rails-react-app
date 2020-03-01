import { merge } from "lodash";
import { LOGIN, LOGOUT } from "../../actions/session";

export default (
  state = {},
  action: { type: any; user: { id: any }; users: any }
) => {
  const oldState = Object.freeze(state);
  let newState;

  switch (action.type) {
    case LOGIN:
      newState = { currentUser: action.user };
      return merge({}, oldState, newState);
    case LOGOUT:
      newState = merge({}, oldState);
      newState.currentUser = undefined;
      return newState;
    default:
      return state;
  }
};
