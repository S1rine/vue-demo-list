import {add, sub} from './js/mathUtils.js';

console.log(add(10,20));
console.log(sub(50,5));

import {name} from './js/info';

console.log(name);

require('./css/normal.css');

require('./css/special.less');
document.writeln('<h2>hello world</h2>')


import Vue from 'vue';

// import App from './vue/app';
import App from './vue/App.vue';

new Vue({
  el: '#app',
  template:`<App />`,
  data: {
    message: 'Hello World'
  },
  components: {
    App
  }
})