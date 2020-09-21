<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipeList" :key="item.id">
        <img :src="item.img" alt :class="{'full':isFull}"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    props: ['swipeList','isFull'],
    methods: {}
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
      text-align: center;
      padding: 10px 0;
    img {
      height: 100%;
    }
  }
}
.full {
    width: 100%;
}
</style>