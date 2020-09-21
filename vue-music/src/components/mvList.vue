<template>
  <ul class="mv_list">
    <li
      class="list_item"
      v-for="item in list"
      :key="item.id"
    >
      <div class="img">
        <img :src="item.picUrl || item.cover">
        <span class="iconfont icon-play"></span>
      </div>
      <div class="desc">
        <div class="title">{{item.copywriter}}</div>
        <div
          class="name"
          v-if="isMvs"
        >{{item.name}}</div>
        <div
          class="artist"
          v-else
        >{{item.artistName}}</div>
      </div>
      <div class="playCount iconfont icon-play">{{item.playCount | formatCount}}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'mvList',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    isMvs: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.mv_list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .list_item {
    width: 22%;
    position: relative;
    margin-bottom: 20px;
    .img {
      width: 100%;
      position: relative;
      cursor: pointer;
      img {
        width: 100%;
        border-radius: 5px;
      }
      &:hover .icon-play {
        opacity: 1;
      }
      .icon-play {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30px;
        height: 30px;
        background-color: hsla(0, 0%, 100%, 0.8);
        color: #dd6d60;
        border-radius: 50%;
        font-size: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        &::before {
          transform: translate(1px, 1px);
        }
      }
    }
    .desc {
      .title {
        font-size: 14px;
      }
      .artist {
        margin-top: 5px;
        font-size: 14px;
        color: #c5c5c5;
      }
      .name {
        font-size: 14px;
      }
    }
    .playCount {
      position: absolute;
      right: 0;
      top: 0;
      color: #fff;
      font-size: 13px;
      background-color: rgba(0, 0, 0, 0.1);
      padding: 2px;
      &::before {
        font-size: 10px;
        padding-right: 3px;
        vertical-align: 1px;
      }
    }
  }
}
</style>
