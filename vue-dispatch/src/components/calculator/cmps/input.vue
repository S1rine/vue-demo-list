<template>
  <input
    type="text"
    :value="number"
    @input="updateNumber"
  />
</template>

<script>
export default {
  name: 'cal-input',
  props: {
    number: Number,
    field: String
  },
  methods: {
    updateNumber(e) {
      const value = Number(e.target.value);
      this.$emit('dispatch', 'updateNumber', this.field, value);
    }
  }
};
</script>