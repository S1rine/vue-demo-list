<template>
  <ul id="new_song_list">
    <li
      class="list_item"
      v-for="item in list"
      :key="item.id"
    >
      <div
        class="img"
        @click="playSong(item.id)"
      >
        <img :src="item.picUrl">
        <span class="iconfont icon-play"></span>
      </div>
      <div class="desc">
        <div class="title">{{item.song.name}}</div>
        <div class="artist">{{item.song.artists[0].name}}</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'newSongList',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    playSong (_id) {
      if (!_id) return
      this.$bus.$emit('playSong', _id)
    }
  }
}
</script>

<style lang="scss" scoped>
$listHeight: 500px;
#new_song_list {
  width: 100%;
  height: $listHeight;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  .list_item {
    width: 49%;
    display: flex;
    align-items: center;
    height: 20%;
    padding-left: 20px;
    &:hover {
      background-color: #f5f5f5;
    }
    .img {
      height: 80px;
      position: relative;
      cursor: pointer;
      img {
        height: 100%;
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
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;
      div {
        display: block;
      }
      .title {
        font-size: 15px;
        margin-bottom: 12px;
      }
      .artist {
        font-size: 13px;
        color: grey;
      }
    }
  }
}
</style>
