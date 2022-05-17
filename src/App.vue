<template>
  <Suspense>
    <template #default>
      <MainAsync />
    </template>
    <template #fallback>
      <h3>加载中...</h3>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
const MainAsync = defineAsyncComponent(() => import('./views/Main.vue'))
</script>

<style lang="less">
@import './assets/css/base.css';
</style>
