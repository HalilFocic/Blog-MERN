import React from "react";
import "./navbar.css";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-title">Naslov</div>
      <ul className="nav-list">
        <li>Posts</li>
        <li>Hero Info</li>
        <li>Contact Me</li>
      </ul>
    </div>
  );
};
export default NavBar;
