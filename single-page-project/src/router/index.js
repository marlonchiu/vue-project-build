import Vue from 'vue'
import VueRouter from 'vue-router'

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

// import Home from '../views/Home.vue'
// 异步引入 Home 组件
// const Home = resolve => {
//   require.ensure(['../views/Home.vue'], () => {
//     resolve(require('../views/Home.vue'))
//   })
// }
// const About = resolve => {
//   require.ensure(['../views/About.vue'], () => {
//     resolve(require('../views/About.vue'))
//   })
// }
// 给文件命名 /* webpackChunkName: "about" */
const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue')

Vue.use(VueRouter)
const base = `${process.env.BASE_URL}` // 获取二级目录
console.log(base)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: base, // 设置 base 值
  // base: process.env.BASE_URL,
  routes
})

export default router
