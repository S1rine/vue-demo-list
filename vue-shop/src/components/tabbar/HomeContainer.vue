<template>
  <div>
    <swipe :swipeList="swipeList" :isFull="true"></swipe>

    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
              <img src="../../img/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photolist">
              <img src="../../img/menu2.png" alt="">
              <span class="mui-badge">5</span>
            </span>
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/goodslist">
              <img src="../../img/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
              <img src="../../img/menu4.png" alt="">
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
              <img src="../../img/menu5.png" alt="">
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
              <img src="../../img/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>

    <h3>HomeContainer</h3>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import swipe from '../subcomponents/swipe.vue';

export default {
  data() {
    return {
      swipeList: []
    };
  },
  created() {
    this.getSwipe();
  },
  methods: {
    getSwipe() {
      this.$http
        .get("api/getlunbo")
        .then(result => {
          if (result.body.status === 0) {
            this.swipeList = result.body.message;
          } else {
            Toast("获取轮播图失败");
          }
        });
    }
  },
  components: {
    swipe
  }
};
</script>

<style lang="scss" scoped>

.mui-grid-view.mui-grid-9 {
    background: #fff;
    border: none;
    
    .mui-table-view-cell{
        border: none;

        .mui-media-body {
            font-size: 13px;
        }
        img {
            width: 50%;
        }
    }
}
</style>