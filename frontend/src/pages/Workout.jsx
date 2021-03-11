import React, { useState, useEffect, useRef } from "react";
import "./Workout.css";

import HeaderButton from "../components/HeaderButton";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import AddIcon from "@material-ui/icons/Add";
import ExerciseList from "../components/ExerciseList";
import CreateExercise from "../components/CreateExercise";
import LogExercise from "../components/LogExercise";
import { Button } from "@material-ui/core";

const Workout = (props) => {
  const [displayExercises, setDisplayExercises] = useState(false);
  const [createExercise, setCreateExercise] = useState(false);
  const [logExercise, setLogExercise] = useState(false);
  const [exercise, setExercise] = useState(null);
  const [routine, setRoutine] = useState();
  const [exerciseName, setExerciseName] = useState([]);
  const [routineId, setRoutineId] = useState();

  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return;
    }
    const userId = user.userId;
    try {
      const result = await fetch(
        `http://localhost:5000/api/routines/null-date/${userId}`
      );
      const unfinished = await result.json();
      console.log("Unfinished routines:", unfinished);
      if (unfinished.length < 1) {
        return;
      }
      const routineId = unfinished[0].routine_id;
      setRoutineId(routineId);
      const res = await fetch(
        `http://localhost:5000/api/routine-data/${userId}/${routineId}`
      );
      const routineInfo = await res.json();
      console.log(routineInfo);
      setRoutine(routineInfo);
    } catch (err) {
      console.error(err.message);
    }
  }, [displayExercises, createExercise, logExercise]);

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
          <div className="workout__data__stats">
            {routine &&
              routine.map((current, index, arr) => {
                const previous = arr[index - 1];
                const next = arr[index + 1];
                return (
                  <React.Fragment key={index}>
                    {!previous || previous.name !== current.name ? (
                      <React.Fragment>
                        <p className="workout__data--name">{current.name}</p>
                        <p
                          style={{
                            marginBottom: `${
                              next && next.name === current.name ? "" : "1rem"
                            }`,
                          }}
                          className="workout__data--set"
                        >{`${current.weight} X ${current.reps} ${
                          next && next.name === current.name ? "|" : ""
                        }`}</p>
                      </React.Fragment>
                    ) : (
                      <p
                        style={{
                          marginBottom: `${
                            next && next.name === current.name ? "" : "1rem"
                          }`,
                          marginLeft: ".5rem",
                        }}
                        className="workout__data--set"
                      >
                        {`${current.weight} X ${current.reps} ${
                          next && next.name === current.name ? "|" : ""
                        }`}
                      </p>
                    )}
                  </React.Fragment>
                );
              })}
          </div>
          {routine && <button className="log__workout">Log Workout</button>}
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
