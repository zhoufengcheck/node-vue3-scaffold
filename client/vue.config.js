let { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  publicPath:'./',
  outputDir:'dist',
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ]
  },
  pages: {
    //配置展开写法
    // 如果是多页面配置，那么Index需要单独移动到pages字段中进行配置一下
    index: {
      entry: './src/entries/main/main.js',
      template: './public/index.html',
      filename: 'index.html',
      title: 'index',
    },
    login: {
      entry: './src/entries/login/main.js',
      template: './public/login.html',
      filename: 'login.html',
      title: 'login',
    },
  }
})
