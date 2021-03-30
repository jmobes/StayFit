import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Login.css";

import LoginForm from "../components/LoginForm";
import Spinner from "../components/Spinner";

const Login = (props) => {
  return (
    <>
      {props.loading ? <Spinner /> : null}
      <h1 className="title">
        <span className="title__text title__text--1">Stay Fi</span>
        <span className="title__text title__text--2">T</span>
      </h1>
      <LoginForm login={props.login} error={props.error} />
      <p className="login__guest">
        Login as{" "}
        <span
          onClick={async () => {
            const authenticated = await props.login("guest@guest.com", "guest");
            if (authenticated) {
              props.history.push("/");
            }
          }}
          className="login__guest--text"
        >
          GUEST
        </span>
      </p>
      <p className="link__signup">
        Don't have an account?{" "}
        <Link to="/signup">
          <span className="link__signup--text">Signup here</span>
        </Link>
      </p>
    </>
  );
};

export default withRouter(Login);
