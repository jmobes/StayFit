import React, { useState } from "react";
import "./Workout.css";

import HeaderButton from "../components/HeaderButton";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import AddIcon from "@material-ui/icons/Add";
import ExerciseList from "../components/ExerciseList";
import CreateExercise from "../components/CreateExercise";
import LogExercise from "../components/LogExercise";

const Workout = () => {
  const [displayExercises, setDisplayExercises] = useState(false);
  const [createExercise, setCreateExercise] = useState(false);
  const [logExercise, setLogExercise] = useState(true);
  const [exercise, setExercise] = useState();

  const showAddExercise = () => {
    setCreateExercise(true);
    setDisplayExercises(false);
  };

  let view;
  if (displayExercises) {
    view = (
      <ExerciseList
        showList={setDisplayExercises}
        showAddExercise={showAddExercise}
      />
    );
  } else if (createExercise) {
    view = (
      <CreateExercise hideCreateExercise={() => setCreateExercise(false)} />
    );
  } else if (logExercise) {
    view = <LogExercise />;
  } else {
    view = (
      <React.Fragment>
        <div
          className="workout__select"
          onClick={() => setDisplayExercises(true)}
        >
          <p className="workout__select__title">select exercise</p>
          <AddIcon className="workout__select__icon" style={{ fontSize: 30 }} />
        </div>
        <div className="workout__data">No exercise data</div>
      </React.Fragment>
    );
  }

  return (
    <div className="workout">
      <div className="workout__header">
        <HeaderButton text="home" />
        <HeaderButton text="logout" />
      </div>
      <div className="workout__title">
        <FitnessCenterIcon
          className="workout__icon"
          style={{ fontSize: 100 }}
        />
      </div>
      {view}
    </div>
  );
};

export default Workout;
