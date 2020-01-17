import Vue from 'vue'

// 全局注册过滤器
Vue.filter('sliceUpperCase', function (val) {
  return val.slice(1).toUpperCase()
})
