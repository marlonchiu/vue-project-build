import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
/**
 *  require.ensure() 是一种使用 CommonJS 的形式来异步加载模块的策略
 *  require.ensure(dependencies: String[], callback: function(require), chunkName: String)
 *  第一个参数指定依赖的模块，
 *  第二个参数是一个函数，在这个函数里面你可以使用 require 来加载其他的模块，
 *    webpack 会收集 ensure 中的依赖，将其打包在一个单独的文件中，
 *    在后续用到的时候使用 jsonp 异步地加载进去
 *  第三个参数，这个参数用来指定打包的包名，
 *
 * webpack 代码拆分  https://segmentfault.com/a/1190000007649417/
 */
const Home = () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
// const Puzzle = () => import(/* webpackChunkName: "puzzle" */ '../views/home/puzzle.vue')
const Puzzle = (resolve => {
  require.ensure(['../views/home/puzzle.vue'], () => {
    resolve(require('../views/home/puzzle.vue'))
  }, 'puzzle')
})

const Count = () => import(/* webpackChunkName: "count" */ '../views/home/count.vue')

const Laboratory = () => import(/* webpackChunkName: "laboratory" */ '../views/laboratory/index.vue')
const History = () => import(/* webpackChunkName: "history" */ '../views/laboratory/history.vue')
const QQTest = () => import(/* webpackChunkName: "qq" */ '../views/laboratory/qq.vue')
const QRCode = () => import(/* webpackChunkName: "qrcode" */ '../views/laboratory/qrcode.vue')

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
    path: '/puzzle',
    name: 'puzzle',
    component: Puzzle
  },
  {
    path: '/count',
    name: 'count',
    component: Count
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
    path: '/qrcode',
    name: 'qrcode',
    component: QRCode
  },
  {
    path: '/qqTest',
    name: 'qqTest',
    component: QQTest
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
