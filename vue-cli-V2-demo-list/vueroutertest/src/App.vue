<template>
  <div id="app">
    <h2>我是首页内容</h2>
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link :to="'/user/'+name">user</router-link>
   <!-- <button @click="homeClick">home</button>
    <button @click="aboutClick">about</button>
    <button @click="aboutClick">about</button>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      name: 'zhangsan'
    }
  },
  methods: {
    homeClick(){
      this.$router.push('/home')
    },
    aboutClick(){
      this.$router.push('/about')
    }
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
