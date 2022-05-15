<template>
  <div class="topRanking-wrapper">
    <div class="header">
      <div class="image">
        <img :src="formatImgSize(info?.coverImgUrl)" alt="" />
        <a href="/todo" class="image_cover"> </a>
      </div>
      <div class="info">
        <a href="/todo">{{ info?.name }}</a>
        <div>
          <button class="btn play sprite_02"></button>
          <button class="btn favor sprite_02"></button>
        </div>
      </div>
    </div>

    <div class="list">
      <div
        v-for="(item, index) in info?.tracks?.slice(0, 10)"
        :key="item"
        class="list-item"
      >
        <div class="rank">{{ index + 1 }}</div>
        <div class="info">
          <span class="name text-nowrap">{{ item.name }}</span>
          <div class="operate">
            <button class="btn sprite_02 play" />
            <button class="btn sprite_icon2 addto" />
            <button class="btn sprite_02 favor" />
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="more">查看全部 &gt;</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Rankings } from '@/store/types'
import { formatImgSize } from '@/utils/format'
type Props = {
  info: Rankings
}
defineProps<Props>()
</script>

<style lang="less" scoped>
.topRanking-wrapper {
  flex: 1;

  .header {
    display: flex;
    height: 100px;
    margin: 20px 0 0 20px;

    .image {
      position: relative;
      width: 80px;
      height: 80px;

      img {
        width: 80px;
        height: 80px;
      }
    }

    .info {
      margin: 5px 0 0 10px;

      a {
        font-size: 14px;
        color: #333;
        font-weight: 700;
      }

      .btn {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
        text-indent: -9999px;

        &:hover {
          background-position-y: -235px;
        }
      }

      .play {
        background-position: -267px -205px;
      }

      .favor {
        background-position: -300px -205px;
      }
    }
  }

  .list {
    .list-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 32px;

      :nth-child(-n + 3) .rank {
        color: #c10d0c;
      }

      .rank {
        width: 35px;
        margin-left: 10px;
        text-align: center;
        font-size: 16px;
      }

      .info {
        display: flex;
        justify-content: space-between;
        width: 170px;
        height: 17px;
        line-height: 17px;
        color: #000;

        .name {
          flex: 1;

          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }

        .operate {
          display: flex;
          align-items: center;
          display: none;
          width: 82px;

          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;

            &:hover {
              background-position-y: -288px;
            }
          }

          .play {
            background-position: -267px -268px;
          }

          .addto {
            position: relative;
            top: 2px;
            background-position: 0 -700px;

            &:hover {
              background-position: -22px -700px;
            }
          }

          .favor {
            background-position: -297px -268px;
          }
        }
      }

      &:hover {
        .operate {
          display: block;
        }
      }
    }
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 32px;
    margin-right: 32px;

    .more {
      color: #000;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
}
</style>
