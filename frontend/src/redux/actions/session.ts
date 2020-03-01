import * as SessionApi from "../../api_requests/sessions";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const loginAction = (
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

// @ts-ignore
const receiveSessionErrorsAction = ({ response }) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: response.data?.errors || [
      "Something went wrong. Try again shortly."
    ]
  };
};

export const login = (user: any) => async (
  dispatch: (arg0: { type: string; users: any }) => void
) => {
  return (
    SessionApi.login(user)
      .then(response => {
        console.log(response);
        // @ts-ignore
        dispatch(loginAction(response.data));
      })
      // @ts-ignore
      .catch((response: any) => dispatch(receiveSessionErrorsAction(response)))
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
      .catch((response: any) => dispatch(receiveSessionErrorsAction(response)))
  );
};
