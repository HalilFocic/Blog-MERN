import React, { useState } from "react";
import "./heroinfo.css";
import HeroAppearance from "./HeroAppearance";
import HeroStats from "./HeroStats";
import HeroBio from "./HeroBio";
const HeroInfo = () => {
  const [hero, setHero] = useState("");
  const [heroData, setHeroData] = useState(null);
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/hero/" + hero);
    const data = await response.json();
    if (data.error) {
      console.log("error");
    }
    console.log(data);
    setHeroData(data);
  };
  return (
    <>
      <div className="hero-form-container">
        <form className="hero-form">
          <input
            type="text"
            placeholder="Search a hero you want"
            value={hero}
            onChange={(e) => setHero(e.target.value)}
          />
          <button type="submit" className="hero-submit" onClick={handleSubmit}>
            Search
          </button>
        </form>
      </div>
      {error ? (
        <div className="hero-not-found">
          Looks like that hero was not found!
        </div>
      ) : !heroData ? (
        <div className="search-hero">Please search a hero!</div>
      ) : (
        <div className="hero-info">
          <div className="hero-appearance">
            <HeroAppearance
              {...heroData.appearance}
              profile={heroData.image.url}
            />
          </div>
          <div className="hero-stats">
            <HeroStats />
            <div className="hero-stat-row">
              {heroData.powerstats["intelligence"]}
            </div>
            <div className="hero-stat-row">
              {heroData.powerstats["strength"]}
            </div>
            <div className="hero-stat-row">{heroData.powerstats["speed"]}</div>
            <div className="hero-stat-row">
              {heroData.powerstats["durability"]}
            </div>
            <div className="hero-stat-row">{heroData.powerstats["power"]}</div>
            <div className="hero-stat-row">{heroData.powerstats["combat"]}</div>
          </div>
          <div className="hero-aliases">
            {heroData.biography.aliases.map((alias) => {
              return <div className="alias">{alias}</div>;
            })}
            <div className="work-base">
              <div>{heroData.work.occupation}</div>
              <div>{heroData.work.base}</div>
            </div>
          </div>
          <div className="hero-bio">
            <HeroBio {...heroData.biography} />
          </div>
        </div>
      )}
    </>
  );
};
export default HeroInfo;
