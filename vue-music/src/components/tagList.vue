<template>
  <ul class="tag_list">
    <li
      class="tag_item"
      :class="{active: item === activeCat}"
      v-for="(item, index) in tags"
      :key="index"
      @click="tagClick(item)"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'tagList',
  props: {
    cat: {
      type: String,
      default: '全部'
    },
    tags: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      activeCat: this.cat
    }
  },
  methods: {
    tagClick (_item) {
      if (_item === this.activeCat) return
      this.activeCat = _item
      this.$emit('updateCat', _item)
    }
  }
}
</script>

<style lang="scss" scoped>
.tag_list {
  display: flex;
  .tag_item {
    margin-left: 20px;
    font-size: 15px;
    cursor: pointer;
  }
  .tag_item.active {
    color: #dd6d60;
  }
}
</style>
