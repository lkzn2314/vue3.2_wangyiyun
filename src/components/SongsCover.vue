<template>
  <div class="songs-wrapper">
    <div class="cover-top">
      <img
        :src="formatImgSize(info.picUrl || info.coverImgUrl, 140)"
        :alt="info.name"
      />
      <div class="cover sprite_cover">
        <div class="info sprite_cover">
          <span>
            <i class="erji sprite_icon" />
            {{ formatCount(info.playCount) }}
          </span>
          <i class="play sprite_icon" />
        </div>
      </div>
    </div>

    <div
      :class="
        infoType === 'playlist' ? 'cover-bottom text-nowrap' : 'cover-bottom'
      "
    >
      {{ info.name }}
    </div>
    <div class="cover-source" v-if="infoType === 'playlist'">
      by {{ info.creator.nickname }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { HotRecommends } from '@/store/types'
import { formatImgSize } from '@/utils/format'

type Props = {
  info: HotRecommends
  infoType?: string
}
defineProps<Props>()

const formatCount = (count: number): string | number => {
  if (count < 100000) return count
  return Math.floor(count / 10000) + '万'
}
</script>

<style lang="less" scoped>
.songs-wrapper {
  width: 140px;
  margin: 20px 10px 10px 0;

  .cover-top {
    position: relative;

    & > img {
      width: 140px;
      height: 140px;
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0 10px;
        background-position: 0 -537px;
        background-color: rgba(0, 0, 0, 0.4);
        color: #ccc;
        height: 27px;

        .erji {
          display: inline-block;
          width: 14px;
          height: 11px;
          margin-right: 5px;
          background-position: 0 -24px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;

          &:hover {
            cursor: pointer;
            background-position: 0 -60px;
          }
        }
      }
    }
  }

  .cover-bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .cover-source {
    color: #666;
  }
}
</style>
