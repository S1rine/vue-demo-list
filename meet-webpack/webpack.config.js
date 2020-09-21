const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader 负责将 css 文件加载
        // style-loader 负责将样式添加到 dom 中
        // 使用多个 loader 时, webpack 从右向左加载
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 图片大小超限时,需要 file-loader
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      // 安装 url-loader 后再安装 file-loader 不需要配置 file-loader
      // 否则会不起作用
      // {
      //   test: /\.(png|jpg|gif|jpeg)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {}
      //     }
      //   ]
      // }
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    // alias 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js','.css','.vue']
  },
  plugins: [
    new webpack.BannerPlugin('aaa'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // new UglifyjsWebpackPlugin()
  ],
  devServer: {
    contentBase: './dist',
    inline: true
  }
}