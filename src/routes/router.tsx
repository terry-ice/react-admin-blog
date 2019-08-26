import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const Admin = React.lazy(() => import("../pages/Admin"));
const Article = React.lazy(() => import("../pages/Article"));
const Tags = React.lazy(() => import("../pages/Tags"));
const Category = React.lazy(() => import("../pages/Category"));
const CategoryUpdate = React.lazy(() => import("../pages/Category/Update"));
const Comment = React.lazy(() => import("../pages/Comment"));

const Login = React.lazy(() => import("../pages/Login"));

const Routes = [
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
  },
  {
    path: "/tags",
    title: "tags",
    icon: "tag",
    component: Tags
  },
  {
    path: "/category",
    title: "category",
    icon: "menu",
    component: Category
  },
  {
    path: "/category/update",
    title: "category_update",
    icon: "menu",
    component: CategoryUpdate
  },
  {
    path: "/comment",
    title: "comment",
    icon: "smile",
    component: Comment
  }
];
const LoginRoute = {
  path: "/login",
  title: "login",
  icon: "login",
  component: Login
};
export default Routes;
export { LoginRoute, Routes };
