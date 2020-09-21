<template>
  <div class="app-layout">
    <header class="header">
      <div>
        <img src="../assets/logo.svg" alt="logo" class="img" />
      </div>
      <div>My shirt shop</div>
    </header>
    <NavMenu />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavMenu from './NavMenu'
export default {
  components: {
    NavMenu
  }
}
</script>

<style lang="stylus">
@import '../style/main';

body {
  padding-bottom: 0px;
}
</style>

<style lang="stylus" scoped>
.header {
  .img {
    width: 64px;
    height: 64px;
  }
}
</style>