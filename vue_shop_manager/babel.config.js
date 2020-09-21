const plugins = [];
if (process.env.NODE_ENV === 'production') {
  // 生产环境移除 console命令
  plugins.push('transform-remove-console')
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    ...plugins
  ]
}
