import React, { useState } from "react";
import Login from "../login";
import Register from "../register";

const Home = (props: any) => {
  const [toLoginPage, setToLoginPage] = useState(false);

  return (
    <>
      {toLoginPage ? (
        <Login {...props} setToLoginPage={setToLoginPage} />
      ) : (
        <Register {...props} setToLoginPage={setToLoginPage} />
      )}
    </>
  );
};

export default Home;
