import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

import "./Signup.css";
import PersonIcon from "@material-ui/icons/Person";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameBlur, setUsernameBlur] = useState(false);
  const [emailBlur, setEmailBlur] = useState(false);
  const [passwordBlur, setPasswordBlur] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("Please fill out all fields");
      return;
    }
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    };

    try {
      const res = await fetch("http://localhost:5000/api/users", options);
      const user = await res.json();
      if (!res.ok) {
        throw new Error(user);
      }
      props.history.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h1 className="title">
        <span className="title__text title__text--1">Stay Fi</span>
        <span className="title__text title__text--2">T</span>
      </h1>
      <form onSubmit={handleSubmit} className="form__signup">
        <div
          className={`${
            !username && usernameBlur
              ? "form__signup__username form__signup__error"
              : "form__signup__username"
          }`}
        >
          <PersonIcon
            className="icon-person"
            style={{ fontSize: 30, color: "#fff" }}
          />
          <input
            type="text"
            className="form__signup__username__input"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
            onBlur={() => setUsernameBlur(true)}
          />
        </div>
        <div
          className={`${
            !email && emailBlur
              ? "form__signup__email form__signup__error"
              : "form__signup__email"
          }`}
        >
          <MailOutlineIcon
            className="icon-email"
            style={{ fontSize: 30, color: "#fff" }}
          />
          <input
            type="email"
            className="form__signup__email__input"
            placeholder="stayfit@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            onBlur={() => setEmailBlur(true)}
          />
        </div>
        <div
          className={`${
            !password && passwordBlur
              ? "form__signup__password form__signup__error"
              : "form__signup__password"
          }`}
        >
          <VpnKeyIcon
            className="icon-password"
            style={{ fontSize: 30, color: "#fff" }}
          />
          <input
            type="password"
            className="form__signup__password__input"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            onBlur={() => setPasswordBlur(true)}
          />
        </div>
        {error && <p className="signup__error">{error}</p>}
        <input type="submit" value="Signup" className="button__signup" />
      </form>
      <Link to="/login">
        <p className="signup__cancel">Back to Login</p>
      </Link>
    </>
  );
};

export default withRouter(Signup);
