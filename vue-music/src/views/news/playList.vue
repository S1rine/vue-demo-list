<template>
  <div id="play_list">
    <el-table
      :data="list"
      stripe
      style="width: 100%"
    >
      <el-table-column width="180">
        <template slot-scope="scope">
          <div class="index">
            <span class="number">{{scope.$index + 1}}</span>
            <div
              class="img"
              @click="playSong(scope.row)"
            >
              <img
                :src="scope.row.album.picUrl"
                class="img"
              >
              <span class="iconfont icon-play"></span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="音乐标题"
        width="280"
      >
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
          <span
            class="iconfont icon-mv"
            v-if="scope.row.mvid !== 0"
          ></span>
        </template>
      </el-table-column>
      <el-table-column
        label="歌手"
        width="200"
      >
        <template slot-scope="scope">
          <span>{{scope.row.artists[0].name}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="专辑"
        width="360"
      >
        <template slot-scope="scope">
          <span>{{scope.row.album.name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="时长">
        <template slot-scope="scope">
          <span>{{scope.row.duration | formatDuration}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'playList',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    playSong (_item) {
      if (!_item.id) return
      this.$bus.$emit('playSong', _item.id)
    }
  }
}
</script>

<style lang="scss" scoped>
#play_list {
  height: 100%;
  .index {
    display: flex;
    align-items: center;
    .number {
      margin-right: 30px;
    }
    .img {
      width: 70px;
      position: relative;
      cursor: pointer;
      img {
        width: 100%;
        display: block;
        border-radius: 5px;
      }
      .icon-play {
        &::before {
          transform: translateX(2px);
        }
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #dd6d60;
        background-color: hsla(0, 0%, 100%, 0.8);
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
      }
    }
  }
  .icon-mv::before {
    cursor: pointer;
    color: #dd6d60;
    padding-left: 10px;
  }
}
</style>
