<template>
  <div>
    <h2>用户组件</h2>
    <p>{{ userId }}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  data(){
    return {
      // id: this.$route,
    }
  },
  methods: {
    show(){
      console.log(this.$route);
      console.log(this.$router);
    }
  },
  computed: {
    userId(){
      return this.$route.params.id;
    }
  }
}

</script>
<style scoped>
</style>