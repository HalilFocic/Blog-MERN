import React from "react";
import HeroStats from "./HeroStats";

const Biography = (bio) => {
  return (
    <div className="hero-bio">
      <div className="base">
        <div className="extra-blue">Place of birth</div>
        {bio["place-of-birth"]}
      </div>
      <div className="base">
        <div className="extra-blue">Publisher</div>
        {bio["publisher"]}
      </div>
      <div className="base">
        <div className="extra-blue">First appearance</div>
        {bio["first-appearance"]}
      </div>
    </div>
  );
};

export default Biography;
