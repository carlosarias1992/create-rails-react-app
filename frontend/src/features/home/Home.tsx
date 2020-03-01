import React, { useState } from "react";
import Login from "../login/LoginContainer";
import Register from "../register/RegisterContainer";

function Home(props) {
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
}

export default Home;
