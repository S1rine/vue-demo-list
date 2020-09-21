<template>
  <div class="numbox">
    <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="maxlength">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChange" ref="numbox"/>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js';
export default {
    mounted(){
        mui(".mui-numbox").numbox();
    },
    methods:{
      countChange(){
        this.$emit('getcount',parseInt(this.$refs.numbox.value));
      }
    },
    props: ['maxlength'],
    watch:{
      'maxlength': function(newVal){
        mui(".mui-numbox").numbox().setOption("max",newVal)
      }
    }
};
</script>
<style lang="scss" scoped>
.numbox {
    display: inline-block;
}
</style>