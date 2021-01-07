import React, { useState } from "react";
import "./heroinfo.css";
import HeroProfile from "./HeroProfile";
import HeroAppearance from "./HeroAppearance";
import HeroStats from "./HeroStats";
import HeroBio from "./HeroBio";
import ReactCardFlip from "react-card-flip";
const HeroInfo = () => {
  const [profileCard, setProfileCard] = useState(false);
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
          <ReactCardFlip isFlipped={profileCard} flipDirection="horizontal">
            <div
              className="back-card"
              onClick={() => setProfileCard(!profileCard)}
            >
              PROFILE
            </div>

            <div
              className="front-card"
              onClick={() => setProfileCard(!profileCard)}
            >
              <HeroProfile profile={heroData.image.url} name={heroData.name} />
            </div>
          </ReactCardFlip>
          <ReactCardFlip isFlipped={profileCard} flipDirection="horizontal">
            <div
              className="back-card"
              onClick={() => setProfileCard(!profileCard)}
            >
              PROFILE
            </div>

            <div
              className="front-card"
              onClick={() => setProfileCard(!profileCard)}
            >
              <HeroProfile profile={heroData.image.url} name={heroData.name} />
            </div>
          </ReactCardFlip>
        </section>
      )}
    </>
  );
};
export default HeroInfo;
