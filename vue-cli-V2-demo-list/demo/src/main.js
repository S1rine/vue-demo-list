import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})

// axios({
//   url: 'http://123.207.32.32:8000/api/wh/home/multidata'
// }).then(res => {
//   console.log(res);
// })
// axios({
//   url:'http: //123.207.32.32:8000/api/wh/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })
axios.defaults.baseURL = "http://123.207.32.32:8000/api/wh";
axios.defaults.timeout = 5000;
axios.all([axios({
  url: '/home/multidata'
}), axios({
  url: '/home/data',
  params: {
    type: 'sell',
    page: 5
  }
})]).then(results => {
  console.log(results);
})