import React, { useState } from "react";
import "./heroinfo.css";
const HeroInfo = () => {
  const [hero, setHero] = useState("");
  const [heroData, setHeroData] = useState({});
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/hero/" + hero);
    const data = await response.json();
    if (data.error) {
      console.log("error");
    }
    setHeroData(data);
    console.log(data);
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
      ) : (
        <div className="hero-info">{heroData.name}</div>
      )}
    </>
  );
};
export default HeroInfo;
