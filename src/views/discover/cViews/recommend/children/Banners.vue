<template>
  <div
    class="banner-wrapper"
    ref="wrapRef"
    :style="{ backgroundImage: `url(${bigImage})` }"
  >
    <div class="banners wrap-v2">
      <div class="banner-left">
        <el-carousel
          trigger="click"
          arrow="always"
          indicator-position="outside"
          @change="carouselChange"
        >
          <el-carousel-item
            class="banner-item"
            v-for="item in banners"
            :key="item.imageUrl"
          >
            <img class="image" :src="item.imageUrl" :alt="item.typeTitle" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="banner-right">
        <a href="https://music.163.com/#/download" target="_blank" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getBanners } from '@/network/discover'

interface Banners {
  imageUrl: string
  typeTitle: string
}

const banners = reactive<Banners[]>([])
const bigImage = ref<string>('')

onMounted(() => {
  getBanners().then((res: any) => {
    if (res.code === 200) {
      banners.push(...res.banners)
      bigImage.value = `${res.banners[0].imageUrl}?imageView&blur=40x20`
    }
  })
})

const carouselChange = (idx: number) => {
  bigImage.value = `${banners[idx].imageUrl}?imageView&blur=40x20`
}
</script>

<style lang="less" scoped>
.banner-wrapper {
  background: center center/6000px;
}
.banners {
  display: flex;
  position: relative;
  height: 285px;

  .banner-left {
    width: 730px;

    .banner-item {
      overflow: hidden;
      height: 285px;

      .image {
        width: 100%;
        height: 285px;
      }
    }

    :deep(.el-carousel) {
      height: 100%;
      overflow: hidden;

      .el-carousel__indicators {
        position: relative;
        top: -45px;
        left: 0;
        z-index: 99;

        .el-carousel__indicator {
          &.is-active {
            .el-carousel__button {
              background-color: red;
            }
          }
        }
      }
    }
  }

  .banner-right {
    width: 254px;
    height: 285px;
    background: url('../../../../../assets/img/download.png');
  }
}
</style>
