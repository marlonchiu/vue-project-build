module.exports = {
  configureWebpack: config => {
    require('@vux/loader').merge(config, {
      options: {},
      plugins: [{
        name: 'vux-ui'
      }]
    })
  }
}
