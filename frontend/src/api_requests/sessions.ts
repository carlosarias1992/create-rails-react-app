import axios from "axios";

export const signup = (user: any) => {
  return axios.post("api/users", user, { withCredentials: true });
};

export const login = (user: any) => {
  return axios.post("api/session", user, { withCredentials: true });
};

export const logout = () => {
  return axios.delete("api/session", { withCredentials: true });
};

export const loginStatus = () => {
  return axios.get("api/logged_in", { withCredentials: true });
};
