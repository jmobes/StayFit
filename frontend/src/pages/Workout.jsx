import React, { useState } from "react";
import "./Workout.css";

import HeaderButton from "../components/HeaderButton";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import AddIcon from "@material-ui/icons/Add";
import ExerciseList from "../components/ExerciseList";

const Workout = () => {
  const [displayExercises, setDisplayExercises] = useState(true);

  return (
    <div className="workout">
      <div className="workout__header">
        <HeaderButton text="home" />
        <HeaderButton text="logout" />
      </div>
      <div className="workout__title">
        <FitnessCenterIcon className="workout__icon" style={{ fontSize: 70 }} />
        <h2 className="workout__title__text">workout</h2>
      </div>
      {displayExercises ? (
        <ExerciseList />
      ) : (
        <React.Fragment>
          <div
            className="workout__select"
            onClick={() => setDisplayExercises(true)}
          >
            <p className="workout__select__title">select exercise</p>
            <AddIcon
              className="workout__select__icon"
              style={{ fontSize: 30 }}
            />
          </div>
          <div className="workout__data">No exercise data</div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Workout;
