import React from "react";

const HeroProfile = (hero) => {
  return (
    <div className="hero-profile">
      <img src={hero.profile} alt="profile" className="hero-picture"></img>
      <h2>{hero.name}</h2>
    </div>
  );
};

export default HeroProfile;
