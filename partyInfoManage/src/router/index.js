import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/index/info',
    name: 'Info',
    component: () => import('../views/Info.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: '/dist', // 单页应用的基路径，开发模式没体现出来，打包时才体现出来
  routes
})

export default router
