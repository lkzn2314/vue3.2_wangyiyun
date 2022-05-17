<template>
  <div class="headerWrapper">
    <img :src="formatImgSize(toplistDetail?.coverImgUrl, 150)" alt="" />
    <div class="info">
      <h2 class="name">{{ toplistDetail?.name }}</h2>

      <div class="update-time">
        <i class="clock sprite_icon2" />
        <span>
          最近更新：{{ dayjs(toplistDetail?.updateTime).format('MM月DD日') }}
          <span class="updateFrequency">
            ({{ toplistDetail?.updateFrequency }})
          </span>
        </span>
      </div>

      <div class="operation">
        <div class="first">
          <div class="play sprite_button">播放</div>
          <div class="addtoPlaylist sprite_button" />
        </div>
        <div class="collect btn sprite_button">
          ({{ toplistDetail?.subscribedCount }})
        </div>
        <div class="share btn sprite_button">无数据</div>
        <div class="download btn sprite_button">下载</div>
        <div class="comment btn sprite_button">无数据</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { formatImgSize } from '@/utils/format'
import { useMusiclistStore } from '@/store'
const musiclistStore = useMusiclistStore()
const toplistDetail = computed(() => musiclistStore.getToplistDetail)
</script>

<style lang="less" scoped>
.headerWrapper {
  display: flex;
  width: 740px;
  height: 238px;
  padding: 40px;
  box-sizing: border-box;

  img {
    width: 158px;
    height: 158px;
    padding: 3px;
    margin-right: 30px;
    border: 1px solid #ccc;
  }

  .info {
    width: 444px;
    padding: 15px 0;

    .name {
      margin-bottom: 8px;
      font-size: 20px;
    }

    .update-time {
      color: #666;

      .clock {
        display: inline-block;
        width: 13px;
        height: 13px;
        margin-right: 5px;
        background-position: -18px -682px;
      }

      .updateFrequency {
        color: #999;
      }
    }

    .operation {
      display: flex;
      margin-top: 25px;

      .btn {
        height: 31px;
        line-height: 31px;
        margin-right: 5px;
        padding-left: 20px;
        font-size: 12px;
        text-align: center;
        border: 1px solid #c4c4c4;
      }

      .first {
        display: flex;
        margin-right: 5px;

        .play {
          width: 66px;
          padding-right: 8px;
          line-height: 31px;
          background-position: 0 -633px;
          color: #fff;
          text-align: right;

          &:hover {
            cursor: pointer;
            background-position-y: -719px;
          }
        }

        .addtoPlaylist {
          width: 31px;
          height: 31px;
          background-position: 0 -1588px;
        }
      }

      .collect {
        width: 92px;
        background-position: 0 -977px;
      }

      .share {
        width: 80px;
        background-position: 0 -1225px;
      }

      .download {
        width: 54px;
        background-position: 0 -2761px;
      }

      .comment {
        width: 96px;
        background-position: 0 -1465px;
      }
    }
  }
}
</style>
