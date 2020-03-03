import React, { useState } from "react";
import Login from "../login/LoginContainer";
import Register from "../register/RegisterContainer";

function Home() {
    const [toLoginPage, setToLoginPage] = useState(false);

    return (
        <>
            {toLoginPage ? (
                <Login setToLoginPage={setToLoginPage} />
            ) : (
                <Register setToLoginPage={setToLoginPage} />
            )}
        </>
    );
}

export default Home;
