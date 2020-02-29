import React from "react";
import { logout } from "../../api_requests/sessions";

const logoutCurrentUser = () =>
  logout().then(() => localStorage.removeItem("currentUser"));

const Home = () => {
  return (
    <>
      <h1>Welcome to my website</h1>
      <button onClick={logoutCurrentUser}>Logout</button>
    </>
  );
};

export default Home;
