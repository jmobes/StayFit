import React, { useState, useEffect } from "react";

import Calendar from "react-calendar";
import "./History.css";
import HistoryIcon from "@material-ui/icons/History";
import HeaderButton from "../components/HeaderButton";

const History = (props) => {
  const [value, onChange] = useState(new Date());
  const [dates, setDates] = useState();
  const [user, setUser] = useState();
  const [workout, setWorkout] = useState();
  const [error, setError] = useState();
  const [processing, setProcessing] = useState(false);

  const getDates = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.userId;
    setUser(userId);
    const dateArray = [];
    fetch(`/api/routines/${userId}`)
      .then((res) => res.json())
      .then((dates) => {
        dates.map((dateStr) => {
          if (!dateStr.date_end) return;
          const split = dateStr.date_end.split("T");
          dateArray.push(split[0]);
        });
        setDates(dateArray);
      })
      .catch((ex) => setError("Network error. Try again later."));
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    getDates();
  }, []);

  return (
    <div className="history">
      <div className="history__title">
        <HistoryIcon className="history__icon" style={{ fontSize: 100 }} />
        <h3 className="history__text">HISTORY</h3>
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
            if (processing) return;
            setProcessing(true);
            fetch(`/api/routine-data/data/${user}/${formatDate(value)}`)
              .then((res) => res.json())
              .then((data) => {
                setWorkout(data);
              })
              .catch((err) => setError("Network error. Try again later."));
            setProcessing(false);
          }}
          value={value}
          tileClassName={({ date, view }) => {
            if (!dates) return;

            if (dates.find((ele) => ele === formatDate(date))) {
              return "bg-green";
            }
          }}
        />
      </div>
      {error ? <p className="history__error">{error}</p> : null}
      <div className="history__routine">
        {workout &&
          workout.map((current, index, arr) => {
            const previous = arr[index - 1];
            const next = arr[index + 1];
            return !previous || previous.name !== current.name ? (
              <React.Fragment key={index}>
                <p className="history__routine__exercise">{current.name}</p>
                <p className="history__routine__set">{`${current.weight} x ${current.reps}`}</p>
              </React.Fragment>
            ) : (
              <p
                key={index}
                className="history__routine__set"
              >{`${current.weight} x ${current.reps}`}</p>
            );
          })}
      </div>
    </div>
  );
};

export default History;
