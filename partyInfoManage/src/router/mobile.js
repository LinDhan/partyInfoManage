import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/mobile/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/mobile',
    name: 'Login',
    component: login
  },
  {
    path: '/mobile/fillInfo',
    name: 'FillInfo',
    component: () => import('../views/mobile/FillInfo.vue')
  },
  {
    path: '/mobile/signature',
    name: 'Signature',
    component: () => import('../views/mobile/Signature.vue')
  },
  {
    path: '/mobile/review',
    name: 'Review',
    component: () => import('../views/mobile/Review.vue')
  },
  {
    path: '/mobile/result',
    name: 'Result',
    component: () => import('../views/mobile/Result.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: '/dist', // 单页应用的基路径，开发模式没体现出来，打包时才体现出来
  routes
})

export default router
