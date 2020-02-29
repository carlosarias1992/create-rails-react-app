import { merge } from "lodash";
import { RECEIVE_SESSION_DATA, RECEIVE_USER } from "../../actions/users";

export default (
  state = {},
  action: { type: any; user: { id: any }; users: any }
) => {
  const oldState = Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SESSION_DATA:
      newState = action.users;
      return merge({}, oldState, newState);
    case RECEIVE_USER:
      newState = { [action.user.id]: action.user };
      return merge({}, oldState, newState);
    default:
      return state;
  }
};
