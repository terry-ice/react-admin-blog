import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const Admin = React.lazy(() => import("../pages/Admin"));
const Login = React.lazy(() => import("../pages/Login"));

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
  {
    path: "/login",
    title: "login",
    icon: "login",
    component: Login
  },
];
export default Routes;
