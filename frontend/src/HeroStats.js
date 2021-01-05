import React from "react";

const HeroStats = (hero) => {
  return (
    <>
      <h1>STATS</h1>
      <div
        className="hero-stat-row"
        style={{ width: `${0.9 * hero["intelligence"]}%` }}
      >
        <span>Intelligence</span>
        {hero["intelligence"]}
      </div>
      <div
        className="hero-stat-row"
        style={{ width: `${0.9 * hero["strength"]}%` }}
      >
        <span>Strength</span>
        {hero["strength"]}
      </div>
      <div
        className="hero-stat-row"
        style={{ width: `${0.9 * hero["speed"]}%` }}
      >
        <span>Speed</span>

        {hero["speed"]}
      </div>
      <div
        className="hero-stat-row"
        style={{ width: `${0.9 * hero["durability"]}%` }}
      >
        <span>Durability</span>

        {hero["durability"]}
      </div>
      <div
        className="hero-stat-row"
        style={{ width: `${0.9 * hero["power"]}%` }}
      >
        <span>Power</span>

        {hero["power"]}
      </div>
      <div
        className="hero-stat-row"
        style={{ width: `${0.9 * hero["combat"]}%` }}
      >
        <span>Combat</span>

        {hero["combat"]}
      </div>
    </>
  );
};

export default HeroStats;
