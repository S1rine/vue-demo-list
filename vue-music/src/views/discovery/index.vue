<template>
  <div id="discovery">
    <el-carousel
      :interval="4000"
      type="card"
      height="200px"
    >
      <el-carousel-item
        v-for="(item, index) in bannerList"
        :key="index"
      >
        <img :src="item.imageUrl">
      </el-carousel-item>
    </el-carousel>
    <div class="recommend">
      <div class="title">推荐歌单</div>
      <div class="recommend-list">
        <songList
          :list="personalizedList"
          :isShowCount="false"
        />
      </div>
    </div>
    <div class="news">
      <div class="title">最新音乐</div>
      <div class="news-list">
        <NewSongList :list="newSongList" />
      </div>
    </div>
    <div class="mvs">
      <div class="title">推荐MV</div>
      <div class="mv-list">
        <mvList :list="mvList" />
      </div>
    </div>
  </div>
</template>

<script>
import songList from '@/components/songList.vue'
import NewSongList from '@/views/discovery/NewSongList.vue'
import mvList from '@/components/mvList.vue'
import { bannerList, personalizedList, newSongList, getMvList } from '@/api/discovery.js'
export default {
  name: 'discovery',
  data () {
    return {
      bannerList: [],
      personalizedList: [],
      newSongList: [],
      mvList: [],
      deviceType: 0,
      limit: 10
    }
  },
  created () {
    this.getBannerList()
    this.getPersonalizedList()
    this.getNewSongList()
    this.getMvList()
  },
  methods: {
    async getBannerList () {
      const type = this.deviceType
      let params = {
        type
      }
      const { banners, code } = await bannerList(params)
      if (code === this.CONFIG.CODE_SUCCESS) {
        this.bannerList = [...banners]
      }
    },
    async getPersonalizedList () {
      const limit = this.limit
      let params = {
        limit
      }
      const { result, code } = await personalizedList(params)
      if (code === this.CONFIG.CODE_SUCCESS) {
        this.personalizedList = [...result]
      }
    },
    async getNewSongList () {
      const { result, code } = await newSongList()
      if (code === this.CONFIG.CODE_SUCCESS) {
        this.newSongList = [...result]
      }
    },
    async getMvList () {
      const { result, code } = await getMvList()
      if (code === this.CONFIG.CODE_SUCCESS) {
        this.mvList = [...result]
      }
    }
  },
  components: {
    songList,
    NewSongList,
    mvList
  }
}
</script>

<style lang="scss" scoped>
#discovery {
  height: 100%;
  > div {
    margin-bottom: 20px;
  }
  .el-carousel {
    img {
      height: 100%;
      border-radius: 10px;
    }
  }
  .title {
    margin-bottom: 25px;
    & + div {
      padding: 0 10px;
    }
  }
}
</style>
