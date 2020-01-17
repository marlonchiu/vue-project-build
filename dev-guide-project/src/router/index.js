import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const GuideB = () => import(/* webpackChunkName: "guideB" */ '../views/GuideB.vue')
const GuideC = () => import(/* webpackChunkName: "guideC" */ '../views/GuideC.vue')
const GuideD = () => import(/* webpackChunkName: "guideD" */ '../views/GuideD.vue')
const GuideE = () => import(/* webpackChunkName: "guideE" */ '../views/GuideE.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/guide-a',
    name: 'guideA',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "guideA" */ '../views/GuideA.vue')
  },
  {
    path: '/guide-b',
    name: 'guideB',
    component: GuideB
  },
  {
    path: '/guide-c',
    name: 'guideC',
    component: GuideC
  },
  {
    path: '/guide-d',
    name: 'guideD',
    component: GuideD
  },
  {
    path: '/guide-e',
    name: 'guideE',
    component: GuideE
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
