import React from "react";
import "./navbar.css";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-title">Blog Site</div>
      <ul className="nav-list">
        <li className="nav-item">Posts</li>
        <li className="nav-item">Hero Info</li>
        <li className="nav-item">Contact Me</li>
      </ul>
    </div>
  );
};
export default NavBar;
