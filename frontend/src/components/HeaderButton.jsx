import React from "react";
import "./HeaderButton.css";

const HeaderButton = (props) => {
  return <button className="header__button">{props.text}</button>;
};

export default HeaderButton;
