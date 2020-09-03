import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const Admin = React.lazy(() => import('../pages/Admin'));
const Article = React.lazy(() => import('../pages/Article'));
const ArticleAdd = React.lazy(() => import('../pages/Article/Add'));
const Tags = React.lazy(() => import('../pages/Tags'));
// const TagsUpdate = React.lazy(() => import('../pages/Tags/Update'));
const Category = React.lazy(() => import('../pages/Category'));
// const CategoryUpdate = React.lazy(() => import('../pages/Category/Update'));
const Comment = React.lazy(() => import('../pages/Comment'));

const Login = React.lazy(() => import('../pages/Login'));

const Routes: Routers[] = [
  {
    path: '/home',
    title: 'Home',
    icon: 'home',
    component: Home
  },
  {
    path: '/admin',
    title: 'Setting',
    icon: 'setting',
    component: Admin
  },
  {
    path: '/article',
    title: 'article',
    icon: 'project',
    children: [
      {
        path: '/article/list',
        title: 'article',
        icon: 'ordered-list',
        component: Article
      },
      {
        path: '/article/add/:id',
        title: 'add',
        icon: 'plus',
        component: ArticleAdd
      }
    ]
  },
  {
    path: '/tags',
    title: 'tags',
    icon: 'tag',
    component: Tags
  },
  {
    path: '/category',
    title: 'category',
    icon: 'menu',
    component: Category,
  },
  {
    path: '/comment',
    title: 'comment',
    icon: 'smile',
    component: Comment
  }
];
const LoginRoute = {
  path: '/login',
  title: 'login',
  icon: 'login',
  component: Login
};
export default Routes;
export { LoginRoute, Routes };
