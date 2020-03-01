import * as UsersApi from "../../api_requests/users";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

// @ts-ignore
const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

// @ts-ignore
const receiveUserErrorsAction = ({ response }) => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors: response.data?.errors || [
      "Something went wrong. Try again shortly."
    ]
  };
};

export const signup = (user: any) => (
  dispatch: (arg0: { type: string; user: any }) => void
) => {
  return (
    UsersApi.createUser(user)
      .then(user => dispatch(receiveUser(user)))
      // @ts-ignore
      .catch(response => dispatch(receiveUserErrorsAction(response)))
  );
};

export const fetchUser = (id: any) => (
  dispatch: (arg0: { type: string; user: any }) => void
) => {
  return (
    UsersApi.fetchUser(id)
      .then(user => dispatch(receiveUser(user)))
      // @ts-ignore
      .catch(response => dispatch(receiveUserErrorsAction(response)))
  );
};

export const updateUser = (user: { id: any }) => (
  dispatch: (arg0: { type: string; user: any }) => void
) => {
  return (
    UsersApi.updateUser(user)
      .then(editedUser => dispatch(receiveUser(editedUser)))
      // @ts-ignore
      .catch(response => dispatch(receiveUserErrorsAction(response)))
  );
};
