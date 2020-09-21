<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <p>{{$store.getters.powerCounter(3)}}</p>
  </div>
</template>

<script>
  export default {
    name: "HelloVuex",
    data(){
      return {
        
      }
    },
    components: {
      
    }
  }
</script>

<style scoped>
  
</style>