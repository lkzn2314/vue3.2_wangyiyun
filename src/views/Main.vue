<template>
  <WebHeader />
  <router-view />
  <WebFooter />
</template>

<script setup lang="ts">
import WebHeader from '@/components/WebHeader.vue'
import WebFooter from '@/components/WebFooter.vue'
</script>

<style lang="less" scoped></style>
