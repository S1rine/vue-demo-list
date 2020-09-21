import Router from "vue-router";
import Vue from 'vue';
// 路由懒加载
const Home = () => import("../components/Home");
const HomeNews = () => import("../components/HomeNews");
const HomeMessage = () => import("../components/HomeMessage");
const About = () => import("../components/About");
const User = () => import("../components/User");
const Profile = () => import("../components/Profile");

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
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
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
    component: About,
    meta: {
      title: '关于'
    },
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]

const router = new Router({
  routes,
  mode: 'history',
  // linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  // 从 from 跳转到 to 
  document.title = to.matched[0].meta.title;
  console.log(to);
  next();
})

export default router;
