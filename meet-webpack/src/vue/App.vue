<template>
  <div class="title">
    {{ message }}    
    <p>{{name}}</p>
    <p>{{name}}</p>
    <Cpn />
  </div>
</template>

<script>
import Cpn from './Cpn'

export default {
  name: "App",
  data() {
    return {
      message: 'hello world',
      name: 'zy'
    }
  },
  components: {
    Cpn
  }
}
</script>

<style scoped>
.title {
  color: skyblue;
}
</style>