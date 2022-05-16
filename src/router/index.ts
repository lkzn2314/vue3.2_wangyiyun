import { createRouter, createWebHashHistory } from 'vue-router'

const Discover = () => import('@/views/discover/Discover.vue')
const DiscoverRecommend = () =>
  import('@/views/discover/cViews/recommend/Recommend.vue')
const DiscoverMusiclist = () =>
  import('@/views/discover/cViews/musiclist/Musiclist.vue')

const routes = [
  {
    path: '',
    redirect: '/discover',
  },
  {
    path: '/discover',
    component: Discover,
    children: [
      {
        path: '',
        redirect: '/discover/recommend',
      },
      {
        path: 'recommend',
        component: DiscoverRecommend,
      },
      {
        path: 'musiclist',
        component: DiscoverMusiclist,
      },
    ],
  },
]

const router = createRouter({
  // createWebHashHistory hash路由
  //createWebHistory history路由
  history: createWebHashHistory(),
  routes,
})

export default router
