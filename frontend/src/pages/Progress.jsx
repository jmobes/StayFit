import React, { useState, useEffect } from "react";

import "./Progress.css";
import HeaderButton from "../components/HeaderButton";
import TimelineIcon from "@material-ui/icons/Timeline";
import Chart from "../components/Chart";
import AddIcon from "@material-ui/icons/Add";

const Progress = (props) => {
  const [exercises, setExercises] = useState();
  const [showExercises, setShowExercises] = useState(false);
  const [selected, setSelected] = useState();
  const [error, setError] = useState();

  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return;
    }
    const userId = user.userId;

    try {
      const result = await fetch(`/api/max/${userId}`);
      const data = await result.json();
      setExercises(data);
    } catch (err) {
      setError("Network error. Try again later.");
    }
  }, []);

  return (
    <div className="progress">
      <div className="progress__title">
        <TimelineIcon style={{ fontSize: 100 }} />
        <h3 className="progress__text">PROGRESS</h3>
      </div>
      {!selected && (
        <div className="progress__instructions">
          Select an exercise to view a graph of your progress
        </div>
      )}
      {selected && <Chart exercise={selected} />}
      {error ? <p className="progress__error">{error}</p> : null}
      <div
        onClick={() => setShowExercises(true)}
        className="progress__select__exercise"
      >
        <p className="progress__select__exercise--text">select exercise</p>
        <AddIcon className="progress__select__icon" style={{ fontSize: 30 }} />
      </div>
      {exercises && showExercises && (
        <div className="progress__exercise__container">
          <div className="progress__exercise__cancel">
            <span onClick={() => setShowExercises(false)}>cancel</span>
          </div>
          <div className="progress__exercise__list">
            {exercises && exercises.length ? (
              exercises.map((exercise) => {
                return (
                  <p
                    onClick={() => {
                      setSelected(exercise);
                      setShowExercises(false);
                    }}
                    key={exercise.exercise_id}
                    className="progress__exercise"
                  >
                    {exercise.name}
                  </p>
                );
              })
            ) : (
              <p className="progress__error">
                No exercise data found. Complete a workout to view progress.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Progress;
