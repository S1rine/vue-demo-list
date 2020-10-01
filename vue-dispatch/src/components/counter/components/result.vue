<template>
  <h1>{{ result }}</h1>
</template>
<script>
export default {
  name: 'counter-result',
  props: {
    result: Number
  }
};
</script>