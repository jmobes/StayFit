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
    </>
  );
};

export default Login;
