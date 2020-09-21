import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

// 创建对象

const store = new Vuex.Store({
  state: {
    counter: 1000,
    person: {
      name: 'auy',
      age: 18,
      sex: 'male'
    }
  },
  mutations: {
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    changeName(state){
      setTimeout(()=>{      
        state.person.name="abc"
      },5000)
    }
  },
  actions: {
    UpdatedInfo(context, payload){
      console.log(context);
      return new Promise((resovle,reject)=>{
        setTimeout(() => {
          context.commit('changeName');
          console.log(payload);
          resovle('updated');
        }, 1000)
      })
    }
  },
  getters: {},
  modules: {}
})

// 导出对象
export default store