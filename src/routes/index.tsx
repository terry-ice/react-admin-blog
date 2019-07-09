import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import Loading from "../components/common/Loading";
import BaseRoute from "./baseRoute";

const App = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <BaseRoute />
    </Switch>
  </Suspense>
);

export default App;
