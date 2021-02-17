import React, { useState } from "react";
import "./CreateExercise.css";

const CreateExercise = (props) => {
  const [name, setName] = useState("");

  const addExerciseToList = () => {
    if (!name || name.length < 3) return;
    const exercise = {
      name: name,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(exercise),
    };
    fetch("http://localhost:5000/api/exercises", options)
      .then((result) => result.json())
      .then((exercise) => console.log(exercise))
      .catch((err) => console.error(err));

    props.hideCreateExercise();
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
      <p
        className={`exercise__create__error ${
          !name || name.length >= 3 ? "hidden" : ""
        }`}
      >
        Exercise must be at least 3 characters
      </p>
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
