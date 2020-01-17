import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
const Laboratory = () => import(/* webpackChunkName: "laboratory" */ '../views/laboratory/index.vue')
const History = () => import(/* webpackChunkName: "history" */ '../views/laboratory/history.vue')
const About = () => import(/* webpackChunkName: "about" */ '../views/about/index.vue')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/laboratory',
    name: 'laboratory',
    component: Laboratory
  },
  {
    path: '/history',
    name: 'history',
    component: History
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const base = `${process.env.BASE_URL}`
const router = new VueRouter({
  mode: 'history',
  base: base,
  routes
})

export default router
