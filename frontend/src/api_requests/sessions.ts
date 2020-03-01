import axios from "axios";

export const signup = (user: any) => {
  return axios.post("api/users", user, { withCredentials: true });
};

export const login = (user: any) => {
  return axios.post("api/session", user, { withCredentials: true });
};

export const logout = (user: any) => {
  return axios.delete("api/session", user.id);
};

export const loginStatus = (user: any) => {
  return axios.get("api/logged_in", { withCredentials: true });
};
