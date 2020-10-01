<template>
  <button @click="btnClick">{{text}}</button>
</template>

<script>
export default {
  name: 'counter-button',
  props: {
    text: String,
    method: String
  },
  methods: {
    btnClick() {
      this.$emit('dispatch', this.method);
    }
  }
};
</script>