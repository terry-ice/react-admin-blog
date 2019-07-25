import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const Admin = React.lazy(() => import("../pages/Admin"));
const Article = React.lazy(() => import("../pages/Article"));
// const AddArticle = React.lazy(() => import("../pages/AddArticle"));

const Login = React.lazy(() => import("../pages/Login"));

const routes = [
  {
    path: "/home",
    title: "Home",
    icon: "home",
    component: Home
  },
  {
    path: "/admin",
    title: "Setting",
    icon: "setting",
    component: Admin
  },
  {
    path: "/article",
    title: "article",
    icon: "setting",
    component: Article
  }
];
const LoginRoute = {
  path: "/login",
  title: "login",
  icon: "login",
  component: Login
};
export default routes;
export { LoginRoute };
