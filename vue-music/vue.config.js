const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    port: 3000,
    hotOnly: true,
    proxy: {
      '/api': {
        target: 'https://autumnfish.cn',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        assets: resolve('src/assets'),
      },
    },
  },

  chainWebpack: (config) => {
    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development', (config) =>
        config.devtool('cheap-source-map')
      )
    config.when(process.env.NODE_ENV !== 'development', (config) => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin') // 让js加载方式支持async或defer
        .after('html')
        .use('script-ext-html-webpack-plugin', [{
          // `runtime` must same as runtimeChunk name. default is `runtime`
          inline: /runtime\..*\.js$/,
        }, ])
        .end()
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial', // only package third parties that are initially dependent
          },
          elementUI: {
            // 更高优先级的缓存组可以优先打包所选择的模块
            name: 'chunk-elementUI', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      })
      config.optimization.runtimeChunk('single')
    })
  },
}
