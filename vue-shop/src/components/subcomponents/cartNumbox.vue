<template>
  <div class="numbox">
    <div class="mui-numbox" data-numbox-min="1" style="height: 25px;">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" :value="count" @change="countChange" ref="numbox" readonly/>
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
        this.$store.commit('updateGoodsInfo',{id: this.goodsID, count: this.$refs.numbox.value})
      }
    },
    props: ['count','goodsID'],
};
</script>
<style lang="scss" scoped>
.numbox {
    display: inline-block;
    width: 100px;
}
.mui-numbox {
  width: 95px;
  padding: 0 30px;
  button {
    width: 30px;
  }
}
</style>