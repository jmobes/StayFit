import React, { useState, useEffect } from "react";

import "./Progress.css";
import HeaderButton from "../components/HeaderButton";
import TimelineIcon from "@material-ui/icons/Timeline";
import Chart from "../components/Chart";
import AddIcon from "@material-ui/icons/Add";

const Progress = (props) => {
  const [exercises, setExercises] = useState();
  const [showExercises, setShowExercises] = useState(false);

  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return;
    }
    const userId = user.userId;
    console.log("USER_ID RETRIEVED: ", userId);

    const result = await fetch(`http://localhost:5000/api/max/${userId}`);
    const data = await result.json();
    console.log("DATA: ", data);
    setExercises(data);
  }, []);

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
      <div
        onClick={() => setShowExercises(true)}
        className="progress__select__exercise"
      >
        <p className="progress__select__exercise--text">select exercise</p>
        <AddIcon className="progress__select__icon" style={{ fontSize: 30 }} />
      </div>
      {/* {exercises &&
        showExercises && <div className="progress__exercise__list">
        <div
          onClick={() => setShowExercises(false)}
          className="progress__exercise__cancel"
        >
          cancel
        </div>
        exercises.map((exercise) => {
          return <p className="progress__exercise">{exercise.name}</p>;
        })
        </div>
      } */}
      {exercises && showExercises && (
        <div className="progress__exercise__container">
          <div className="progress__exercise__cancel">
            <span onClick={() => setShowExercises(false)}>cancel</span>
          </div>
          <div className="progress__exercise__list">
            {exercises.map((exercise) => {
              return <p className="progress__exercise">{exercise.name}</p>;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Progress;
