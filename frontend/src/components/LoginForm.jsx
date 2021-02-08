import React, { useState } from "react";
import "./LoginForm.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User has signed up");
  };

  return (
    <form onSubmit={handleSubmit} className="form__login">
      <div className="form__login__email">
        <MailOutlineIcon
          className="icon-email"
          style={{ fontSize: 30, color: "#fff" }}
        />
        <input
          type="text"
          className="form__login__email__input"
          placeholder="stayfit@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
        />
      </div>
      <input type="submit" value="Login" className="button__login" />
    </form>
  );
};

export default LoginForm;
