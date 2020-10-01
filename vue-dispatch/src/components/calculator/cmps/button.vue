<template>
  <button
    :class="{active: curIdx === method}"
    @click="btnClick"
  >{{text}}</button>
</template>

<script>
export default {
  name: 'cal-button',
  props: {
    text: String,
    method: String,
    curIdx: String
  },
  methods: {
    btnClick() {
      this.$emit('dispatch', 'updateMethod', this.method);
    }
  }
};
</script>

<style lang="scss" scoped>
.active {
  background-color: orange;
  color: #fff;
}
</style>