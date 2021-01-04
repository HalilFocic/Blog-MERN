import React, { useState } from "react";
import "./heroinfo.css";
const HeroInfo = () => {
  const [hero, setHero] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/hero/Aquaman");
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <div className="hero-form">
        <form>
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
      <div className="hero-info"></div>
    </>
  );
};
export default HeroInfo;
