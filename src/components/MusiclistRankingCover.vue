<template>
  <div
    :class="['wrapper', currentIndex === index ? 'active' : '']"
    @click="changeRankingClick(index, info?.id)"
  >
    <img :src="formatImgSize(info?.coverImgUrl, 40)" alt="" />
    <div>
      <div class="name">{{ info?.name }}</div>
      <div class="text">{{ info?.updateFrequency }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Toplist } from '@/store/types'
import { formatImgSize } from '@/utils/format'
import { useMusiclistStore } from '@/store'
import { storeToRefs } from 'pinia'
type Props = {
  info: Toplist
  index: number
}
defineProps<Props>()
const musiclistStore = useMusiclistStore()
const { currentIndex } = storeToRefs(musiclistStore)

const changeRankingClick = (idx: number, playlistId: number) => {
  musiclistStore.changeCurrentIndexAction(idx)
  musiclistStore.getRankingDetailAction(playlistId)
}
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  width: 240px;
  height: 62px;
  padding: 10px 0 10px 20px;
  box-sizing: border-box;

  &.active {
    background-color: #e6e6e6;
  }

  &:hover {
    cursor: pointer;
    background-color: #e6e6e6;
  }

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .name {
    color: #000;
    margin: 1px 0 4px 0;
  }
  .text {
    color: #b299b2;
  }
}
</style>
