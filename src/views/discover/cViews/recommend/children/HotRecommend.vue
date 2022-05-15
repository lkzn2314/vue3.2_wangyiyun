<template>
  <div class="hot-recommend-wrapper">
    <HeaderLine
      title="热门推荐"
      :tabs="hotPlaylistCategory.slice(0, 5)"
      toPath="playlist"
    />

    <div class="recommend-list">
      <SongsCover v-for="item in hotRecommends" :key="item.id" :info="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRecommendStore, usePlaylistStore } from '@/store'
import { storeToRefs } from 'pinia'
import HeaderLine from '@/components/HeaderLine.vue'
import SongsCover from '@/components/SongsCover.vue'

const recommendStore = useRecommendStore()
const playlistStore = usePlaylistStore()
const { hotRecommends } = storeToRefs(recommendStore)
const { hotPlaylistCategory } = storeToRefs(playlistStore)

onMounted(() => {
  recommendStore.getHotRecommendsAction(8)
  playlistStore.getHotPlaylistAction()
})
</script>

<style lang="less" scoped>
.hot-recommend-wrapper {
  margin-bottom: 30px;

  .recommend-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
