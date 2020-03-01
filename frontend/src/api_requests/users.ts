import axios from "axios";

export const signup = (user: any) => {
  return axios.post("api/users", user, { withCredentials: true });
};

export const fetchUser = (id: any) => {
  return axios.get(`api/users/${id}`, { withCredentials: true });
};

export const updateUser = (user: { id: any }) => {
  return axios.patch(`api/users/${user.id}`, user, { withCredentials: true });
};
