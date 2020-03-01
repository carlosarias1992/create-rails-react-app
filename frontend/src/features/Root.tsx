import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import Home from "./home";
import Logout from "./logout";
import logo from "../logo.svg";
import { ToastProvider, useToasts } from "react-toast-notifications";
import { loggedIn } from "../api_requests/sessions";
import { delayedIteration } from "../utils";

function renderContent(props: any) {
  // @ts-ignore
  const { currentUser } = props;
  if (currentUser) return <Logout />;
  return <Home />;
}

function Root(props: any) {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { errors } = props;
    if (errors) {
      delayedIteration(errors, (error: string) =>
        addToast(error, { appearance: "error", autoDismiss: true })
      );
    }
  }, [props.errors]);

  useEffect(() => {
    if (!props.currentUser) {
      loggedIn().then((response: any) => {
        setLoading(false);
        if (response.data.ok) {
          props.login(response.data);
        }
      });
    }
  }, [props.currentUser]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading ? <CircularProgress /> : <p>{renderContent(props)}</p>}
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
