const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    },
    chainWebpack: config => {
      // 图片加载
      config.module
        .rule('images')
        .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options, { limit: 10000 }))
      // 这个是给webpack-dev-server开启可IP和域名访问权限。
      config.devServer.disableHostCheck(true)
    }
  },
  configureWebpack: {
    externals: {
      qc: 'QC'
    }
  }

})
