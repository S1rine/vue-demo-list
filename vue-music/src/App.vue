<template>
  <div id="app">
    <NavBar class="top" />
    <Main class="main" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Main from '@/components/Main.vue'
export default {
  components: {
    NavBar,
    Main
  }
}
</script>

<style lang="scss" scoped>
$topHeight: 60px;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  color: #2c3e50;
  .main {
    height: calc(100% - #{$topHeight});
  }
}
</style>
