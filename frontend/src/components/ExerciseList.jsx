import React from "react";
import "./ExerciseList.css";

import AddIcon from "@material-ui/icons/Add";

const ExerciseList = () => {
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
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
        <p className="exercise__list__item">Bench Press</p>
      </div>
    </div>
  );
};

export default ExerciseList;
