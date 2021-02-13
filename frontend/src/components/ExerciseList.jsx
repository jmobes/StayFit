import React, { useState, useEffect } from "react";
import "./ExerciseList.css";

import ExerciseListItem from "./ExerciseListItem";
import AddIcon from "@material-ui/icons/Add";

const ExerciseList = (props) => {
  const [exercises, setExercises] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/api/exercises")
      .then((res) => res.json())
      .then((data) => setExercises(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="exercise__list">
      <div className="exercise__list__headers">
        <div className="exercise__list__headers__cancel">cancel</div>
        <div className="exercise__list__headers__edit">edit</div>
        <AddIcon
          className="exercise__list__headers__add"
          style={{ fontSize: 35 }}
        />
      </div>
      <div className="exercise__list__container">
        {exercises &&
          exercises.map((exercise) => {
            return (
              <ExerciseListItem
                key={exercise.exercise_id}
                name={exercise.name}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ExerciseList;
