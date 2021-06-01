import React from "react";

import "./HomeLogout.css";
import HeaderButton from "./HeaderButton";

const HomeLogout = (props) => {
  return (
    <div className="homelogout">
      <HeaderButton text="home" logout={props.logout} />
      <HeaderButton text="logout" logout={props.logout} />
    </div>
  );
};

export default HomeLogout;
