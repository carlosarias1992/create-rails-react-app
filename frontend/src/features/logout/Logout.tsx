import React from "react";
import { Button } from "@material-ui/core";
import { User } from "../../types";

interface Props {
    currentUser?: User;
    logout: () => void;
}

const Logout = (props: Props) => {
    return (
        <div>
            <p>Welcome back, {props.currentUser?.username}!</p>
            <Button onClick={props.logout}>Logout</Button>
        </div>
    );
};

export default Logout;
