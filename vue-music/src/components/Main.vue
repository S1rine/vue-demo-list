<template>
  <div id="main">
    <div class="left">
      <el-menu
        active-text-color="#dd6d60"
        @select="handleSelect"
        :default-active="activeIndex"
      >
        <el-menu-item
          v-for="(item, index) in menuList"
          :key="index"
          :index="item.path"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{ item.text }}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="right">
      <el-scrollbar style="height:100%">
        <router-view />
      </el-scrollbar>
    </div>
    <div class="footer">
      <audio
        controls
        :src="url"
        autoplay
        loop
      ></audio>
    </div>
  </div>
</template>

<script>
import { getSong } from '@/api/discovery.js'
export default {
  data () {
    return {
      url: '',
      activeIndex: '/discovery',
      menuList: [{ icon: 'iconfont icon-find-music', path: '/discovery', text: '发现音乐' }, { icon: 'iconfont icon-music-list', path: '/recommend', text: '推荐歌单' }, { icon: 'iconfont icon-music', path: '/news', text: '最新音乐' }, { icon: 'iconfont icon-mv', path: '/mvs', text: '最新MV' }]
    }
  },
  created () {
    this.checkIndex()
    this.$bus.$on('playSong', this.playSong)
  },
  beforeDestroy () {
    this.$bus.$off('playSong', this.playSong)
  },
  methods: {
    checkIndex () {
      const _path = this.$route.path
      this.activeIndex = _path
    },
    handleSelect (_index) {
      this.activeIndex = _index
      this.$router.push(_index)
    },
    async playSong (_id) {
      let params = {
        id: _id
      }
      const { data, code } = await getSong(params)
      if (code === this.CONFIG.CODE_SUCCESS) {
        this.url = data[0].url
      }
    }
  },
  watch: {
    $route () {
      this.checkIndex()
    }
  },
}
</script>

<style lang="scss" scoped>
$leftWidth: 180px;
$footerHeight: 54px;
#main {
  display: flex;
  .left,
  .right {
    height: calc(100% - #{$footerHeight});
  }
  .left {
    width: $leftWidth;
    background-color: #ededed;
    .el-menu {
      background-color: transparent;
      .el-menu-item {
        font-size: 16px;
        text-align: center;
        i {
          padding-right: 15px;
        }
      }
    }
    ::v-deep .el-menu-item:focus,
    .el-menu-item:hover {
      background-color: #e7e7e7;
    }
  }
  .right {
    flex-grow: 1;
    padding: 10px;
    .el-scrollbar__view > div {
      max-width: 1100px;
      margin: 0 auto;
    }
    ::v-deep .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
  .footer {
    height: $footerHeight;
    width: 100%;
    position: fixed;
    bottom: 0;
    audio {
      width: 100%;
      height: 100%;
      border-radius: 0;
      outline: none;
    }
  }
}
</style>
