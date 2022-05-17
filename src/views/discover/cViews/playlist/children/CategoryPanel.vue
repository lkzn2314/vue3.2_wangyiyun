<template>
  <div class="panelWrapper">
    <div class="head">
      <div class="sprite_button2" @click="changeCatClick('全部')">全部风格</div>
    </div>

    <div class="body">
      <div class="left">
        <div
          class="category"
          v-for="item in allPlaylistCategory"
          :key="item.name"
        >
          <i
            class="sprite_icon2 img"
            :style="getBackgroundPosition(item.name)"
          />
          <span>
            {{ item.name }}
          </span>
        </div>
      </div>

      <div class="right">
        <ul class="row" v-for="item in allPlaylistCategory" :key="item.name">
          <li class="subItem" v-for="subItem in item.subs" :key="subItem.name">
            <span
              class="category-subItem"
              @click="changeCatClick(subItem.name)"
            >
              {{ subItem.name }}
            </span>
            <span>|</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePlaylistStore } from '@/store'

const emits = defineEmits(['selectCategoryClick'])

const playlistStore = usePlaylistStore()
const { allPlaylistCategory } = storeToRefs(playlistStore)

const changeCatClick = (catName: string) => {
  playlistStore.changeCurrentCatAction(catName)
  playlistStore.getAllPlaylistAction({ offset: 1, limit: 50, cat: catName })
  emits('selectCategoryClick')
}

const getBackgroundPosition = (tag: string) => {
  const obj = {
    语种: '-20px -735px',
    风格: '0 -60px',
    场景: '0 -88px',
    情感: '0 -117px',
    主题: '0 -141px',
  }
  return {
    backgroundPosition: obj[tag],
  }
}
</script>

<style lang="less" scoped>
.panelWrapper {
  position: absolute;
  left: 10px;
  top: 90px;
  width: 700px;
  height: 400px;
  background-color: #fff;
  box-shadow: -2px 3px 3px 3px rgba(188, 188, 188, 0.5);

  .head {
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #e6e6e6;

    div {
      width: 75px;
      height: 26px;
      line-height: 26px;
      margin: 20px 0 0 26px;
      text-align: center;
      background-position: 0 -64px;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  .body {
    display: flex;
    padding-left: 26px;

    .left {
      width: 71px;
      height: 340px;
      padding-top: 10px;
      border-right: 1px solid #e6e6e6;

      .category {
        height: 65px;

        &:nth-child(1) {
          height: 40px;
        }

        span {
          font-weight: 600;
        }
      }

      .img {
        position: relative;
        top: 5px;
        display: inline-block;
        width: 23px;
        height: 23px;
        margin-right: 5px;
      }
    }

    .right {
      flex: 1;

      .row {
        position: relative;
        top: -5px;
        display: flex;
        flex-wrap: wrap;
        height: 65px;
        line-height: 65px;

        &:nth-child(1) {
          height: 40px;
          line-height: 40px;
          top: 10px;
        }

        .subItem {
          height: 16px;

          .category-subItem {
            margin: 0 12px;

            &:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }

          span:nth-child(2) {
            color: #dad8df;
          }
        }
      }
    }
  }
}
</style>
