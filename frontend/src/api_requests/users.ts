import axios from "axios";

export const fetchSessionData = () => {
  return axios.get("api/users");
};

export const fetchUser = id => {
  return axios.get(`api/users/${id}`);
};

export const updateUser = user => {
  return axios.patch(`api/users/${user.id}`, user);
};
