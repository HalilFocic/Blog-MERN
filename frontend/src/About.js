import React, { useState } from "react";
import "./About.css";
import profilePicture from "./profilepicture.jpg";
import { useGlobalContext } from "./context";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import reactPic from "./images/react_green.png";
import cssPic from "./images/css_green.png";
import htmlPic from "./images/html_green.png";
import expressPic from "./images/express_green.png";
import nodePic from "./images/node_green.png";
import mongoPic from "./images/mongo_green.png";

import axios from "axios";

const myName = "Halil Focic";
const myArray = myName.split("");

const About = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let emailData = {
      email,
      subject,
      text,
    };
    console.log(emailData);
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios.post("/email", emailData, axiosConfig);
  };
  return (
    <div className="about-container">
      <h1 className="my-name">Halil Fočić</h1>
      <div className="profile-main-info">
        <div className="picture-container">
          <img
            className="profile-pic"
            src={profilePicture}
            alt="profile picutre"
          />
        </div>
        <div className="profile-text">
          <div className="green-rectangle"></div>
          <div className="profile-row">Software Engineering Student</div>
          <div className="profile-row">20</div>
          <div className="profile-row">Mostar</div>
          <div className="profile-row">
            <a href="https://github.com/HalilFocic">
              <AiFillGithub className="profile-icon" />
            </a>
            <a href="https://www.linkedin.com/feed/">
              <AiFillLinkedin className="profile-icon" />
            </a>
            <a href="https://www.instagram.com/halil.focic/">
              <AiFillInstagram className="profile-icon" />
            </a>
          </div>
          <div className="green-rectangle"></div>
        </div>
      </div>
      <div className="technologies">Technologies</div>
      <div className="technologies-container">
        <div className="techno-card">
          <div className="techno-title">Frontend</div>
          <img src={htmlPic} alt="HTML " className="tech-icon" />
          <img src={cssPic} alt="CSS " className="tech-icon" />
          <img src={reactPic} alt="" className="tech-icon" />
        </div>
        <div className="techno-card">
          <div className="techno-title">Backend</div>
          <img src={nodePic} alt="Node " className="tech-icon" />
          <img src={expressPic} alt="Express " className="tech-icon" />
          <img src={mongoPic} alt="Mongo" className="tech-icon" />
        </div>
      </div>
      <div className="contact-me">
        <form className="contact-me-form">
          <label htmlFor="email" className="frm-lbl">
            Email
          </label>
          <input
            type="email"
            className="frm-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="subject" className="frm-lbl">
            Subject
          </label>
          <input
            type="text"
            className="frm-input"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <label htmlFor="emailText" className="frm-lbl">
            Enter your message
          </label>
          <textarea
            width="50px"
            className="frm-input frm-textarea"
            style={{ resize: "none" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button type="submit" className="btn-submit" onClick={handleSubmit}>
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};
export default About;
