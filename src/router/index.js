import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/installation',
    name: 'Installation',
    component: () => import('@/views/Installation.vue')
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import('@/views/Support.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
