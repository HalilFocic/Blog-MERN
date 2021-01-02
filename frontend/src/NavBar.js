import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-title">Blog Site</div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/heroinfo">Hero Info</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">
            <a className="link">About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
