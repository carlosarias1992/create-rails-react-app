import axios from "axios";

export const signupUser = user => {
  return axios.post("/api/users", user);
};

export const loginUser = user => {
  return axios.post("/api/session", user);
};

export const logoutUser = () => {
  return axios.delete("/api/session");
};
