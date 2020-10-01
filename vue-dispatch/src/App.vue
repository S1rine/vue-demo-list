<template>
  <div id="app">
    <counter />
    <hr />
    <calculator />
    <hr />
    <todo-list />
  </div>
</template>

<script>
import counter from '@/components/counter/index';
import calculator from '@/components/calculator/index';
import todoList from '@/components/todo-list/index';

export default {
  name: 'App',
  components: {
    counter,
    calculator,
    todoList
  }
};
</script>
