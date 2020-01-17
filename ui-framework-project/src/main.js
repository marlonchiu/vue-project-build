import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 vux UI
import './vux-ui/'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false
// 添加 Fastclick 移除移动端点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
