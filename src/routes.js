import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="https://muriedu.github.io/Portfolio/" exact>
          <Home />
        </Route>
        <Route path="https://muriedu.github.io/Portfolio/contact">
          <Contact />
        </Route>
        <Route path="https://muriedu.github.io/Portfolio/projects">
          <Projects />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
