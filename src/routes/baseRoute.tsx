import { getStore } from "@/utils";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Routes from "./router";

const renderRouter = (item: Routers) => (
  <Switch key={item.title}>
    <Route
      exact
      path={item.path}
      render={props =>
        getStore("token") ? (
          <item.component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  </Switch>
);
export default () => <>{Routes.map(item => renderRouter(item))}</>;
