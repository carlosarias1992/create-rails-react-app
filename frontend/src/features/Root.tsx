import React, { useEffect } from "react";
import Home from "./home";
import Logout from "./logout";
import logo from "../logo.svg";
import { ToastProvider, useToasts } from "react-toast-notifications";

function renderContent(props: any) {
  // @ts-ignore
  const { currentUser } = props;
  if (currentUser) return <Logout />;
  return <Home />;
}

function delayedIteration(
  iterableArray: any[],
  callback: CallableFunction,
  duration = 400,
  index = 0
) {
  if (index >= iterableArray.length) return;

  callback(iterableArray[index]);

  index += 1;
  setTimeout(
    delayedIteration.bind({}, iterableArray, callback, duration, index),
    duration
  );
}

function Root(props: any) {
  const { addToast } = useToasts();

  useEffect(() => {
    const { errors } = props;
    if (errors) {
      delayedIteration(errors, (error: string) =>
        addToast(error, { appearance: "error", autoDismiss: true })
      );
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
    <ToastProvider transitionDuration={500}>
      <Root {...props} />
    </ToastProvider>
  );
}

export default RootWrapper;
