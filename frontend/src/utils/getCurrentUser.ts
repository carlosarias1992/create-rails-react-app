export const getCurrentUser = () =>
  JSON.parse(localStorage.getItem("currentUser") || "{}");
