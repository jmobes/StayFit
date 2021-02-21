import React from "react";
import "./Spinner.css";

const Spinner = (props) => {
  return (
    <div className="spinner__container">
      <div className="spinner__overlay">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Spinner;
