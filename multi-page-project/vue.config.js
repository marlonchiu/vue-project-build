// console.log(process.env.NODE_ENV)

const path = require('path')
const configs = require('./config')
const utils = require('./build/utils')

// 用于做相应的合并处理
const merge = require('webpack-merge')
const {
  DefinePlugin
} = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// 根据环境判断使用哪份配置
const isPro = process.env.NODE_ENV === 'production'
const cfg = isPro ? configs.build.env : configs.dev.env

// 项目的部署路径  前边表示项目启动时候的根路径地址
const BASE_URL = isPro ? '/vue/' : '/'

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: BASE_URL,
  // 修改打包文件输出文件夹 默认为 dist
  outputDir: 'dist',
  // 是否为生产环境构建生成 source map
  productionSourceMap: true,
  // pages: utils.setPages(),
  pages: utils.setPages({
    addScript () {
      if (!isPro) {
        return `
        <script src="https://s95.cnzz.com/z_stat.php?id=xxx&web_id=xxx" language="JavaScript"></script>`
      }
      return ''
    }
  }),
  // css: {
  //   modules: true
  // },
  // chainWebpack 配置项允许我们更细粒度的控制 webpack 的内部配置
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options =>
        merge(options, {
          limit: 5120
        })
      )

    config.resolve.alias
      .set('@', resolve('src'))
      .set('_lib', resolve('src/common'))
      .set('_com', resolve('src/components'))
      .set('_img', resolve('src/images'))
      .set('_ser', resolve('src/services'))

    // 使用 chainWebpack 修改 DefinePlugin 中的值
    config.plugin('define')
      .tap(args => {
        let name = 'process.env'

        // 使用 merge 保证原始值不变
        args[0][name] = merge(args[0][name], cfg)

        return args
      })
  },
  // configureWebpack 来进行修改，
  // 两者的不同点在于 chainWebpack 是链式修改，
  // 而 configureWebpack 更倾向于整体替换和修改
  // config 参数为已经解析好的 webpack 配置
  // 查看 plugins 的内容 ------ vue inspect plugins
  configureWebpack: config => {
    // config.plugins = [] // 这样会直接将 plugins 置空
    config.entry = utils.getEntries() // 直接覆盖 entry 配置
    // 使用 return 一个对象会通过 webpack-merge 进行合并，plugins 不会置空
    // return {
    //   plugins: [...utils.htmlPlugin()]
    // }
    if (isPro) {
      return {
        plugins: [
          // 开启 Gzip 压缩
          new CompressionWebpackPlugin({
            // asset: '[path].gz[query]',(废弃了)
            filename (info) {
              return `${info.path}.gz${info.query}`
            },
            // 使用 gzip 压缩
            algorithm: 'gzip',
            // 处理与此正则相匹配的所有文件
            test: new RegExp(
              '\\.(js|css)$'
            ),
            // 只处理大于此大小的文件
            threshold: 10240,
            // 最小压缩比达到 0.8 时才会被压缩
            minRatio: 0.8
          }),
          // 使用包分析工具
          new BundleAnalyzerPlugin()
        ]
      }
    }
  },
  // 用于配置 webpack-dev-server 的行为，对本地服务器进行相应配置
  devServer: {
    historyApiFallback: {
      rewrites: [
        {
          from: new RegExp(BASE_URL + 'page1'),
          to: BASE_URL + 'page1.html'
        },
        {
          from: new RegExp(BASE_URL + 'page2'),
          to: BASE_URL + 'page2.html'
        }
      ]
    },
    open: true, // 是否自动打开浏览器页面 默认值false
    host: '0.0.0.0', // 指定使用一个 host。默认是 localhost
    port: 8080, // 端口地址 默认8080
    https: false, // 使用https提供服务
    // string | Object 代理设置
    proxy: {
      // 接口是 '/repos' 开头的才用代理
      '/repos': {
        target: 'https://api.github.com', // 目标地址
        changeOrigin: true // 是否改变源地址
        // pathRewrite: {'^/api': ''}
      }
    },
    // progress: true,
    // 提供在服务器内部的其他中间件之前执行自定义中间件的能力
    before: app => {
      // `app` 是一个 express 实例
    }
  }
}
