<template>
  <div id="app">
    <h1>App组件</h1>
    <p>
      {{$store.state.counter}}
    </p>
    <p>
      {{ $store.state.person }}
    </p>
    <button @click="addition">+</button>
    <button @click="substation">-</button>
    <button @click="asyncClick">异步延迟操作</button>
    <br>
    <router-link tag="button" to="/home" replace>首页</router-link>
    <router-link tag="button" to="/about" replace>关于</router-link>
    <button @click="userclick">用户</button>
    <button @click="profileclick">档案</button>

    <keep-alive exclude="Home">

      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      id: 1,
    }
  },
  methods: {
    addition(){
      this.$store.commit('increment')
    },
    substation(){
      this.$store.commit('decrement')
    },
    userclick(){
      this.$router.replace('/user/'+ this.id);
    },
    profileclick(){
      this.$router.replace({
        path: '/profile',
        query: {
          id: this.id,
          name: 'aaa'
        }
      }, () => {})
    },
    asyncClick(){
      this.$store
      .dispatch('UpdatedInfo','i am payload')
      .then(res => {
        console.log(res);
      })
    }
  }
}

</script>
<style scoped>
.active {
  color: red;
}
</style>