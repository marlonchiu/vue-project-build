import Vue from 'vue'
import Router from 'vue-router'

// 首页
// const Home = () => import(/* webpackChunkName:'home'*/ '../views/home.vue')
const Home = resolve => {
  require.ensure(['../views/home.vue'], () => {
    resolve(require('../views/home.vue'))
  })
}

Vue.use(Router)

const base = `${process.env.BASE_URL}` + 'page1'

export default new Router({
  mode: 'history',
  base: base,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }]
})
