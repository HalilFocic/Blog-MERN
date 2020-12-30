import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import PostsPage from "./PostsPage";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <React.StrictMode>
    <PostsPage />
  </React.StrictMode>,
  document.getElementById("root")
);
