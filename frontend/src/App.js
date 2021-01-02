import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import About from "./About";
import HeroInfo from "./HeroInfo";
import PageNotFound from "./PageNotFound";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/heroinfo">
          <HeroInfo />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
