<template>
  <div class="header-wrapper">
    <div class="content wrap-v1">
      <div class="header-left">
        <a class="logo sprite_01" href="#/">网易云音乐</a>
        <div class="select-list">
          <div
            class="select-item"
            v-for="(item, index) in headerLinks"
            :class="{ active: currentIndex === index }"
            :key="item.title"
            @click="selectItemClick(item, index)"
          >
            <a>
              {{ item.title }}
              <i class="icon sprite_01" />
            </a>
          </div>
        </div>
      </div>

      <div class="header-right">
        <el-input
          class="search"
          placeholder="音乐/视频/电台/用户"
          :prefix-icon="Search"
        />
        <div class="center">创作者中心</div>
        <div class="login">登录</div>
      </div>
    </div>
    <div class="divider" />
  </div>
</template>

<script setup lang="ts">
import { headerLinks, HeaderLinks } from '@/network/localData'
import { Search } from '@element-plus/icons-vue'
const router = useRouter()
let currentIndex = ref<number>(0)

const selectItemClick = (item: HeaderLinks, idx: number) => {
  currentIndex.value = idx
  router.push(item.link)
}
</script>

<style lang="less" scoped>
.header-wrapper {
  height: 75px;
  background-color: #242424;
  .content {
    display: flex;
    justify-content: space-between;
    height: 70px;
  }
  .header-left {
    display: flex;
    font-size: 14px;

    .logo {
      display: flex;
      width: 176px;
      height: 69px;
      background-position: 0 0;
      text-indent: -999px;
    }
    .select-list {
      display: flex;
      line-height: 70px;

      .select-item {
        position: relative;

        a {
          display: block;
          padding: 0 20px;
          color: #ccc;
        }

        &:hover a {
          background: #000;
          color: #fff;
          text-decoration: none;
          cursor: pointer;
        }
      }

      .active {
        background: #000;
        color: #fff;
        text-decoration: none;
        .icon {
          position: absolute;
          left: 50%;
          bottom: -1px;
          display: inline-block;
          width: 12px;
          height: 7px;
          transform: translateX(-50%);
          background-position: -226px 0;
        }
      }
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    color: #ccc;
    font-size: 12px;

    .search {
      width: 158px;
      height: 32px;
      :deep(.el-input__wrapper) {
        border-radius: 16px;

        .el-input__inner {
          width: 100%;
          height: 100%;

          &::placeholder {
            font-size: 12px;
          }
        }
      }
    }

    .center {
      width: 90px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border: 1px solid #666;
      border-radius: 18px;
      margin: 0 16px;
      cursor: pointer;
    }

    .login {
      width: 45px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      cursor: pointer;
    }
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
}
</style>
