import React, { useState } from "react";
import "./heroinfo.css";
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
            <div className="hero-item">{heroData.appearance["gender"]}</div>
            <div className="hero-item">{heroData.appearance["race"]}</div>
            <div className="hero-item">{heroData.appearance["height"][1]}</div>
            <div className="hero-item">{heroData.appearance["weight"][1]}</div>
            <div className="hero-item">{heroData.appearance["hair-color"]}</div>
            <div className="hero-item">{heroData.appearance["eye-color"]}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default HeroInfo;
