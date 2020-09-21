<template>
  <ul
    class="song_list"
    :class="{showCount: isShowCount}"
  >
    <li
      class="list_item"
      v-for="item in list"
      :key="item.id"
    >
      <img :src="item.coverImgUrl || item.picUrl">
      <div
        class="descCount"
        v-if="isShowCount"
      >{{item.description || item.name}}</div>
      <div
        class="desc"
        v-else
      >{{item.name}}</div>
      <div class="modal">
        <div
          class="title"
          v-if="isShowCount"
        >{{item.playCount | count}}</div>
        <div
          class="title"
          v-else
        >{{item.copywriter}}</div>
        <span class="iconfont icon-play"></span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'songList',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    isShowCount: {
      type: Boolean,
      default: false
    }
  },
  filters: {
    count (val) {
      if (+val < 100000) return `播放量 ${val}`
      const res = Math.floor(val / 10000)
      return `播放量 ${res} 万`
    }
  }
}
</script>

<style lang="scss" scoped>
.song_list {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  width: 100%;
  .list_item {
    width: 18%;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    margin-bottom: 20px;
    img {
      width: 100%;
      border-radius: 5px;
    }
    .desc {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .descCount {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      font-size: 14px;
    }
    .modal {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      &:hover {
        .title {
          transform: translateY(0);
        }
        .icon-play {
          opacity: 1;
        }
      }
      .title {
        transform: translateY(-100%);
        background-color: rgba(0, 0, 0, 0.6);
        padding: 5px;
        color: #fff;
      }
      .icon-play {
        &::before {
          -webkit-transform: translateX(3px);
          transform: translateX(3px);
        }
        position: absolute;
        color: #dd6d60;
        background-color: hsla(0, 0%, 100%, 0.8);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        bottom: 28px;
        right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        opacity: 0;
      }
    }
  }
}
.showCount.song_list {
  .list_item {
    .modal {
      .icon-play {
        &::before {
          -webkit-transform: translateX(2px);
          transform: translateX(2px);
        }
        bottom: 54px;
      }
    }
  }
}
</style>
