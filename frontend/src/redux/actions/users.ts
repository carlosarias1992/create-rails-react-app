import * as UsersApi from "../../api_requests/users";

export const RECEIVE_SESSION_DATA = "RECEIVE_SESSION_DATA";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveSessionData = ({
  // @ts-ignore
  users
}) => {
  return {
    type: RECEIVE_SESSION_DATA,
    users,
    sessionDataReceived: true
  };
};

// @ts-ignore
const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchSessionData = () => async (
  dispatch: (arg0: { type: string; users: any }) => void
) => {
  const payload = await UsersApi.fetchSessionData();
  // @ts-ignore
  return dispatch(receiveSessionData(payload));
};

export const fetchUser = (id: any) => (
  dispatch: (arg0: { type: string; user: any }) => void
) => {
  return UsersApi.fetchUser(id).then(user => dispatch(receiveUser(user)));
};

export const updateUser = (user: { id: any }) => (
  dispatch: (arg0: { type: string; user: any }) => void
) => {
  return UsersApi.updateUser(user).then(editedUser =>
    dispatch(receiveUser(editedUser))
  );
};
