<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id == 0 ? 'mui-active':'']"
            v-for="item in cates"
            :key="item.id"
            @tap="getImage(item.id)"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>
    <ul class="photo-list">
      <router-link tag="li" :to="'/home/photoinfo/'+item.id" v-for="item in list" :key="item.id">
        <img v-lazy="item.img_url" />
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  data() {
    return {
      cates: [],
      list: []
    };
  },
  mounted() {
    // 当组件中的dom结构被渲染好并放到页面后执行的钩子函数
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  created() {
    this.getAllCategory();
    this.getImage(0);
  },
  methods: {
    getAllCategory() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          result.body.message.unshift({ title: "全部", id: 0 });
          this.cates = result.body.message;
        }
      });
    },
    getImage(id) {
      this.$http.get("api/getimages/" + id).then(result => {
        if (result.body.status === 0) {
          this.list = result.body.message;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
.photo-list {
  padding: 10px;
  margin: 0;
  li {
    list-style: none;
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    position: relative;
    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      color: #fff;
      text-align: left;
      background-color: rgba(0,0,0,.4);
      max-height: 84px;
      padding: 5px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
        line-height: 14px;
      }
    }
    img {
      width: 100%;
      display: block;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
  }
}
</style>