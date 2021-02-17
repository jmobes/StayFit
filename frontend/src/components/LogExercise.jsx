import React, { useState, useEffect } from "react";
import "./LogExercise.css";

import Inputs from "./Inputs";
import AddIcon from "@material-ui/icons/Add";

const LogExercise = (props) => {
  const [numSets, setNumSets] = useState([1]);

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
          {numSets.map((set) => (
            <Inputs key={set} set={set} />
          ))}
        </div>
      </div>
      <AddIcon
        onClick={() =>
          setNumSets((prev) => [...prev, numSets[numSets.length - 1] + 1])
        }
        style={{ fontSize: 50 }}
        className="add__set__button"
      />
      <button className="log__exercise__button">Log Exercise</button>
      <button className="cancel__exercise__button">Cancel</button>
    </div>
  );
};

export default LogExercise;
