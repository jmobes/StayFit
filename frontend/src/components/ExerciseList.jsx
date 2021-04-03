import React, { useState, useEffect } from "react";
import "./ExerciseList.css";

import ExerciseListItem from "./ExerciseListItem";
import AddIcon from "@material-ui/icons/Add";

const ExerciseList = (props) => {
  const [exercises, setExercises] = useState();
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      setExercises(null);
      return;
    }
    const token = user.token;
    const user_id = user.userId;
    fetch(`/api/exercises/${user_id}`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setExercises(data))
      .catch((err) => setExercises(null));
  }, []);

  const deleteExercise = (id) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(`/api/routine-data/${id}`, options)
      .then((result) => result.json())
      .then((deleted) =>
        setExercises(
          exercises.filter(
            (exercise) => exercise.exercise_id !== deleted.exercise_id
          )
        )
      )
      .catch((err) => setError(err));
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
                exercise={exercise}
                delete={deleteExercise}
                showEdit={edit}
                showLogExercise={props.showLogExercise}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ExerciseList;
