import React from "react";
import "./Records.css";

import HeaderButton from "../components/HeaderButton";
import FlagIcon from "@material-ui/icons/Flag";

const Records = (props) => {
  return (
    <div className="records">
      <div className="records__header">
        <HeaderButton text="home" />
        <HeaderButton text="logout" logout={props.logout} />
      </div>
      <div className="records__title">
        <FlagIcon className="records__icon" style={{ fontSize: 100 }} />
      </div>
      <div className="records__data">
        <div className="records__data__label">
          <p className="records__data__label--exercise">Exercise</p>
          <p className="records__data__label--weight">Weight</p>
        </div>
      </div>
    </div>
  );
};

export default Records;
