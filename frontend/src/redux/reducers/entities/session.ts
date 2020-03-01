import { merge } from "lodash";
import { LOGIN, LOGOUT } from "../../actions/session";

export default (state = {}, action) => {
  const oldState = Object.freeze(state);
  let newState;

  switch (action.type) {
    case LOGIN:
      newState = { currentUser: action.user };
      return merge({}, oldState, newState);
    case LOGOUT:
      newState = merge({}, oldState);
      delete newState.currentUser;
      return newState;
    default:
      return state;
  }
};
