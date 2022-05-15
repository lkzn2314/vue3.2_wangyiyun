<template>
  <div class="login-wrapper">
    <div class="text">
      登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
    </div>
    <div class="btn sprite_02">用户登录</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.login-wrapper {
  width: 206px;
  height: 126px;
  padding: 16px 22.5px 0;
  background-color: #e6e6e6;

  .text {
    height: 43px;
    line-height: 20px;
  }

  .btn {
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    margin: 15px auto;
    background-position: 0 -195px;

    &:hover {
      cursor: pointer;
      background-position-x: -110px;
    }
  }
}
</style>
