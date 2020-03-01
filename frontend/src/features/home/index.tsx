import React from "react";

const logoutCurrentUser = () => {
  localStorage.removeItem("token");
};

const Home = () => {
  return (
    <>
      <h1>Welcome to my website</h1>
      <button onClick={logoutCurrentUser}>Logout</button>
    </>
  );
};

export default Home;
