import React, { useState, useEffect } from "react";
import "./LogExercise.css";

import Inputs from "./Inputs";
import AddIcon from "@material-ui/icons/Add";

const LogExercise = (props) => {
  const [exerciseId, setExerciseId] = useState();
  const [userId, setUserId] = useState();
  const [stats, setStats] = useState([{ set: 1, weight: "", reps: "" }]);
  const [error, setError] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return;
    }
    const userId = user.userId;
    setExerciseId(props.exercise.exercise_id);
    setUserId(userId);
  }, []);

  const handleChange = (e) => {
    if (Number(e.target.value) || e.target.value === "") {
      const updatedStats = [...stats];
      updatedStats[e.target.dataset.index][e.target.dataset.category] =
        e.target.value;
      setStats(updatedStats);
    } else {
      return;
    }
  };

  const addSets = (routine_exercise_id) => {
    console.log("ROUTINE-EXERCISE-ID: ", routine_exercise_id);
    try {
      stats.map((setData) => {
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            // set: setData.set,
            reps: setData.reps,
            weight: setData.weight,
            routine_exercise_id: routine_exercise_id.toString(),
            user_id: userId.toString(),
          }),
        };
        fetch("http://localhost:5000/api/stats", options)
          .then((res) => res.json())
          .then((data) => console.log("Added sets:", data))
          .catch((err) => setError(err.message));
      });
      setError(null);
    } catch (e) {
      console.error(e.message);
    }
  };

  const startRoutine = async () => {
    if (!userId) return;

    console.log("Finding incomplete routines");
    try {
      const result = await fetch(
        `http://localhost:5000/api/routines/null-date/${userId}`
      );
      const unfinished = await result.json();
      console.log("incomplete routine found:", unfinished);
      if (unfinished.length > 0) {
        console.log("Resuming routine...");
        return new Promise((resolve, reject) => {
          resolve(unfinished[0].routine_id);
        });
      }
      console.log("No incomplete routines found");
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId.toString(),
        }),
      };
      const routineResult = await fetch(
        `http://localhost:5000/api/routines`,
        options
      );
      const routine = await routineResult.json();
      console.log(routine);
      console.log("Creating new routine...");
      return new Promise((resolve, reject) => {
        resolve(routine.routine_id);
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const addExerciseToRoutine = async (routine_id) => {
    console.log(userId);
    if (!userId) return;

    try {
      const routineId = routine_id;
      if (!routineId || !exerciseId) return;
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          routine_id: routineId.toString(),
          exercise_id: exerciseId.toString(),
        }),
      };
      const result = await fetch(
        `http://localhost:5000/api/routine-exercises`,
        options
      );
      const routine_exercise = await result.json();
      console.log("Routine-exercise created");
      console.log("Routine-Exercise: ", routine_exercise);
      return new Promise((resolve, reject) => {
        resolve(routine_exercise.routine_exercise_id);
      });
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="log__exercise">
      <h3 className="log__exercise__title">{props.exercise.name}</h3>
      <div className="log__exercise__data">
        <div className="log__exercise__data__columns">
          <h4 className="log__exercise__data__column">Set</h4>
          <h4 className="log__exercise__data__column">Weight</h4>
          <h4 className="log__exercise__data__column">Reps</h4>
        </div>
        <div className="log__exercise__data__rows">
          {stats.map((row, index) => {
            return (
              <div key={index} className="log__exercise__data__row">
                <input
                  placeholder="set"
                  type="text"
                  className="log__exercise__data__row__item"
                  value={row.set}
                  readOnly
                  data-category="set"
                  data-index={index}
                />
                <input
                  placeholder="weight"
                  type="text"
                  className="log__exercise__data__row__item"
                  data-category="weight"
                  data-index={index}
                  value={stats[index].weight}
                  onChange={handleChange}
                />
                <input
                  placeholder="reps"
                  type="text"
                  className="log__exercise__data__row__item"
                  data-category="reps"
                  data-index={index}
                  value={stats[index].reps}
                  onChange={handleChange}
                />
              </div>
            );
          })}
        </div>
      </div>
      <AddIcon
        onClick={() => {
          setStats([...stats, { set: stats.length + 1, weight: "", reps: "" }]);
        }}
        style={{ fontSize: 50 }}
        className="add__set__button"
      />
      <button
        onClick={async () => {
          try {
            stats.map((object) => {
              const valuesArray = Object.values(object);
              valuesArray.forEach((value, index) => {
                if (!value) {
                  throw new Error("Please fill out all fields");
                }
              });
            });
            const routineId = await startRoutine();
            const routine_exercise_id = await addExerciseToRoutine(routineId);
            addSets(routine_exercise_id);
            props.hideLogExercise();
          } catch (err) {
            console.error(err.message);
            setError(err.message);
          }
        }}
        className="log__exercise__button"
      >
        Log Exercise
      </button>
      <button
        onClick={props.hideLogExercise}
        className="cancel__exercise__button"
      >
        Cancel
      </button>
      {error && <p className="log__exercise__error">{error}</p>}
    </div>
  );
};

export default LogExercise;
