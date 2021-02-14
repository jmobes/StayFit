import React, { useState } from "react";
import "./ExerciseListItem.css";

import RemoveIcon from "@material-ui/icons/Remove";

const ExerciseListItem = (props) => {
  return (
    <div className="exercise__list__item__container">
      <p className="exercise__list__item">{props.name}</p>
      <RemoveIcon
        className="exercise__list__item__icon"
        style={{ fontSize: 25 }}
        onClick={() => props.delete(props.id)}
      />
    </div>
  );
};

export default ExerciseListItem;
