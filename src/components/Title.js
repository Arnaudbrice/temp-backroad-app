import React from "react";

const Title = props => {
  return (
    <div className="section-title">
      <h2>
        {props.firstWord} <span>{props.secondWord}</span>
      </h2>
    </div>
  );
};

export default Title;
