// 入口文件
import Vue from 'vue';

// 导入路由包
import VueRouter from 'vue-router';
Vue.use(VueRouter)

// 导入时间插件
import moment from 'moment';

// 定义全局过滤器
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern);
})

// 导入 vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005/';
Vue.http.options.emulateJSON = true;
// 导入mui样式
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';


import Vuex from 'vuex';
Vue.use(Vuex);
var cart = JSON.parse(localStorage.getItem('cart')||'[]');
var store = new Vuex.Store({
    state: {
        cart: cart,//商品对象为 {id:, count:,price:,selected:}
    },
    mutations: {
        addToCart(state, good){
            var flag = state.cart.some(item => {
                if(item.id == good.id){
                    item.count += parseInt(good.count);
                    return true;
                }
            })
            if(!flag){
                state.cart.push(good);
            }
            localStorage.setItem('cart',JSON.stringify(state.cart));
        },
        updateGoodsInfo(state,goodsInfo){
            state.cart.some(item => {
                if(item.id == goodsInfo.id){
                    item.count = parseInt(goodsInfo.count);
                    return true;
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeCart(state,id){
            state.cart.some((item,i) => {
                if(item.id == id){
                    state.cart.splice(i,1);
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        updateGoodsSelected(state, info){
            state.cart.some(item => {
                if(item.id == info.id){
                    item.selected = info.selected;
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    },
    getters: {
        getAllCount(state){
            var c = 0;
            state.cart.forEach(item => {
                c += item.count;
            })
            return c;
        },
        getGoodsCount(state){
            var o = {};
            state.cart.forEach(item => {
                o[item.id]=item.count;
            })
            return o;
        },
        getGoodsSelected(state){
            var o = {};
            state.cart.forEach(item => {
                o[item.id]=item.selected;
            })
            return o;
        },
        getGoodsCountAmount(state){
            var o = {
                count: 0,
                amount: 0
            };
            state.cart.forEach(item => {
                if(item.selected){
                    o.count += item.count;
                    o.amount += item.price * item.count;
                }
            })
            return o;
        }
    }
})


// import {
//     Header,
//     Swipe,
//     SwipeItem,
//     Button,
//     Lazyload
// } from 'mint-ui';

// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import VuePreview from 'vue-preview';
Vue.use(VuePreview);


import router from './router.js';

import app from './App.vue';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';
Vue.use(MintUI)
var vm = new Vue({
    el: '#app',
    render: h => h(app),
    router,
    store
});