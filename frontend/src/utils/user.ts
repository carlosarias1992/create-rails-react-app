export const loggedIn = (): boolean => {
  const token = JSON.parse(localStorage.getItem("token") as string);
  return Boolean(token);
};
