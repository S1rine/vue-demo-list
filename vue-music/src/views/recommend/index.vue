<template>
  <div id="recommend">
    <div
      class="top"
      v-if="isTopShow"
    >
      <div class="img">
        <img :src="highQualityPlayList.coverImgUrl">
      </div>
      <div class="desc">
        <span class="tag">精品歌单</span>
        <div class="title">{{highQualityPlayList.name}}</div>
        <div class="text">{{highQualityPlayList.description}}</div>
      </div>
      <img
        class="bg"
        :src="highQualityPlayList.coverImgUrl"
      >
      <div class="bg_mask"></div>
    </div>
    <div class="tags">
      <tagList
        :tags="tags"
        :cat="cat"
        @updateCat="updateCat"
      />
    </div>
    <div class="playList">
      <songList
        :list="playList"
        :isShowCount="true"
      />
    </div>
    <div class="footer">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :current-page.sync="page"
        :page-size="limit"
        @current-change="handleChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import songList from '@/components/songList.vue'
import tagList from '@/components/tagList.vue'
import { getHighQualityPlayList, getPlayList } from '@/api/recommend.js'
export default {
  name: 'recommend',
  data () {
    return {
      isTopShow: true,
      playList: [],
      limit: 10,
      total: 0,
      page: 1,
      highQualityPlayList: {},
      highQualityLimit: 1,
      tags: ['全部',
        '欧美',
        '华语',
        '流行',
        '说唱',
        '摇滚',
        '民谣',
        '电子',
        '轻音乐',
        '影视原声',
        'ACG',
        '怀旧',
        '治愈',
        '旅行'
      ],
      cat: '全部'
    }
  },
  created () {
    this.getHighQualityPlayList()
    this.getPlayList()
  },
  methods: {
    async getHighQualityPlayList () {
      const limit = this.highQualityLimit
      const cat = this.cat
      let params = {
        limit,
        cat
      }
      const { playlists, code } = await getHighQualityPlayList(params)
      if (code === this.CONFIG.CODE_SUCCESS) {
        if (playlists.length === 0) return this.isTopShow = false
        this.isTopShow = true
        this.highQualityPlayList = playlists[0]
      }
    },
    async getPlayList () {
      const { limit, cat, page } = this
      const offset = (page - 1) * limit
      let params = {
        limit,
        cat,
        offset
      }
      const { playlists, code, total } = await getPlayList(params)
      if (code === this.CONFIG.CODE_SUCCESS) {
        this.playList = [...playlists]
        this.total = total
      }
    },
    handleChange () {
      this.getPlayList()
    },
    updateCat (_item) {
      this.cat = _item
      this.getHighQualityPlayList()
      this.getPlayList()
    }
  },
  components: {
    songList,
    tagList
  }
}
</script>

<style lang="scss" scoped>
#recommend {
  width: 100%;
  position: relative;
  .top {
    width: 100%;
    height: 200px;
    padding: 20px;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    .img {
      width: 160px;
      height: 160px;
      img {
        width: 100%;
      }
    }
    .desc {
      width: calc(100% - 160px);
      font-size: 13px;
      margin-left: 20px;
      overflow: hidden;
      .tag {
        font-size: 16px;
        color: #dfac67;
        border: 1px solid #dfac67;
        padding: 5px 15px;
        border-radius: 5px;
        cursor: pointer;
        line-height: 30px;
      }
      .title {
        padding-top: 10px;
        color: #fff;
        font-size: 16px;
      }
      .text {
        font-size: 14px;
        color: #888482;
        padding: 5px 0;
      }
    }
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      -webkit-filter: blur(20px);
      filter: blur(20px);
    }
    .bg_mask {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  .tags {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    margin-bottom: 20px;
    right: 0;
  }
  .playList {
    height: 100%;
  }
  .footer {
    margin-top: 30px;
    text-align: center;
    ::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
      background-color: #dd6d60;
    }
    ::v-deep .el-pagination.is-background .el-pager li:not(.disabled):hover {
      color: #dd6d60;
    }
  }
}
</style>
