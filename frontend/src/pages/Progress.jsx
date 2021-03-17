import React from "react";

import "./Progress.css";
import HeaderButton from "../components/HeaderButton";
import TimelineIcon from "@material-ui/icons/Timeline";
import Chart from "../components/Chart";

const Progress = (props) => {
  return (
    <div className="progress">
      <div className="progress__header">
        <HeaderButton text="home" />
        <HeaderButton text="logout" logout={props.logout} />
      </div>
      <div className="progress__title">
        <TimelineIcon style={{ fontSize: 100 }} />
      </div>
      <Chart />
    </div>
  );
};

export default Progress;
