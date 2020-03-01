import React from "react";
import { logout } from "../../api_requests/sessions";

const logoutCurrentUser = (props: any) => {
  logout()
    .then(response => {
      props.handleLogout();
      props.history.push("/");
    })
    .catch(error => console.log(error));
};

const redirect = (props: any) => {
  props.history.push("/login");
};

const Home = (props: any) => {
  return (
    <>
      <h1>Welcome to my website</h1>
      {props.loggedInStatus ? (
        <button onClick={() => logoutCurrentUser(props)}>Logout</button>
      ) : (
        redirect(props)
      )}
    </>
  );
};

export default Home;
