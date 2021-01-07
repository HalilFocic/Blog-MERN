import React from "react";
import HeroStats from "./HeroStats";

const Biography = (bio) => {
  return (
    <div className="hero-bio">
      <ul className="bio-list">
        <li>Place of birth:{bio["place-of-birth"]}</li>
        <li>First release:{bio["first-appearance"]}</li>
        <li>Publisher:{bio["publisher"]}</li>
      </ul>
    </div>
  );
};

export default Biography;
