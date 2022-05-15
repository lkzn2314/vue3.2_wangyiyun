<template>
  <div class="artist-wrapper">
    <div class="artist-title">
      <span class="title-name">入驻歌手</span>
      <span>查看全部 &gt;</span>
    </div>
    <div v-for="item in artists" :key="item.id" class="artist-item">
      <ArtistAndAnchorCover :info="item" :imgSize="62" nameBold="name" />
    </div>
    <div class="apply">申请成为网易音乐人</div>
  </div>

  <div class="anchor-wrapper">
    <div class="artist-title">
      <span class="title-name">热门主播</span>
    </div>
    <div v-for="item in hotAnchors" :key="item.id" class="anchor-item">
      <ArtistAndAnchorCover :info="item" :imgSize="40" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ArtistAndAnchorCover from '@/components/ArtistAnchorCover.vue'
import { getArtists } from '@/network/discover'
import { hotAnchors } from '@/network/localData'

export interface Artists {
  id: number
  picUrl: string
  name: string
  alias?: string[]
  position?: string
}

const artists = reactive<Artists[]>([])

onMounted(() => {
  getArtists(5).then((res: any) => {
    if (res.code === 200) {
      artists.push(...res.artists)
    }
  })
})
</script>

<style lang="less" scoped>
.artist-wrapper {
  width: 210px;
  margin: 10px 0 0 20px;

  .artist-title {
    display: flex;
    justify-content: space-between;
    width: 210px;
    height: 24px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;

    .title-name {
      font-weight: 700;
      color: #333;
    }
  }

  .artist-item {
    margin-bottom: 15px;
    background-color: #fafafa;
    border: 1px solid #eee;
  }

  .apply {
    width: 100%;
    height: 31px;
    line-height: 31px;
    font-weight: 700;
    text-align: center;
    border: 1px solid #ccc;
    background-color: #fdfdfd;
  }
}

.anchor-wrapper {
  width: 210px;
  margin: 20px 0 0 20px;

  .artist-title {
    width: 210px;
    height: 24px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;

    .title-name {
      font-weight: 700;
      color: #333;
    }
  }

  .anchor-item {
    height: 40px;
    margin-bottom: 15px;
  }
}
</style>
