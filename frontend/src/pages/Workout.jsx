import React, { useState, useEffect, useRef } from "react";
import "./Workout.css";

import HeaderButton from "../components/HeaderButton";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import AddIcon from "@material-ui/icons/Add";
import ExerciseList from "../components/ExerciseList";
import CreateExercise from "../components/CreateExercise";
import LogExercise from "../components/LogExercise";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Workout = (props) => {
  const [displayExercises, setDisplayExercises] = useState(false);
  const [createExercise, setCreateExercise] = useState(false);
  const [logExercise, setLogExercise] = useState(false);
  const [exercise, setExercise] = useState(null);
  const [routine, setRoutine] = useState();
  const [routineId, setRoutineId] = useState();
  const [workoutLogged, setWorkoutLogged] = useState(false);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

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
      if (unfinished.length < 1) {
        return;
      }
      const routineId = unfinished[0].routine_id;
      setRoutineId(routineId);
      const res = await fetch(
        `http://localhost:5000/api/routine-data/${userId}/${routineId}`
      );
      const routineInfo = await res.json();
      setRoutine(routineInfo);
    } catch (err) {
      setError(err.message);
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

  const deleteExerciseFromRoutine = async (exerciseId, routineId) => {
    if (!Number(exerciseId) || !Number(routineId)) return;

    const result = await fetch(
      `http://localhost:5000/api/stats/${routineId}/${exerciseId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    const deleted = await result.json();
    const routineCopy = [...routine];
    const updatedRoutine = routineCopy.filter(
      (stats) => stats.routine_exercise_id !== deleted[0].routine_exercise_id
    );
    setRoutine(updatedRoutine);
  };

  const logWorkout = async () => {
    if (!routineId) return;

    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    };
    try {
      const routine = await fetch(
        `http://localhost:5000/api/routines/${routineId}`,
        options
      );
      const updatedRoutine = await routine.json();
      setRoutine(null);
      setRoutineId(null);
    } catch (ex) {
      setError(ex.message);
    }
    setWorkoutLogged(true);
    setTimeout(() => {
      setWorkoutLogged(false);
    }, 5000);
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
          <div className="workout__data__ctn">
            <div className="workout__data__row">
              {routine &&
                !!routine.length &&
                routine.map((current, index, arr) => {
                  const previous = arr[index - 1];
                  const next = arr[index + 1];
                  if (!previous || previous.name !== current.name) {
                    return (
                      <div key={index} className="workout__data__exercise">
                        <p className="workout__data__exercise__name">
                          {current.name}
                        </p>
                        <DeleteOutlineIcon
                          style={{ fontSize: 35 }}
                          className="workout__data__exercise__delete"
                          onClick={() =>
                            deleteExerciseFromRoutine(
                              current.exercise_id,
                              routineId
                            )
                          }
                        />
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
            </div>
          </div>
          {routine && routine.length ? (
            <button onClick={logWorkout} className="log__workout">
              Log Workout
            </button>
          ) : null}
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className="workout">
      <div className="workout__title">
        <FitnessCenterIcon
          className="workout__icon"
          style={{ fontSize: 100 }}
        />
        <h3 className="workout__text">WORKOUT</h3>
        {logExercise ? (
          <p className="workout__instructions">
            Enter exercise data. Click the <span>+</span> icon to add a new set.
          </p>
        ) : (
          <p className="workout__instructions">
            Select or create an exercise from the dropdown list to get started
          </p>
        )}
      </div>
      {view}
      <div className={`message__modal ${workoutLogged ? "" : "hidden"}`}>
        <p className="message__text">Workout Logged</p>
      </div>
    </div>
  );
};

export default Workout;
