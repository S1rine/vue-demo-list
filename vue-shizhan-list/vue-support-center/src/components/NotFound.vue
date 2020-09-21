<template>
  <main class="not-found">
    <h1>无法找到该页面</h1>
    <p class="more-info">
      抱歉，我们无法找到你想要的页面。<br />
      它可能被移动或删除了。<br />
      检查你的拼写是否正确或点击下方按钮回到首页。
    </p>
    <div class="actions">
      <router-link tag="button" :to="{ name: 'home' }">回到首页</router-link>
    </div>
  </main>
</template>

<style lang="stylus" scoped>
.more-info {
  text-align: center;
}
</style>