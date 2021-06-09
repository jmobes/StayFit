import React from "react";

import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const LogRoutine = (props) => {
  return (
    <React.Fragment>
      <div
        className="workout__select"
        onClick={() => props.setDisplayExercises(true)}
      >
        <p className="workout__select__title">select exercise</p>
        <AddIcon className="workout__select__icon" style={{ fontSize: 30 }} />
      </div>
      <div className="workout__data">
        <div className="workout__data__ctn">
          <div className="workout__data__row">
            {props.routine && !!props.routine.length && !props.error ? (
              props.routine.map((current, index, arr) => {
                const previous = arr[index - 1];
                const next = arr[index + 1];
                if (!previous || previous.name !== current.name) {
                  return (
                    <div key={index} className="workout__data__exercise">
                      <p className="workout__data__exercise__name">
                        {current.name}
                      </p>
                      <DeleteOutlineIcon
                        style={{ fontSize: 35 }}
                        className="workout__data__exercise__delete"
                        onClick={() =>
                          props.deleteExerciseFromRoutine(
                            current.exercise_id,
                            props.routineId
                          )
                        }
                      />
                    </div>
                  );
                } else {
                  return null;
                }
              })
            ) : (
              <p>{props.error}</p>
            )}
          </div>
        </div>
        {props.routine && props.routine.length ? (
          <button onClick={props.logWorkout} className="log__workout">
            Log Workout
          </button>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default LogRoutine;
