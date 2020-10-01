<template>
  <div>
    <td-title :title="title" />
    <td-form @dispatch="dispatch" />
    <td-list
      :list="list"
      @dispatch="dispatch"
    />
  </div>
</template>

<script>
import tdTitle from './cmps/title';
import tdForm from './cmps/form';
import tdList from './cmps/list';

import dispatch from '@/dispatches/todoList';

export default {
  name: 'todo-list',
  components: {
    tdTitle,
    tdForm,
    tdList
  },
  data() {
    return {
      title: 'todo-list',
      list: [{ id: 1, value: 'abc', isCompleted: true }]
    };
  },
  methods: {
    dispatch(...args) {
      dispatch(this)(...args);
    }
  }
};
</script>