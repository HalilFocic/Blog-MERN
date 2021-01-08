import React, { useState } from "react";
import "./heroinfo.css";
import HeroAppearance from "./HeroAppearance";
import HeroStats from "./HeroStats";
import WorkBase from "./WorkBase";
import Biography from "./Biography";
const HeroInfo = () => {
  const [hero, setHero] = useState("");
  const [heroData, setHeroData] = useState(null);
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/hero/" + hero);
    const data = await response.json();
    if (data.error) {
      setError(true);
      return;
    }
    setError(false);
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
        <section className="hero-info">
          <div className="hero-main">
            <div className="hero-profile">
              <img src={heroData.image.url} alt="hero" className="hero-photo" />
            </div>
            <div className="title-aliases">
              <h1 className="title">{heroData.name}</h1>
              <ul className="aliases">
                {heroData.biography.aliases.map((alias, index) => {
                  if (index > 2) return null;
                  return <li class="alias">{alias}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="blue-row">Appearance</div>
          <HeroAppearance
            {...heroData.appearance}
            profile={heroData.image.url}
          />
          <div className="blue-row">Combat statistics</div>
          <HeroStats {...heroData.powerstats} />
          <div className="blue-row">Extra info</div>
          <div className="extra-info">
            <WorkBase {...heroData.work} />
            <Biography {...heroData.biography} />
          </div>
        </section>
      )}
    </>
  );
};
export default HeroInfo;
