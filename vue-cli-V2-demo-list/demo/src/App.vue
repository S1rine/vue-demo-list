<template>
  <div id="app">
    <h2>我是首页内容</h2>
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <!-- <router-link :to="'/user/'+name">user</router-link>
    <router-link :to="{path: '/profile', query: {name: 'zy', age: 18}}">profile</router-link> -->
    <button @click="userClick">user</button>
    <button @click="profileClick">profile</button>
   <!-- <button @click="homeClick">home</button>
    <button @click="aboutClick">about</button>
    <button @click="aboutClick">about</button>-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <h2>{{this.$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <hello-vuex></hello-vuex>

  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
export default {
  name: 'App',
  data(){
    return {
      name: 'zhangsan',
      counter: this.$store.state.counter,
    }
  },
  methods: {
    homeClick(){
      this.$router.push('/home')
    },
    aboutClick(){
      this.$router.push('/about')
    },
    userClick(){
      this.$router.push('/user/'+this.name);
    },
    profileClick(){
      this.$router.push({
        path: '/profile',
        query: {
          name: 'zy',
          age: 17
        }
      })
    },
    addition(){
      this.$store.commit({
        type: 'increment',
        extra: 50
      });
    },
    subtraction(){
      this.$store.commit('decrement');
    }
  },
  components: {
    HelloVuex
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active {
  color: red;
}
</style>
