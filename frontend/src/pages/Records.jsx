import React, { useState, useEffect } from "react";
import "./Records.css";

import HeaderButton from "../components/HeaderButton";
import FlagIcon from "@material-ui/icons/Flag";

const Records = (props) => {
  const [max, setMax] = useState();

  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return;
    }
    const userId = user.userId;

    const result = await fetch(`http://localhost:5000/api/max/${userId}`);
    const data = await result.json();
    setMax(data);
  }, []);

  return (
    <div className="records">
      <div className="records__header">
        <HeaderButton text="home" />
        <HeaderButton text="logout" logout={props.logout} />
      </div>
      <div className="records__title">
        <FlagIcon className="records__icon" style={{ fontSize: 100 }} />
      </div>
      <div className="records__instructions">
        Each row is the heaviest weight you have lifted for the given exercise
      </div>
      <div className="records__data">
        <div className="records__data__label">
          <p className="records__data__label--exercise">Exercise</p>
          <p className="records__data__label--weight">Weight</p>
        </div>
        {max &&
          max.map((exercise) => {
            return (
              <div key={exercise.exercise_id} className="records__data__row">
                <p className="records__data__row--exercise">{exercise.name}</p>
                <p className="records__data__row--weight">
                  {exercise.max_weight}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Records;
