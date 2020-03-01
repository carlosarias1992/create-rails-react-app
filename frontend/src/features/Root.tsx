import React, { useEffect, useState } from "react";
import Login from "./login";
import Logout from "./logout";
import logo from "../logo.svg";
import { ToastProvider, useToasts } from "react-toast-notifications";

function renderContent(props: any) {
  // @ts-ignore
  const { currentUser } = props;
  if (currentUser) return <Logout />;
  return <Login />;
}

function RootComponent(props: any) {
  const { addToast } = useToasts();

  useEffect(() => {
    const { errors } = props;
    if (errors) {
      errors.forEach((error: any) => {
        addToast(error, { appearance: "error", autoDismiss: true });
      });
    }
  }, [props.errors]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{renderContent(props)}</p>
      </header>
    </div>
  );
}

function RootWrapper(props: any) {
  return (
    <ToastProvider>
      <RootComponent {...props} />
    </ToastProvider>
  );
}

export default RootWrapper as Root;
