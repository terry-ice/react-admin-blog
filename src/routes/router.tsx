import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const Admin = React.lazy(() => import("../pages/Admin"));
const Login = React.lazy(() => import("../pages/Login"));

const Routes = [
  {
    path: "/home",
    title: "home",
    icon: "home",
    component: Home
  },
  {
    path: "/admin",
    title: "admin",
    icon: "admin",
    component: Admin
  }
];
const LoginRoute = {
  path: "/login",
  title: "login",
  icon: "login",
  component: Login
};
export default Routes;
export { LoginRoute };
