import React from "react";
import "./Workout.css";

import HeaderButton from "../components/HeaderButton";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";

const Workout = () => {
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
    </div>
  );
};

export default Workout;
