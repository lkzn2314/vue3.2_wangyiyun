<template>
  <div class="ranking-wrapper">
    <HeaderLine title="榜单" toPath="musiclist" />
    <div class="ranking-list">
      <TopRanking :info="upRankings" currentIndex="{0}" />
      <TopRanking :info="newRankings" currentIndex="{1}" />
      <TopRanking :info="originRankings" currentIndex="{2}" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import HeaderLine from '@/components/HeaderLine.vue'
import TopRanking from '@/components/TopRanking.vue'
import { useRecommendStore } from '@/store'
const recommendStore = useRecommendStore()

const { upRankings, newRankings, originRankings } = storeToRefs(recommendStore)

onMounted(() =>
  [19723756, 3779629, 2884035].map((index: number) => {
    recommendStore.getRankingAction(index)
  })
)
</script>

<style lang="less" scoped>
.ranking-wrapper {
  .ranking-list {
    display: flex;
    height: 472px;
    margin: 30px 0;
    background: url('../../../../../assets/img/recommend-top-bg.png');
  }
}
</style>
