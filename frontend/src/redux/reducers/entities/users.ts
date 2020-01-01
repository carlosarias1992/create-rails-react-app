import { merge } from "lodash";
import { RECEIVE_CURRENT_USER } from "../../actions/sessions";
import { RECEIVE_SESSION_DATA, RECEIVE_USER } from "../../actions/users";

export default (state = {}, action) => {
  const oldState = Object.freeze(state);
  let newState, updatedUser, like, user_id;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = { [action.user.id]: action.user };
      return merge({}, oldState, newState);
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
