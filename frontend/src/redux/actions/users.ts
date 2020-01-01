import * as UsersApi from "../../api_requests/users";

export const RECEIVE_SESSION_DATA = "RECEIVE_SESSION_DATA";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveSessionData = ({
  users,
  posts,
  comments,
  friendRequests,
  likes
}) => {
  return {
    type: RECEIVE_SESSION_DATA,
    users,
    posts,
    comments,
    friendRequests,
    likes,
    sessionDataReceived: true
  };
};

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchSessionData = () => dispatch => {
  return UsersApi.fetchSessionData().then(payload =>
    dispatch(receiveSessionData(payload))
  );
};

export const fetchUser = id => dispatch => {
  return UsersApi.fetchUser(id).then(user => dispatch(receiveUser(user)));
};

export const updateUser = user => dispatch => {
  return UsersApi.updateUser(user).then(editedUser =>
    dispatch(receiveUser(editedUser))
  );
};
