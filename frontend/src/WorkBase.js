import React from "react";

const WorkBase = ({ occupation, base }) => {
  return (
    <div className="work-base">
      <div className="work">
        <div className="extra-blue">Job:</div>
        {occupation}
      </div>
      <div className="base">
        <div className="extra-blue">Location:</div>

        {base}
      </div>
    </div>
  );
};

export default WorkBase;
