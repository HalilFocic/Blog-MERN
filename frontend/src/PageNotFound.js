import React from "react";
import { Link } from "react-router-dom";
import "./pagenotfound.css";
const PageNotFound = () => {
  return (
    <div className="error-page">
      <h1 className="error-text">Page Not Found</h1>
      <p>Looks like you entered link to page that doesn't exist.</p>
      <p>
        Please navigate back to Home by clicking
        <button className="back-home">
          <Link to="/">here</Link>
        </button>
      </p>
    </div>
  );
};
export default PageNotFound;
