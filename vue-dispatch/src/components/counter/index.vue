<template>
  <div>
    <counter-result :result="result" />
    <counter-button
      method="plus"
      text="+"
      @dispatch="dispatch"
    />
    <counter-button
      method="minus"
      text="-"
      @dispatch="dispatch"
    />
  </div>
</template>

<script>
import counterResult from './components/result';
import counterButton from './components/button';

import dispatch from '@/dispatches/counter';

export default {
  name: 'counter',
  components: {
    counterResult,
    counterButton
  },
  data() {
    return {
      result: 0
    };
  },
  methods: {
    dispatch(...args) {
      dispatch(this)(...args);
    }
  }
};
</script>