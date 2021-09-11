import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import P from "./pages/P";

function Routes() {
  return (
    <BrowserRouter>
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
        <Route path="/P">
          <P />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
