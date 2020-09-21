<template>
  <div id="news">
    <div class="tags">
      <tagList
        :tags="tags"
        :cat="cat"
        @updateCat="updateCat"
      />
    </div>
    <div class="play_list">
      <playList :list="newSongList" />
    </div>
  </div>
</template>

<script>
import tagList from '@/components/tagList.vue'
import playList from '@/views/news/playList.vue'
import { getNewSong } from '@/api/news.js'
export default {
  name: 'news',
  data () {
    return {
      tags: [
        '全部',
        '华语',
        '欧美',
        '日本',
        '韩国'
      ],
      cat: '全部',
      newSongList: []
    }
  },
  created () {
    this.getNewSongList()
  },
  methods: {
    updateCat (_item) {
      this.cat = _item
      this.getNewSongList()
    },
    async getNewSongList () {
      const cat = this.cat
      const type = this.TOP_SONG_TYPE[cat]
      let params = {
        type
      }
      const { code, data } = await getNewSong(params)
      if (code === this.CONFIG.CODE_SUCCESS) {
        this.newSongList = [...data]
      }
    }
  },
  components: {
    tagList,
    playList
  }
}
</script>

<style lang="scss" scoped>
#news {
  height: 100%;
  .tags {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
