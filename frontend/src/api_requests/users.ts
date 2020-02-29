import axios from "axios";

export const fetchSessionData = () => {
  return axios.get("api/users");
};

export const fetchUser = (id: any) => {
  return axios.get(`api/users/${id}`);
};

export const updateUser = (user: { id: any }) => {
  return axios.patch(`api/users/${user.id}`, user);
};
