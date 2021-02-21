import React from "react";
import "./Login.css";

import LoginForm from "../components/LoginForm";
import Spinner from "../components/Spinner";

const Login = (props) => {
  return (
    <>
      <Spinner />
      <h1 className="title">
        <span className="title__text title__text--1">Stay Fi</span>
        <span className="title__text title__text--2">T</span>
      </h1>
      <LoginForm login={props.login} />
      <p className="login__guest">
        Login as <span className="login__guest--text">GUEST</span>
      </p>
      <p className="link__signup">
        Don't have an account?{" "}
        <span className="link__signup--text">Signup here</span>
      </p>
    </>
  );
};

export default Login;
