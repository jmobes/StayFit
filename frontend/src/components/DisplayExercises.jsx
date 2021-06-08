import React, { useEffect, useState } from "react";
// import "./DisplayExercises.css";
import ExerciseList from "./ExerciseList";

const DisplayExercises = (props) => {
  return (
    <ExerciseList
      showList={props.showList}
      showAddExercise={props.showAddExercise}
      showLogExercise={props.showLogExercise}
    />
  );
};

export default DisplayExercises;
