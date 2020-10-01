<template>
  <div>
    <cal-result :result="result" />
    <cal-input
      field="firstNumber"
      :number="firstNumber"
      @dispatch="dispatch"
    />
    <cal-input
      field="secondNumber"
      :number="secondNumber"
      @dispatch="dispatch"
    />
    <cal-button
      text="+"
      method="plus"
      :curIdx="curIdx"
      @dispatch="dispatch"
    />
    <cal-button
      text="-"
      method="minus"
      :curIdx="curIdx"
      @dispatch="dispatch"
    />
    <cal-button
      text="*"
      method="mul"
      :curIdx="curIdx"
      @dispatch="dispatch"
    />
    <cal-button
      text="/"
      method="divi"
      :curIdx="curIdx"
      @dispatch="dispatch"
    />
  </div>
</template>

<script>
import calResult from './cmps/result';
import calInput from './cmps/input';
import calButton from './cmps/button';

import dispatch from '@/dispatches/calculator';

export default {
  name: 'calculator',
  components: {
    calResult,
    calInput,
    calButton
  },
  data() {
    return {
      result: 0,
      firstNumber: 0,
      secondNumber: 0,
      curIdx: 'plus'
    };
  },
  methods: {
    dispatch(...args) {
      dispatch(this)(...args);
    }
  }
};
</script>