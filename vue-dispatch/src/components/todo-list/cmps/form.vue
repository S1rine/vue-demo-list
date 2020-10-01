<template>
  <form @submit.prevent="submitTodo">
    <input
      placeholder="please enter your todo item"
      type="text"
      v-model="value"
    >
  </form>
</template>

<script>
export default {
  name: 'td-form',
  data() {
    return {
      value: ''
    };
  },
  methods: {
    submitTodo() {
      let todo = {
        id: Date.now(),
        value: this.value,
        isCompleted: false
      };
      this.$emit('dispatch', 'add-todo', todo);
      this.value = '';
    }
  }
};
</script>