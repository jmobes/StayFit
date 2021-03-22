import React, { useState, useEffect } from "react";

import Calendar from "react-calendar";
import "./History.css";
import HistoryIcon from "@material-ui/icons/History";
import HeaderButton from "../components/HeaderButton";

const History = (props) => {
  const [value, onChange] = useState(new Date());
  const [dates, setDates] = useState();
  const [user, setUser] = useState();

  const getDates = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.userId;
    setUser(userId);
    const dateArray = [];
    fetch(`http://localhost:5000/api/routines/${userId}`)
      .then((res) => res.json())
      .then((dates) => {
        dates.map((dateStr) => {
          const split = dateStr.date_end.split("T");
          dateArray.push(split[0]);
        });
        console.log(dateArray);
        setDates(dateArray);
      })
      .catch((ex) => console.error(ex));
  };

  useEffect(() => {
    getDates();
  }, []);

  return (
    <div className="history">
      <div className="history__header">
        <HeaderButton text="home" />
        <HeaderButton text="logout" logout={props.logout} />
      </div>
      <div className="history__icon">
        <HistoryIcon style={{ fontSize: 100 }} />
      </div>
      <p className="history__instructions">
        Select a date to view a past routine.
      </p>
      <p className="history__instructions-2">
        Dates in <span>green</span> have exercise data
      </p>
      <div className="history__calendar">
        <Calendar
          onChange={(value, event) => {
            console.log(value);
          }}
          value={value}
          tileClassName={({ date, view }) => {
            if (!dates) return;
            const year = date.getFullYear();
            const month =
              date.getMonth() + 1 < 10
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1;
            const day =
              date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            const fullDate = `${year}-${month}-${day}`;
            if (dates.find((ele) => ele === fullDate)) {
              return "bg-green";
            }
          }}
        />
      </div>
      <div className="history__routine">
        <p className="history__message">Select a date to display data</p>
      </div>
    </div>
  );
};

export default History;
