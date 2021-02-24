import React, { useState, useEffect } from "react";
import "./LogExercise.css";

import Inputs from "./Inputs";
import AddIcon from "@material-ui/icons/Add";

const LogExercise = (props) => {
  const [exerciseId, setExerciseId] = useState();
  const [userId, setUserId] = useState();
  const [stats, setStats] = useState([{ set: 1, weight: "", reps: "" }]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return;
    }
    const userId = user.userId;
    setExerciseId(props.exercise.exercise_id);
    setUserId(user.userId);
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

  // const addSet = async (set, reps, weight) => {
  //   const options = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       set: set,
  //       reps: reps,
  //       weight: weight,
  //       exercise_id: exerciseId,
  //       user_id: userId,
  //     }),
  //   };
  //   try {
  //     const result = await fetch("http://localhost:5000/api/stats", options);
  //     if (!result.ok) {
  //       return;
  //     }
  //     const data = await result.json();
  //     console.log(data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

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
      <button className="log__exercise__button">Log Exercise</button>
      <button
        onClick={props.hideLogExercise}
        className="cancel__exercise__button"
      >
        Cancel
      </button>
    </div>
  );
};

export default LogExercise;
