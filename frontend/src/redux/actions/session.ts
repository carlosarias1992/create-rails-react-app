import * as SessionApi from "../../apiRequests/sessions";
import { receiveErrorsAction } from "./index";
import { User } from "../../types";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginAction = (user: User): { type: string; user: User } => {
    return {
        type: LOGIN,
        user
    };
};

export const logoutAction = (): { type: string } => {
    return {
        type: LOGOUT
    };
};

export const login = (user: User) => (dispatch: any) =>
    SessionApi.login(user)
        .then(response => {
            dispatch(loginAction(response.data));
        })
        .catch((response: any) => dispatch(receiveErrorsAction(response)));

export const logout = () => (dispatch: any) =>
    SessionApi.logout()
        .then(() => dispatch(logoutAction()))
        .catch((response: any) => dispatch(receiveErrorsAction(response)));

export const signup = (user: User) => (dispatch: any) =>
    SessionApi.signup(user)
        .then(response => dispatch(loginAction(response.data)))
        // @ts-ignore
        .catch(response => dispatch(receiveErrorsAction(response)));
