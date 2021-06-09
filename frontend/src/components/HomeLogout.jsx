import React from "react";

import "./HomeLogout.css";
import HeaderButton from "./HeaderButton";

const HomeLogout = (props) => {
  return (
    <div className="homelogout">
      <HeaderButton text="home" />
      {props.token ? (
        <HeaderButton text="logout" logout={props.logout} />
      ) : null}
    </div>
  );
};

export default HomeLogout;
