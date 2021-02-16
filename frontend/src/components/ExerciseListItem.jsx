import React from "react";
import "./ExerciseListItem.css";

import RemoveIcon from "@material-ui/icons/Remove";

const ExerciseListItem = (props) => {
  return (
    <div className="exercise__list__item__container">
      <p className="exercise__list__item">{props.exercise.name}</p>
      {props.showEdit && (
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
