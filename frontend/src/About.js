import React, { useState } from "react";
import "./About.css";
import profilePicture from "./profilepicture.jpg";
import { useGlobalContext } from "./context";
import { HiLocationMarker } from "react-icons/hi";

import axios from "axios";

const myName = "Halil Focic";
const myArray = myName.split("");

const About = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let emailData = {
      to: email,
      subject,
      content,
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
      <div className="about">
        <div className="about-me">
          <h1 style={{ marginBottom: "2rem", color: "royalblue" }}>About me</h1>
          <p>
            I am second year software engineering student. My interests are web
            development technologies like React and NodeJS. Looking for
            collaboration/internship/mentor
          </p>
        </div>
        <div className="about-project">
          <h1
            style={{
              marginBottom: "2rem",
              marginTop: "5rem",
              color: "royalblue",
            }}
          >
            About project
          </h1>
          <p>
            Blog site project was built using
            MERN(MongoDB,Express,React,NodeJS). It has 3 main
            pages,Home,About,Hero Info. On home page you are able to view or
            create posts. Hero info page will give you main info about superhero
            you type in. Since you are reading about page you already know what
            this page is all about :)
          </p>
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
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