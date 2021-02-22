import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./LoginForm.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authenticated = await props.login(email, password);
    if (authenticated) {
      props.history.push("/");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form__login">
      <div
        className={`${
          props.error ? "form__login__email error" : "form__login__email"
        }`}
      >
        <MailOutlineIcon
          className="icon-email"
          style={{ fontSize: 30, color: "#fff" }}
        />
        <input
          type="email"
          className="form__login__email__input"
          placeholder={`${props.error ? "Invalid email" : "stayfit@gmail.com"}`}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div
        className={`${
          props.error ? "form__login__password error" : "form__login__password"
        }`}
      >
        <VpnKeyIcon
          className="icon-password"
          style={{ fontSize: 30, color: "#fff" }}
        />
        <input
          type="password"
          className="form__login__password__input"
          placeholder={`${props.error ? "Invalid password" : "password"}`}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <input type="submit" value="Login" className="button__login" />
    </form>
  );
};

export default withRouter(LoginForm);
