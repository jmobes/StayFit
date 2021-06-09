import React, { useState } from "react";
import "./CreateExercise.css";

const CreateExercise = (props) => {
  const [name, setName] = useState("");
  const [exercise, setExercise] = useState();
  const [error, setError] = useState();

  const addExerciseToList = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.userId.toString();
    if (!name || name.length < 3 || !userId) {
      setError("Exercise must be at least 3 characters");
      return;
    }
    const exercise = {
      user_id: userId,
      name: name,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(exercise),
    };
    fetch("http://localhost:5000/api/exercises", options)
      .then((result) => result.json())
      .then((exercise) => {
        console.log(exercise);
        props.hideCreateExercise();
      })
      .catch((err) =>
        setError(err.message || "Network error. Unable to create exercise.")
      );
  };

  return (
    <div className="exercise__create">
      <p className="exercise__create__title">Exercise Name</p>
      <input
        placeholder="barbell squat"
        type="text"
        className="exercise__create__input"
        onChange={(e) => setName(e.target.value)}
      />
      <p className="exercise__create__error">{error}</p>
      <button
        onClick={addExerciseToList}
        className="exercise__create__btn--add"
      >
        Add Exercise
      </button>
      <button
        onClick={props.hideCreateExercise}
        className="exercise__create__btn--cancel"
      >
        Cancel
      </button>
    </div>
  );
};

export default CreateExercise;
