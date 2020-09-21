import Router from "vue-router";
import Vue from 'vue';
// 路由懒加载
const Home = () => import("../components/Home");
const HomeNews = () => import("../components/HomeNews");
const HomeMessage = () => import("../components/HomeMessage");
const About = () => import("../components/About");
const User = () => import("../components/User");

Vue.use(Router);

const routerPush = Router.prototype.push;
const routerReplace = Router.prototype.replace;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
Router.prototype.replace = function replace(location) {
  return routerReplace.call(this, location).catch(error => error)
}

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  }
]

const router = new Router({
  routes,
  mode: 'history',
  // linkActiveClass: 'active'
})

export default router;
