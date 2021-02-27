import React, { useState } from "react";
import "./ExerciseListItem.css";

import RemoveIcon from "@material-ui/icons/Remove";

const ExerciseListItem = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user.userId;
  return (
    <div className="exercise__list__item__container">
      <p
        onClick={() => props.showLogExercise(props.exercise)}
        className="exercise__list__item"
      >
        {props.exercise.name}
      </p>
      {props.showEdit && userId === props.exercise.user_id && (
        <RemoveIcon
          className="exercise__list__item__icon"
          style={{ fontSize: 25 }}
          onClick={() => props.delete(props.exercise.exercise_id)}
        />
      )}
    </div>
  );
};

export default ExerciseListItem;
