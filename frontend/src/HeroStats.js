import React from "react";

const HeroStats = (hero) => {
  return (
    <>
      <h1>STATS</h1>
      <div
        className="hero-stat-row"
        style={{ width: `${3 * hero["intelligence"]}px` }}
      >
        <span>Intelligence</span>
        {hero["intelligence"]}
      </div>
      <div
        className="hero-stat-row"
        style={{ width: `${3 * hero["strength"]}px` }}
      >
        <span>Strength</span>
        {hero["strength"]}
      </div>
      <div
        className="hero-stat-row"
        style={{ width: `${3 * hero["speed"]}px` }}
      >
        <span>Speed</span>

        {hero["speed"]}
      </div>
      <div
        className="hero-stat-row"
        style={{ width: `${3 * hero["durability"]}px` }}
      >
        <span>Durability</span>

        {hero["durability"]}
      </div>
      <div
        className="hero-stat-row"
        style={{ width: `${3 * hero["power"]}px` }}
      >
        <span>Power</span>

        {hero["power"]}
      </div>
      <div
        className="hero-stat-row"
        style={{ width: `${3 * hero["combat"]}px` }}
      >
        <span>Combat</span>

        {hero["combat"]}
      </div>
    </>
  );
};

export default HeroStats;
