import * as SessionApi from "../../api_requests/sessions";
import { receiveErrorsAction } from "./index";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginAction = (
  // @ts-ignore
  user
) => {
  return {
    type: LOGIN,
    user
  };
};

// @ts-ignore
const logoutAction = () => {
  return {
    type: LOGOUT
  };
};

export const login = (user: any) => async (
  dispatch: (arg0: { type: string; users: any }) => void
) => {
  return (
    SessionApi.login(user)
      .then(response => {
        // @ts-ignore
        dispatch(loginAction(response.data));
      })
      // @ts-ignore
      .catch((response: any) => dispatch(receiveErrorsAction(response)))
  );
};

export const logout = () => (
  dispatch: (arg0: { type: string; user: any }) => void
) => {
  return (
    SessionApi.logout()
      // @ts-ignore
      .then(() => dispatch(logoutAction()))
      // @ts-ignore
      .catch((response: any) => dispatch(receiveErrorsAction(response)))
  );
};
