import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import '@/assets/app.scss';
// 导入 Element_ui
import ElementUI from 'element-ui'
// 导入 Element-ui 样式
import 'element-ui/lib/theme-chalk/index.css'
// 插件 Element-ui
Vue.use(ElementUI)

Vue.prototype.$bus = new Vue()

import COMMON_GLOBAL from './utils/common'
Object.keys(COMMON_GLOBAL).forEach((key) => {
  Vue.prototype[key] = COMMON_GLOBAL[key]
})

import moment from 'moment';
// 全局过滤器
Vue.filter('formatDuration', (dt) => {
  // 转分
  let min = Math.ceil(dt / 1000 / 60);
  min = min < 10 ? '0' + min : min;
  // 秒
  let sec = Math.ceil((dt / 1000) % 60);
  sec = sec < 10 ? '0' + sec : sec;
  return min + ':' + sec;
})
Vue.filter('formatTime', (time) => {
  return moment(time).format('YYYY-MM-DD hh:mm:ss');
})
Vue.filter('formatCount', (count) => {
  if (count / 10000 > 10) {
    return parseInt(count / 10000) + '万';
  } else {
    return count;
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
