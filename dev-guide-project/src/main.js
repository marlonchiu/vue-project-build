import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入过滤器
import './filter/'
// 注册插件
import './widgets/'

Vue.config.productionTip = false

// 使用 performance 开启性能追踪
if (process.env.NODE_ENV !== 'production') {
  Vue.config.performance = true
}

// 使用 errorHandler 来捕获异常
Vue.config.errorHandler = function (err, vm, info) {
  let {
    message, // 异常信息
    name, // 异常名称
    stack // 异常堆栈信息
  } = err;

  // vm 为抛出异常的 Vue 实例
  // info 为 Vue 特定的错误信息，比如错误所在的生命周期钩子
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
