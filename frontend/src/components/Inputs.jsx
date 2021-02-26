import React from "react";

import RemoveIcon from "@material-ui/icons/Remove";

const Inputs = (props) => {
  return (
    <div className="log__exercise__data__row">
      <input
        placeholder="set"
        type="text"
        className="log__exercise__data__row__item"
        value={props.set}
        readOnly
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
  );
};

export default Inputs;
