<template>
  <div>
    <h2>我是Home组件内容</h2>
    <router-link to="/home/news">新闻组件</router-link>
    <router-link to="/home/message">消息组件</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  created(){
    console.log('home created');
  },
  destroyed(){
    console.log('home destroyed');
  }
} 
</script>

<style scoped>

</style>