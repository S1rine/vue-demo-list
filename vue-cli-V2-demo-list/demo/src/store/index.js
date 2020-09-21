import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 3
  },
  mutations: {
    increment(state, extra){
      console.log(extra);
      state.counter++;
    },
    decrement(state){
      state.counter--;
    }
  },
  actions: {

  },
  getters: {
    powerCounter(state){
      return function(n){
        return Math.pow(state.counter, n);
      }
    }
  },
  modules: {

  }
})

export default store