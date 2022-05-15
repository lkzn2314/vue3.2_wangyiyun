<template>
  <div class="disc-wrapper">
    <HeaderLine title="新碟上架" toPath="album" />
    <div class="centent">
      <i class="left arrow sprite_02" @click="() => carouselRef.prev()" />
      <i class="right arrow sprite_02" @click="() => carouselRef.next()" />
      <div class="disc">
        <el-carousel
          ref="carouselRef"
          arrow="never"
          :autoplay="false"
          :loop="false"
        >
          <el-carousel-item
            class="disc-list"
            v-for="index in [0, 1]"
            :key="index"
          >
            <DiscCover
              v-for="item in newDiscs?.slice(index * 5, (index + 1) * 5)"
              :key="item.id"
              :info="item"
              width="118px"
              height="150px"
            />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderLine from '@/components/HeaderLine.vue'
import DiscCover from '@/components/DiscCover.vue'
import { useRecommendStore } from '@/store'
import { storeToRefs } from 'pinia'

const carouselRef = ref<any>(null)
const recommendStore = useRecommendStore()
const { newDiscs } = storeToRefs(recommendStore)

onMounted(() => recommendStore.getHomepageNewDiscsAction())
</script>

<style lang="less" scoped>
.disc-wrapper {
  margin-bottom: 30px;

  .centent {
    position: relative;
    height: 186px;
    width: 687px;
    margin-top: 25px;
    background-color: #f5f5f5;

    .disc {
      width: 645px;
      height: 100%;
      margin: 20px auto;
      overflow: hidden;

      .disc-list {
        height: 150px;
        display: flex !important;
        justify-content: space-between;
        margin: 20px auto;
      }
    }

    .arrow {
      position: absolute;
      top: 38%;
      width: 17px;
      height: 17px;
      z-index: 1;

      &:hover {
        cursor: pointer;
      }
    }

    .left {
      left: 5px;
      background-position: -260px -75px;

      &:hover {
        background-position: -280px -75px;
      }
    }
    .right {
      right: 8px;
      background-position: -300px -75px;

      &:hover {
        background-position: -320px -75px;
      }
    }
  }
}
</style>
