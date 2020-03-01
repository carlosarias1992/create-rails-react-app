import * as UsersApi from "../../api_requests/users";
import { loginAction } from "./session";
import { receiveErrorsAction } from "./index";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

// @ts-ignore
export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const signup = (user: any) => (
  dispatch: (arg0: { type: string; user: any }) => void
) => {
  return (
    UsersApi.signup(user)
      .then(response => dispatch(loginAction(response.data)))
      // @ts-ignore
      .catch(response => dispatch(receiveErrorsAction(response)))
  );
};

export const fetchUser = (id: any) => (
  dispatch: (arg0: { type: string; user: any }) => void
) => {
  return (
    UsersApi.fetchUser(id)
      .then(response => dispatch(receiveUser(response.data)))
      // @ts-ignore
      .catch(response => dispatch(receiveErrorsAction(response)))
  );
};

export const updateUser = (user: { id: any }) => (
  dispatch: (arg0: { type: string; user: any }) => void
) => {
  return (
    UsersApi.updateUser(user)
      .then(editedUser => dispatch(receiveUser(editedUser)))
      // @ts-ignore
      .catch(response => dispatch(receiveErrorsAction(response)))
  );
};
