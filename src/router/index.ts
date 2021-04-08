import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quiz/clock',
    name: 'ClockCount',
    component: () => import(/* webpackChunkName: "ClockCount" */ '@/views/Math/ClockCount.vue')
  },
  {
    path: '/quiz/multiply',
    name: 'MultiplyQuiz',
    component: () => import(/* webpackChunkName: "MultiplyQuiz" */ '@/views/Math/MultiplyQuiz.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
