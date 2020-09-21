<template>
  <div id="navbar">
    <div class="left">
      <ul class="item">
        <li class="first">
          <i class="iconfont icon-home"></i>
        </li>
        <li class="second">
          <i class="iconfont icon-sami-select"></i>
        </li>
        <li class="thrid">
          <i class="iconfont icon-full-screen"></i>
        </li>
      </ul>
    </div>
    <div class="center">
      <div class="button">
        <i
          class="el-icon-arrow-left"
          @click="$router.go(-1)"
        ></i>
        <i
          class="el-icon-arrow-right"
          @click="$router.go(1)"
        ></i>
      </div>
    </div>
    <div class="right">
      <el-input
        placeholder="搜索"
        size="mini"
        v-model="keywords"
        @keyup.enter.native="search"
      >
        <i
          slot="prefix"
          class="el-input__icon el-icon-search"
        ></i>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data () {
    return {
      keywords: ''
    }
  },
  methods: {
    search () {
      if (this.keywords === '') return this.$message.error('请输入关键词')
      const keywords = this.keywords
      const path = '/search'
      let query = {
        keywords
      }
      this.$router.push({ path, query })
    }
  }
}
</script>

<style lang="scss" scoped>
$leftWidth: 180px;
$rightWidth: 250px;
$topHeight: 60px;
$itemWidth: 18px;
$inputWidth: 210px;
$inputHeight: 30px;

#navbar {
  display: flex;
  height: $topHeight;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  .left {
    width: $leftWidth;
    padding-left: 15px;
    .item {
      display: flex;
      height: 100%;
      li {
        width: $itemWidth;
        height: $itemWidth;
        border-radius: 50%;
        margin-left: 18px;
        cursor: pointer;
        &.first {
          background-color: #dd6d60;
        }
        &.second {
          background-color: #dcc060;
        }
        &.thrid {
          background-color: #84bb58;
        }
        i {
          font-size: 14px;
          position: relative;
          left: 2px;
          top: -3px;
          opacity: 0;
        }
        &:hover i {
          opacity: 1;
        }
      }
    }
  }
  .center {
    display: flex;
    flex-grow: 1;
    .button {
      i {
        font-size: 20px;
        margin-right: 20px;
        cursor: pointer;
      }
    }
  }
  .right {
    width: $rightWidth;
    .el-input {
      width: $inputWidth;
    }
  }
}
</style>
