import React from "react";
import LoginForm from "../components/LoginForm";

import "./Login.css";

const Login = () => {
  return (
    <>
      <h1 className="title">
        <span className="title__text title__text--1">Stay Fi</span>
        <span className="title__text title__text--2">T</span>
      </h1>
      <LoginForm />
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
