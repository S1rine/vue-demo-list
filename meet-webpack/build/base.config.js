const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    // 所有涉及到 url 的值都会自动拼接上 publicPath
    // publicPath: 'dist/'
  },
  module: {
    rules: [{
        test: /\.css$/,
        // css-loader 只负责将 css 文件进行加载
        // style-loader 负责将样式添加到 dom 中
        // 使用多个 loader 时， 从右向左读取
        use: ['style-loader', 'css-loader']
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
        use: [{
          loader: 'url-loader',
          options: {
            // 加载的图片小于 limit 时 会将图片转为 base64 编码
            // 加载的图片大于 limit 时 需要使用 file-loader 进行加载
            limit: 8192,
            name: 'img/[name].[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    // 在 import 引入时省略后缀名
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('aaa'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // new UglifyjsWebpackPlugin()
  ],
  // devServer: {
  //   contentBase: './dist',
  //   inline: true
  // }
}