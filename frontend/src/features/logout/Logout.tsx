import React from "react";

const Logout = props => {
  return (
    <div>
      Welcome back, {props.currentUser?.username}!
      <button onClick={props.logout}>Logout</button>
    </div>
  );
};

export default Logout;
