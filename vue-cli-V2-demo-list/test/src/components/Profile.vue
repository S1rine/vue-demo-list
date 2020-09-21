<template>
  <div>
    Profile component
    <h2>
      {{ $route.query.name }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "Profile",
}

</script>
<style scoped>
</style>