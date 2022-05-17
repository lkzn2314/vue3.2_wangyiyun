<template>
  <div class="rankingDetailWrapper">
    <div class="head">
      <div class="title">
        歌曲列表
        <span>{{ toplistDetail?.trackCount }}首歌</span>
      </div>
      <div>
        播放：<i class="playcount">{{ toplistDetail?.playCount }} </i>次
      </div>
    </div>

    <div class="body">
      <table>
        <thead>
          <tr class="thead-tr">
            <th class="index" />
            <th class="table-title">标题</th>
            <th class="duration">时长</th>
            <th class="songer">歌手</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(item, index) in playlist"
            :class="['playlist-item', index < 3 ? 'playlist-item-prev' : '']"
            :key="item.id"
          >
            <td>{{ index + 1 }}</td>
            <td class="text-nowrap">
              <img
                v-if="index < 3"
                :src="formatImgSize(item.al.picUrl, 50)"
                alt=""
              />
              <i class="play sprite_table" />
              {{ item.name }}
            </td>
            <td>{{ dayjs(item.dt).format('mm:ss') }}</td>
            <td class="text-nowrap">{{ item.ar[0].name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import dayjs from 'dayjs'
import { formatImgSize } from '@/utils/format'
import { useMusiclistStore } from '@/store'
const musiclistStore = useMusiclistStore()
const { toplist, playlist } = storeToRefs(musiclistStore)
const toplistDetail = computed(() => musiclistStore.getToplistDetail)

watch(toplist, (newValue) => {
  musiclistStore.getRankingDetailAction(newValue[0].id)
})
</script>

<style lang="less" scoped>
.rankingDetailWrapper {
  padding: 0 30px 40px 40px;
  .head {
    display: flex;
    justify-content: space-between;
    height: 35px;
    line-height: 35px;
    border-bottom: 2px solid #c20c0c;

    .title {
      font-size: 20px;

      span {
        margin-left: 20px;
        font-size: 12px;
      }
    }

    .playcount {
      color: #c20c0c;
    }
  }

  .body {
    table {
      width: 670px;
      table-layout: fixed;

      .thead-tr {
        height: 39px;
        color: #666;
        text-align: left;
        background-color: #fcfcfc;

        th {
          padding-left: 8px;
          border-right: 1px solid #e8e8e8;
        }

        .index {
          width: 78px;
        }

        .table-title {
          width: 327px;
        }

        .duration {
          width: 90.5px;
        }

        .songer {
          width: 173.5px;
        }
      }
    }

    tbody {
      .playlist-item:nth-child(odd) {
        background-color: #f7f7f7;
      }

      .playlist-item {
        height: 30px;
        line-height: 30px;

        td {
          padding-left: 8px;
        }

        .play {
          position: relative;
          top: 5px;
          display: inline-block;
          width: 17px;
          height: 17px;
          margin-right: 8px;
          background-position: 0 -103px;

          &:hover {
            cursor: pointer;
            background-position-y: -128.5px;
          }
        }
      }

      .playlist-item-prev {
        height: 69px;
        line-height: 69px;

        img {
          width: 50px;
          height: 50px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
