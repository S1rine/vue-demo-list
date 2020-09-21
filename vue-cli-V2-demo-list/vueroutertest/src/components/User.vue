<template>
  <div>
    我是user组件内容
    <p>{{userId}}</p>
  </div>
</template>

<script>
export default {
  name: "user",
  computed: {
    userId(){
      console.log(this.$router);
      return this.$route.params.userId;
    }
  }
}
</script>

<style scoped>

</style>
