import React from "react";
import { Redirect, Route } from "react-router-dom";
import User from "../components/common/Auth";
import LayoutWrapper from "../pages/Layout";
import Routes, { LoginRoute } from "./router";

export default () => (
  <User>
    {({ data: { user } }) => {
      if (user && user.email) {
        return (
          <LayoutWrapper>
            <Redirect from="/" to={Routes[0].path} exact />
            {Routes.map((item: Routers) => (
              <Route
                path={item.path}
                component={item.component}
                key={item.title}
              />
            ))}
          </LayoutWrapper>
        );
      } else {
        return (
          <>
            <Redirect from="/" to="login" exact />
            <Route
              path={LoginRoute.path}
              exact
              component={LoginRoute.component}
            />
          </>
        );
      }
    }}
  </User>
);
