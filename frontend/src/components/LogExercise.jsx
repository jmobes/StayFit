import React from "react";
import "./LogExercise.css";

import AddIcon from "@material-ui/icons/Add";

const LogExercise = (props) => {
  return (
    <div className="log__exercise">
      <h3 className="log__exercise__title">Bench Press</h3>
      <div className="log__exercise__data">
        <div className="log__exercise__data__columns">
          <h4 className="log__exercise__data__column">Set</h4>
          <h4 className="log__exercise__data__column">Weight</h4>
          <h4 className="log__exercise__data__column">Reps</h4>
        </div>
        <div className="log__exercise__data__rows">
          <div className="log__exercise__data__row">
            <input
              placeholder="set"
              type="text"
              className="log__exercise__data__row__item"
            />
            <input
              placeholder="weight"
              type="text"
              className="log__exercise__data__row__item"
            />
            <input
              placeholder="reps"
              type="text"
              className="log__exercise__data__row__item"
            />
          </div>
        </div>
      </div>
      <AddIcon style={{ fontSize: 40 }} className="add__set__button" />
    </div>
  );
};

export default LogExercise;
