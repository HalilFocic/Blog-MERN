import React from "react";
const HeroAppearance = (data) => {
  console.log(data);
  return (
    <>
      <img src={data.profile} alt="profile" className="hero-picture"></img>
      <div className="hero-item">{data["gender"]}</div>
      <div className="hero-item">{data["race"]}</div>
      <div className="hero-item">{data["height"][1]}</div>
      <div className="hero-item">{data["weight"][1]}</div>
      <div className="hero-item">{data["hair-color"]}</div>
      <div className="hero-item">{data["eye-color"]}</div>
    </>
  );
};
export default HeroAppearance;
