import React, { Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Routes from "./router";

const App = () => (
  <Router>
    <ul>
      <li>
        <Link to="/home">home Page</Link>
      </li>
      <li>
        <Link to="/admin">admin Page</Link>
      </li>
    </ul>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {Routes.map((item: Routers) => (
          <Route path={item.path} component={item.component} key={item.title} />
        ))}
      </Switch>
    </Suspense>
  </Router>
);

export default App;
