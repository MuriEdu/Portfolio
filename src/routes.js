import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
function Routes() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
