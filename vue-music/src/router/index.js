import Vue from 'vue'
import VueRouter from 'vue-router'

// import discovery from '@/views/discovery/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/discovery'
  },
  {
    path: '/discovery',
    name: 'discovery',
    component: () => import('@/views/discovery/index.vue')
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('@/views/recommend/index.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/news/index.vue')
  },
  {
    path: '/mvs',
    name: 'mvs',
    component: () => import('@/views/mvs/index.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
