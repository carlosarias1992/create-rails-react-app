import axios from "axios";

export const createUser = (user: any) => {
  return axios.post("api/users", user);
};

export const fetchUser = (id: any) => {
  return axios.get(`api/users/${id}`);
};

export const updateUser = (user: { id: any }) => {
  return axios.patch(`api/users/${user.id}`, user);
};
