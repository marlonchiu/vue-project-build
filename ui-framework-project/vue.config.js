const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_lib', resolve('src/common'))
      .set('_com', resolve('src/components'))
      .set('_img', resolve('src/assets/images'))
      .set('_ser', resolve('src/services'))
  },
  configureWebpack: config => {
    require('@vux/loader').merge(config, {
      options: {},
      plugins: [{
        name: 'vux-ui'
      }]
    })
  },
  devServer: {
    open: true, // 是否自动打开浏览器页面
    host: '0.0.0.0', // 指定使用一个 host。默认是 localhost
    port: 8080, // 端口地址
    https: false, // 使用https提供服务
    // string | Object 代理设置
    proxy: {
      '/repos': {
        target: 'https://api.github.com',
        changeOrigin: true
        // pathRewrite: {'^/api': ''}
      },
      '/apis': {
        target: 'http://apis.juhe.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/apis': ''
        }
      },
      '/japis': {
        target: 'http://japi.juhe.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/japis': ''
        }
      },
      '/juheapi': {
        target: 'http://api.juheapi.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/juheapi': ''
        }
      }
    },
    progress: false,

    // 提供在服务器内部的其他中间件之前执行自定义中间件的能力
    before: app => {
      // `app` 是一个 express 实例
    }
  }
}
