import React, { Suspense } from "react";
import Loading from "../components/common/Loading";
import LayoutWrapper from "../pages/Layout";
import BaseRoute from "./baseRoute";
const App = () => (
  <LayoutWrapper>
    <Suspense fallback={<Loading />}>
      <BaseRoute />
    </Suspense>
  </LayoutWrapper>
);

export default App;
