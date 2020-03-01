import * as SessionApi from "../../apiRequests/sessions";
import { receiveErrorsAction } from "./index";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginAction = (user: any) => {
  return {
    type: LOGIN,
    user
  };
};

const logoutAction = () => {
  return {
    type: LOGOUT
  };
};

export const login = user => dispatch => {
  return SessionApi.login(user)
    .then(response => {
      dispatch(loginAction(response.data));
    })
    .catch((response: any) => dispatch(receiveErrorsAction(response)));
};

export const logout = () => dispatch => {
  return SessionApi.logout()
    .then(() => dispatch(logoutAction()))
    .catch((response: any) => dispatch(receiveErrorsAction(response)));
};

export const signup = user => dispatch => {
  return (
    SessionApi.signup(user)
      .then(response => dispatch(loginAction(response.data)))
      // @ts-ignore
      .catch(response => dispatch(receiveErrorsAction(response)))
  );
};
