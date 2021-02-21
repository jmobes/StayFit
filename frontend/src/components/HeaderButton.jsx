import React from "react";
import { withRouter } from "react-router-dom";
import "./HeaderButton.css";

const HeaderButton = (props) => {
  return (
    <button
      onClick={() => {
        props.logout && props.logout();
        props.history.push(props.logout ? "/login" : "/");
      }}
      className="header__button"
    >
      {props.text}
    </button>
  );
};

export default withRouter(HeaderButton);
