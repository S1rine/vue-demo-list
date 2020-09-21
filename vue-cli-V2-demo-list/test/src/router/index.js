import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import User from '@/components/User'
import News from '@/components/HomeNews'
import Message from '@/components/HomeMessage'
import Profile from '@/components/Profile'

// const Home = () => import('@/components/Home')
// const About = () => import('@/components/About')
// const User = () => import('@/components/User')
const routerPush = Router.prototype.push;
const routerReplace = Router.prototype.replace;
Router.prototype.push = function push(location){
  return routerPush.call(this, location).catch(error => error)
}
Router.prototype.replace = function replace(location) {
  return routerReplace.call(this, location).catch(error => error)
}

Vue.use(Router)

const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: News
      },
      {
        path: 'message',
        component: Message
      }
    ],
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:id',
    component: User,
    meta: {
      title: '用户'
    },
    beforeEnter: (to, from, next) => {
      // console.log('----')
      // console.log(to);
      // console.log(from);
      next()
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
    beforeEnter: (to, from, next) => {
      // console.log(from);
      next()
    }
  }
]

const router  = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
 
  next()
})
export default router
