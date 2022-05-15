<template>
  <div class="header-wrapper sprite_02">
    <div class="left">
      <div class="title">{{ title }}</div>
      <div class="keyword">
        <router-link
          class="item"
          v-for="item in tabs"
          :key="item.id"
          to="playlist"
        >
          {{ item.name }}
          <span class="divider">|</span>
        </router-link>
      </div>
    </div>

    <router-link class="right" :to="toPath">
      更多
      <i className="icon sprite_02" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { HotPlaylistCategory } from '@/store/types'

type Props = {
  title: string
  tabs?: HotPlaylistCategory[]
  toPath: string
}

defineProps<Props>()
</script>

<style lang="less" scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 33px;
  padding: 0 10px 4px 34px;
  border-bottom: 2px solid #c10d0c;
  background-position: -225px -156px;

  .left {
    display: flex;
    align-items: center;

    .title {
      font-size: 20px;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }

    .keyword {
      display: flex;

      .item {
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }

        .divider {
          margin: 0 15px;
          color: #ccc;
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
}
</style>
