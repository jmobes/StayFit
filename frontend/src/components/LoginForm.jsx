import React, { useState } from "react";
import "./LoginForm.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="form__login">
      <div className="form__login__email">
        <MailOutlineIcon
          className="icon-email"
          style={{ fontSize: 30, color: "#fff" }}
        />
        <input
          type="email"
          className="form__login__email__input"
          placeholder="stayfit@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </div>
      <div className="form__login__password">
        <VpnKeyIcon
          className="icon-password"
          style={{ fontSize: 30, color: "#fff" }}
        />
        <input
          type="password"
          className="form__login__password__input"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </div>
      <input type="submit" value="Login" className="button__login" />
    </form>
  );
};

export default LoginForm;
