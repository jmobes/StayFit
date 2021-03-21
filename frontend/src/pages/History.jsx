import React, { useState } from "react";

import Calendar from "react-calendar";
import "./History.css";
import HistoryIcon from "@material-ui/icons/History";
import HeaderButton from "../components/HeaderButton";

const History = (props) => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="history">
      <div className="history__header">
        <HeaderButton text="home" />
        <HeaderButton text="logout" logout={props.logout} />
      </div>
      <div className="history__icon">
        <HistoryIcon style={{ fontSize: 100 }} />
      </div>
      <div className="history__calendar">
        <Calendar
          onChange={onChange}
          value={value}
          className="bg-gray"
          tileClassName="bg-green"
        />
      </div>
    </div>
  );
};

export default History;
