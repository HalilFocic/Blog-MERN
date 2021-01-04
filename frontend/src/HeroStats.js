import React from "react";

const HeroStats = (hero) => {
  return (
    <>
      <div className="hero-stat-row">{hero["intelligence"]}</div>
      <div className="hero-stat-row">{hero["strength"]}</div>
      <div className="hero-stat-row">{hero["speed"]}</div>
      <div className="hero-stat-row">{hero["durability"]}</div>
      <div className="hero-stat-row">{hero["power"]}</div>
      <div className="hero-stat-row">{hero["combat"]}</div>
    </>
  );
};

export default HeroStats;
