<template>
  <ul>
    <li
      v-for="todo in list"
      :key="todo.id"
    >
      <input
        type="checkbox"
        :checked="todo.isCompleted"
        @click="updateStatus(todo.id)"
      />
      <span :class="{isCompleted: todo.isCompleted}">{{todo.value}}</span>
      <button @click="deleteClick(todo.id)">删除</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'td-list',
  props: {
    list: Array
  },
  methods: {
    updateStatus(id) {
      this.$emit('dispatch', 'update-status', id);
    },
    deleteClick(id) {
      this.$emit('dispatch', 'remove-todo', id);
    }
  }
};
</script>

<style lang="scss" scoped>
.isCompleted {
  text-decoration: line-through;
}
</style>