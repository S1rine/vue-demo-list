<template>
  <div id="search">
    <div class="title">
      <div class="name">{{keywords}}</div>
      <div class="desc">{{resultCount}}</div>
    </div>
    <div class="tab">
      <el-tabs
        v-model="type"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="歌曲"
          name="1"
        >
          <songList :list="list" />
        </el-tab-pane>
        <el-tab-pane
          label="歌单"
          name="1000"
        >
          <playList
            :list="list"
            :isShowCount="true"
          />
        </el-tab-pane>
        <el-tab-pane
          label="MV"
          name="1004"
        >角色管理</el-tab-pane>
      </el-tabs>
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
import songList from '@/views/search/songList.vue'
import playList from '@/components/songList.vue'
import { search } from '@/api/search.js'
export default {
  name: 'search',
  data () {
    return {
      limit: 15,
      page: 1,
      total: 0,
      type: '1',
      list: []
    }
  },
  created () {
    this.getList()
  },
  computed: {
    keywords () {
      return this.$route.query.keywords
    },
    resultCount () {
      return `已找到 ${this.total} 个结果`
    }
  },
  methods: {
    async getList () {
      const type = +this.type
      const limit = this.limit
      const offset = (this.page - 1) * limit
      const keywords = this.keywords
      let params = {
        keywords,
        type,
        limit,
        offset
      }
      const { code, result } = await search(params)
      if (code === this.CONFIG.CODE_SUCCESS) {
        const list = result.songs || result.playlists
        const count = result.songCount || result.playlistCount
        this.list = [...list]
        this.total = count
      }
    },
    handleClick () {
      this.getList()
    },
    handleChange () {
      this.getList()
    }
  },
  components: {
    songList,
    playList
  }
}
</script>

<style lang="scss" scoped>
#search {
  height: 100%;
  .title {
    display: flex;
    align-items: flex-end;
    .name {
      font-size: 30px;
      font-weight: bold;
    }
    .desc {
      margin-left: 10px;
      font-size: 15px;
      color: #bebebe;
    }
  }
  .tab {
    margin: 20px 0;
    ::v-deep {
      .el-tabs__active-bar {
        background-color: #c3473a;
      }
      .el-tabs__item:hover,
      .el-tabs__item.is-active {
        color: #c3473a;
      }
    }
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
