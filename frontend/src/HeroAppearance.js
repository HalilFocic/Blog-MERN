import React from "react";
const HeroAppearance = (data) => {
  console.log(data);
  return (
    <>
      <img src={data.profile} alt="profile" className="hero-picture"></img>
      <div className="hero-item">
        Gender:<span className="blue-text">{data["gender"]}</span>
      </div>
      <div className="hero-item">
        Race:<span className="blue-text">{data["race"]}</span>
      </div>
      <div className="hero-item">
        Height:<span className="blue-text">{data["height"][1]}</span>
      </div>
      <div className="hero-item">
        Weight:<span className="blue-text">{data["weight"][1]}</span>
      </div>
      <div className="hero-item">
        Hair color:<span className="blue-text">{data["hair-color"]}</span>
      </div>
      <div className="hero-item">
        Eye color:<span className="blue-text">{data["eye-color"]}</span>
      </div>
    </>
  );
};
export default HeroAppearance;
