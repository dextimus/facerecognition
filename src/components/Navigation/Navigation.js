import React from "react";
import "./Navigation.css";

const Navigation = (props) => {
  if (props.isSignedIn) {
    return (
      <nav>
        <p
          onClick={() => props.onRouteChange("signout")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <div>
        <nav>
          <p
            onClick={() => props.onRouteChange("signin")}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign In
          </p>
          <p
            onClick={() => props.onRouteChange("register")}
            className="f3 link dim black underline pa3 pointer"
          >
            Register
          </p>
        </nav>
      </div>
    );
  }
};

export default Navigation;
