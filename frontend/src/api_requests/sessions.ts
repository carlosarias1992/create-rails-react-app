import axios from "axios";

export const signup = (user: any) => {
  return axios.post("api/users", user);
};

export const login = (user: any) => {
  return axios.post("api/session", user);
};
