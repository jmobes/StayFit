import React, { useState, useEffect } from "react";
import "./Workout.css";

import HeaderButton from "../components/HeaderButton";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import AddIcon from "@material-ui/icons/Add";
import ExerciseList from "../components/ExerciseList";
import CreateExercise from "../components/CreateExercise";
import LogExercise from "../components/LogExercise";

const Workout = (props) => {
  const [displayExercises, setDisplayExercises] = useState(false);
  const [createExercise, setCreateExercise] = useState(false);
  const [logExercise, setLogExercise] = useState(false);
  const [exercise, setExercise] = useState(null);
  const [routineStarted, setRoutineStarted] = useState(false);
  const [exercises, setExercises] = useState();

  // useEffect(async () => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (!user) {
  //     return;
  //   }
  //   const userId = user.userId;
  //   try {
  //     const result = await fetch(
  //       `http://localhost:5000/api/routines/null-date/${userId}`
  //     );
  //     const unfinished = await result.json();
  //     console.log("Unfinished routines:", unfinished);
  //     if (unfinished.length < 1) {
  //       return;
  //     }
  //     const routineId = unfinished[0].routine_id;
  //     const res = await fetch(
  //       `http://localhost:5000/api/routine-exercises/${userId}/${routineId}`
  //     );
  //     const exercises = await res.json();
  //     setExercises(exercises);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // });

  const showAddExercise = () => {
    setCreateExercise(true);
    setDisplayExercises(false);
  };
  const showLogExercise = (exercise) => {
    setLogExercise(true);
    setDisplayExercises(false);
    setExercise(exercise);
  };
  const hideLogExercise = () => {
    setLogExercise(false);
  };

  let view;
  if (displayExercises) {
    view = (
      <ExerciseList
        showList={setDisplayExercises}
        showAddExercise={showAddExercise}
        showLogExercise={showLogExercise}
      />
    );
  } else if (createExercise) {
    view = (
      <CreateExercise hideCreateExercise={() => setCreateExercise(false)} />
    );
  } else if (logExercise) {
    view = (
      <LogExercise hideLogExercise={hideLogExercise} exercise={exercise} />
    );
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
        <div className="workout__data">
          {routineStarted && "No exercise data"}
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className="workout">
      <div className="workout__header">
        <HeaderButton text="home" />
        <HeaderButton text="logout" logout={props.logout} />
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
