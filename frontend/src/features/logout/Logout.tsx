import React from "react";
import { Button } from "@material-ui/core";

const Logout = props => {
  return (
    <>
      <p>Welcome back, {props.currentUser?.username}!</p>
      <Button onClick={props.logout}>Logout</Button>
    </>
  );
};

export default Logout;
