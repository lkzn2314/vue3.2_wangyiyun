<template>
  <div class="musiclistWrapper wrap-v2">
    <div class="left">
      <MusicRanking />
    </div>
    <div class="right">
      <RankingHeader />
      <RankingDetail />
    </div>
  </div>
</template>

<script setup lang="ts">
import MusicRanking from './children/MusicRanking.vue'
import RankingHeader from './children/RankingHeader.vue'
import RankingDetail from './children/RankingDetail.vue'
import { useMusiclistStore } from '@/store'

const musiclistStore = useMusiclistStore()
onMounted(() => musiclistStore.getToplistAction())
</script>

<style lang="less" scoped>
.musiclistWrapper {
  display: flex;

  .left {
    width: 240px;
    background-color: #f9f9f9;
  }

  .right {
    width: 740px;
    background-color: #fff;
  }
}
</style>
