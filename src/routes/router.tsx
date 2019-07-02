import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const Admin = React.lazy(() => import("../pages/Admin"));

const Routes = [
  {
    path: "/admin",
    title: "admin",
    icon: "admin",
    component: Admin
  },
  {
    path: "/home",
    title: "home",
    icon: "home",
    component: Home
  },
];
export default Routes;
