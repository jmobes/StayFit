import React, { useState, useEffect } from "react";
import "./ExerciseList.css";

import ExerciseListItem from "./ExerciseListItem";
import AddIcon from "@material-ui/icons/Add";

const ExerciseList = (props) => {
  const [exercises, setExercises] = useState();
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/exercises")
      .then((res) => res.json())
      .then((data) => setExercises(data))
      .catch((err) => console.error(err));
  }, []);

  const deleteExercise = (id) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(`http://localhost:5000/api/exercises/${id}`, options)
      .then((result) => result.json())
      .then((deleted) =>
        setExercises(
          exercises.filter(
            (exercise) => exercise.exercise_id !== deleted.exercise_id
          )
        )
      )
      .catch((err) => console.error(err));
  };

  return (
    <div className="exercise__list">
      <div className="exercise__list__headers">
        <div
          onClick={() => props.showList(false)}
          className="exercise__list__headers__cancel"
        >
          cancel
        </div>
        <div
          onClick={() => setEdit(!edit)}
          className={`exercise__list__headers__edit ${
            edit ? "exercise__list__headers__edit--active" : ""
          }`}
        >
          edit
        </div>
        <AddIcon
          className="exercise__list__headers__add"
          style={{ fontSize: 35 }}
          onClick={props.showAddExercise}
        />
      </div>
      <div className="exercise__list__container">
        {exercises &&
          exercises.map((exercise) => {
            return (
              <ExerciseListItem
                key={exercise.exercise_id}
                name={exercise.name}
                id={exercise.exercise_id}
                delete={deleteExercise}
                showEdit={edit}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ExerciseList;
