import React, { useState } from "react";

import "./Signup.css";
import PersonIcon from "@material-ui/icons/Person";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User has signed up");
  };

  return (
    <form onSubmit={handleSubmit} className="form__signup">
      <div className="form__signup__username">
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
        />
      </div>
      <div className="form__signup__email">
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
        />
      </div>
      <div className="form__signup__password">
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
        />
      </div>
      <input type="submit" value="Signup" className="button__signup" />
    </form>
  );
};

export default Signup;
