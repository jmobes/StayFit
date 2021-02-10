import React, { useState } from "react";
import "./Workout.css";

import HeaderButton from "../components/HeaderButton";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import AddIcon from "@material-ui/icons/Add";

const Workout = () => {
  const [displayExercises, setDisplayExercises] = useState(false);
  return (
    <div className="workout">
      <div className="workout__header">
        <HeaderButton text="home" />
        <HeaderButton text="logout" />
      </div>
      <div className="workout__title">
        <FitnessCenterIcon className="workout__icon" style={{ fontSize: 60 }} />
        <h2 className="workout__title__text">workout</h2>
      </div>
      <div className="workout__select">
        <p className="workout__select__title">select exercise</p>
        <AddIcon className="workout__select__icon" style={{ fontSize: 30 }} />
      </div>
      <div className="workout__data">No exercise data</div>
    </div>
  );
};

export default Workout;
