import React from "react";
import "./About.css";
import profilePicture from "./profilepicture.jpg";
import { useGlobalContext } from "./context";
import { HiLocationMarker } from "react-icons/hi";
const myName = "Halil Focic";
const myArray = myName.split("");

const About = () => {
  return (
    <div className="about-container">
      <div className="profile">
        <img src={profilePicture} alt="Profile" className="profile-pic" />
        <div className="my-name">
          {myArray.map((slovo, index) => {
            return (
              <span className={`${slovo ? "char-name" : ""}`} key={index}>
                {slovo}
              </span>
            );
          })}
        </div>
        <div className="my-info">20</div>
        <div className="my-info">Student</div>
        <div className="my-info">
          <HiLocationMarker />
          Mostar
        </div>
      </div>
      <div className="about">About</div>
      <div className="interests">Interests</div>
      <div className="contact-me">Contact me</div>
    </div>
  );
};
export default About;
