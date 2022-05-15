import { createRouter, createWebHashHistory } from 'vue-router'

const Discover = () => import('@/views/discover/Discover.vue')
const Recommend = () =>
  import('@/views/discover/cViews/recommend/Recommend.vue')

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
        component: Recommend,
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
