import React from "react";
import Home from "./Home";
import About from "./About";
import HeroInfo from "./HeroInfo";
import PageNotFound from "./PageNotFound";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./app.css";
import NewPost from "./NewPost";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route exact path="/about">
          <Navbar />
          <About />
        </Route>
        <Route exact path="/heroinfo">
          <Navbar />
          <HeroInfo />
        </Route>
        <Route exact path="/new">
          <Navbar />
          <NewPost />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
