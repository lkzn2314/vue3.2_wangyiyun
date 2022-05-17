<template>
  <div class="musicRankingWrapper" v-if="toplist.length">
    <h2 class="special title">云音乐特色榜</h2>
    <MusiclistRankingCover
      v-for="(item, index) in toplist?.slice(0, 4)"
      :key="item.id"
      :info="item"
      :index="index"
    />
    <h2 className="media title">全球媒体榜</h2>
    <MusiclistRankingCover
      v-for="(item, index) in toplist?.slice(4)"
      :key="item.id"
      :info="item"
      :index="index + 4"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMusiclistStore } from '@/store'
import MusiclistRankingCover from '@/components/MusiclistRankingCover.vue'
const musiclistStore = useMusiclistStore()
const { toplist } = storeToRefs(musiclistStore)
</script>

<style lang="less" scoped>
.musicRankingWrapper {
  .title {
    font-size: 14px;
    font-weight: 600;
    color: #000;
  }

  .special {
    margin: 35px 0 10px 18px;
  }
  .media {
    margin: 15px 0 10px 18px;
  }
}
</style>
