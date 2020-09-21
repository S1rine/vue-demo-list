import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login_home_welcome"*/'@/components/Login.vue')
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "login_home_welcome"*/ '@/components/Home.vue'),
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: () => import(/* webpackChunkName: "login_home_welcome"*/ '@/components/Welcome.vue')
      },
      {
        path: '/users',
        component: () => import(/* webpackChunkName: "users_rights_roles"*/ '@/components/user/Users.vue')
      },
      {
        path: '/rights',
        component: () => import(/* webpackChunkName: "users_rights_roles"*/ '@/components/power/Rights.vue')
      },
      {
        path: '/roles',
        component: () => import(/* webpackChunkName: "users_rights_roles"*/ '@/components/power/Roles.vue')
      },
      {
        path: '/categories',
        component: () => import(/* webpackChunkName: "cate_params_goods"*/ '@/components/goods/Cate.vue')
      },
      {
        path: '/params',
        component: () => import(/* webpackChunkName: "cate_params_goods"*/ '@/components/goods/Params.vue')
      },
      {
        path: '/goods',
        component: () => import(/* webpackChunkName: "cate_params_goods"*/ '@/components/goods/List.vue')
      },
      {
        path: '/goods/add',
        component: () => import(/* webpackChunkName: "goods_orders_report"*/ '@/components/goods/Add.vue')
      },
      {
        path: '/orders',
        component: () => import(/* webpackChunkName: "goods_orders_report"*/ '@/components/order/Order.vue')
      },
      {
        path: '/reports',
        component: () => import(/* webpackChunkName: "goods_orders_report"*/ '@/components/report/Report.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  // to 代表将要访问的路径
  // from 代表从哪个路径而来
  // next 为一个函数为接下来跳转
  if (to.path === '/login') return next();
  const token = window.sessionStorage.getItem('token');
  if (!token) return next('/login');
  next();
});

export default router;
