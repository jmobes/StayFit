import React from "react";

import "./HomeLogout.css";
import HeaderButton from "./HeaderButton";

const HomeLogout = (props) => {
  return (
    <div className="homelogout">
      {props.token ? (
        <>
          <HeaderButton text="home" />
          <HeaderButton text="logout" logout={props.logout} />{" "}
        </>
      ) : null}
    </div>
  );
};

export default HomeLogout;
