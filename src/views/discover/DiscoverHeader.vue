<template>
  <div class="wrapper">
    <div class="header wrap-v1">
      <div class="item" v-for="item in dicoverMenu" :key="item.title">
        <router-link :to="item.link" active-class="active">
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dicoverMenu } from '@/network/localData'
</script>

<style lang="less" scoped>
.wrapper {
  height: 30px;
  background-color: #c20c0c;

  .header {
    display: flex;
    position: relative;
    top: -4px;
    padding-left: 180px;

    .item {
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        color: #fff;

        &:hover,
        &.active {
          text-decoration: none;
          background-color: #9b0909;
          border-radius: 20px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
