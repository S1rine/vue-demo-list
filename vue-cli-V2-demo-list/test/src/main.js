import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

import {request} from '@/network/request'
request({
  url: 'category',
}).then(err => {
  console.log(err)
}).catch(err => {
  console.log(err)
})