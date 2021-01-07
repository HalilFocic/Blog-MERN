import React from "react";
import { BiMaleSign, BiFemaleSign } from "react-icons/bi";
const HeroAppearance = (data) => {
  console.log(data);
  return (
    <div className="appearance">
      <div className="appearance-item">
        <span className="blue-text">
          {data["gender"] === "Male" ? <BiMaleSign /> : <BiFemaleSign />}
        </span>
        <header className="appearance-title">Gender</header>
      </div>
      <div className="appearance-item">
        <span className="blue-text">{data["race"]}</span>
        <header className="appearance-title">Race</header>
      </div>
      <div className="appearance-item">
        <span className="blue-text">{data["height"][1]}</span>
        <header className="appearance-title">Height</header>
      </div>
      <div className="appearance-item">
        <span className="blue-text">{data["weight"][1]}</span>
        <header className="appearance-title">Weight</header>
      </div>
    </div>
  );
};
export default HeroAppearance;
