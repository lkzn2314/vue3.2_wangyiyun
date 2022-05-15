<template>
  <div class="recommend-wrapper">
    <TopBanners />

    <div class="content wrap-v2">
      <div class="recommend-left">
        <HotRecommend />
        <NewDisc />
        <Ranking />
      </div>

      <div class="recommend-right">
        <Login />
        <ArtistAnchor />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopBanners from './children/Banners.vue'
import HotRecommend from './children/HotRecommend.vue'
import NewDisc from './children/NewDisc.vue'
import Ranking from './children/Ranking.vue'
import Login from './children/Login.vue'
import ArtistAnchor from './children/ArtistAnchor.vue'
</script>

<style lang="less" scoped>
.recommend-wrapper {
  background-color: #f5f5f5;

  .content {
    display: flex;
    background-color: #fff;

    .recommend-left {
      padding: 20px;
      width: 689px;
    }

    .recommend-right {
      width: 250px;
      border: 1px solid #d3d3d3;
      border-width: 0 1px;
    }
  }
}
</style>
