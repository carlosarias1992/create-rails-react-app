import axios from "axios";
import { User } from "../types";

export const login = (user: User) => {
  return axios.post("api/session", user, { withCredentials: true });
};

export const signup = (user: User) => {
  return axios.post("api/users", user, { withCredentials: true });
};

export const logout = () => {
  return axios.delete("api/session", { withCredentials: true });
};

export const loggedIn = () => {
  return axios.get("api/logged_in", { withCredentials: true });
};
