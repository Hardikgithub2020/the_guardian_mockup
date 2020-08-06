import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Opinion from "./4_Opinion";
import Sports from "./5_Sports"
import Headlines from "./2_Headlines";

export default function RouterApp() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Opinion">Opinion</Link>
            </li>
            <li>
              <Link to="/Sports">Sports</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Opnion">
            <Opinion />
          </Route>
          <Route path="/Sports">
            <Sports />
          </Route>
          <Route path="/">
            <Headlines />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}