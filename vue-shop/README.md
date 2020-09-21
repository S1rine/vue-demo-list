# Vue-shop 小项目

## [主流开源协议之间有何异同？](https://www.zhihu.com/question/19568896/answer/20907890)

## 上传代码
1. `git add`
2. `git commit -m "提交信息"`
3. `git push `
## `vscode` 内置源代码管理
暂存->提交->推送
## `github` 桌面版本 


## 制作首页 `App` 组件
1. 完成 `Header` 区域， 使用的是 `Mint-ui` 中的 `header` 组件
2. 制作底部的 `Tabbar` 区域， 使用的是 `MUI` 的 Tabbar.html
    + 制作购物车图标时，需要引入对应的图标样式表
    + 拷贝拓展字体库的 `ttf` 文件
    + 添加对应的正确样式
3. 要在中间区域放置一个 `router-view` 来展示路由匹配到的组件

## 改造 `tabbr` 为 `router-link`

## 设置路由高亮

## 点击 `tabbar` 中的路由链接，展示对应的路由组件

## 制作首页轮播图

## 加载首页轮播图数据
1. 获取数据， 使用 `vue-resource` 
2. 使用 `vue-resource` 的 `this.$http.get` 获取数据
3. 获取到的数据，保存到 `data` 上
4. 使用 `v-for` 循环渲染

## 改造九宫格的样式


## 改造新闻资讯路由链接

## 新闻资讯 页面制作
1. 绘制页面 使用 `MUI` 的 `mediaList` 
2. 使用 `vue-resource` 获取数据
3. 渲染真实数据

## 实现新闻资讯列表点击跳转到新闻详情
1. 把列表中的每一项改为 `router-link` ，跳转时提供唯一的 `id`
2. 创建新闻详情的组件页面 `NewsInfo.vue`
3. 在路由模块中，将新闻详情的路由地址和组件页面对应起来

## 实现新闻详情页面布局和数据渲染

## 单独封装一个 `comment.vue` 评论子组件
1. 先创建一个单独的 `comment.vue` 组件模板
2. 在需要使用 `comment` 组件的页面中，先手动导入 `comment` 组件
    + `import comment from './comment.vue'`
3. 在父组件中，使用 `comments` 属性，将刚才导入 `comment` 组件，注册为自己的子组件
4. 为注册的子组件注册名称，以标签形式，在页面中引用。

## 获取所有评论数据渲染到页面中

## 实现点击加载更多
1. 为加载更多按钮，绑定点击事件，请求下一页数据
2. 点击加载更多，让 `pageIndex` 加一， 然后重新调用 `this.getcomments` 获取最新的评论
3. 为了防止 新数据覆盖老数据 ，每次获取新数据应该让老数据拼接上新数据

## 发表评论
1. `textarea`双向数据绑定
2. 为发表按钮绑定一个事件
3. 校验评论内容是否为空，如果为空则发出提示。
4. 通过 `vue-resource` 发送一个请求，把评论内容提交给服务器
5. 刷新数据得到最新评论
    + 如果调用 `getcomments` 方法得到数据的话，只会得到当前页数的数据，可能丢失前几页的数据
    + 当评论成功后，在客户端手动拼接处一个新的评论对象，然后调用数组的 `unshift` 方法追加到 `data` 中

## 改造图片分享

## 绘制图片列表组件页面
1. 顶部滑动条
2. 图片列表

#### 顶部滑动条
1. 借助 `MUI` 中的 `tab-top-webview-main.html`
2. 注意 `slider` 区域中的 `mui-fullscreen` 类
3. 滑动条滑动效果的触发需要初始化实例
    + 导入mui.js
    + 调用相应的方法
    ```javascript
    mui('.mui-scroll-wrapper').scroll({
	    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    ```
4. 初始化滑动条实例时，导入的 `js` 文件导致报错，
    `Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them`
    + `mui.js` 中的调用不符合严格模式的要求，与 `webpack` 打包好的 `bundle.js` 文件冲突。
    + 解决方法： 
        1. 把 `mui.js` 中的 非严格模式修改
        2. 禁用 `webpack` 中的严格模式
    + 选择禁用 `webpack` 的严格模式，调用插件 `babel-plugin-transform-remove-strict-mode`
5. 刚进入滑动条页面时，滑动条无法正常工作，原因是实例化时机不对，应该选在 `mounted` 钩子函数中，当 `dom` 元素创建后并渲染好后再实例化。
6. 加载好滑动条后，`tabbar` 无法正常工作，其中某个子类名发生冲突，修改类名并重置样式后解决。
7. 获取所有分类并渲染

#### 图片列表
1. 图片列表选用懒加载技术，使用 `Mint-UI` 提供的组件 `lazy-load` 
2. 根据 `lazy-load` 的使用文档，尝试使用
3. 渲染图片列表数据

#### 实现图片列表懒加载和样式设置

#### 实现点击图片跳转到图片详情页面
1. 设置 `li` 为 `router-link` 时，需要使用 `tag` 属性设置渲染为 `li` 元素防止样式出错

#### 实现图片详情中的缩略图
> 旧版使用方法
1. 使用插件 `vue-preview` 插件
2. 获取到所有的图片列表，然后使用 `v-for` 指令渲染数据
3. `img` 标签上的 `class` 不能去掉
4. 每个图片数据对象中必须含有 `w` 和 `h` 属性
> 新版使用方法
1. 根据 `github` 的介绍，使用 `vue-preview` 引入
    ```html
    <template>
    <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </template>
    ```
2. 若没有自备小缩略图，则会按照图片大小显示，不符合需求。
3. 此时，为 `vue-preview` 设置类名，然后自定义样式即可。
    + 深度选择器 `/deep/` 需要与类名隔开一个空格


### 绘制商品列表页面

### 在手机上实现项目预览测试
1. 准备一只手机
2. 保证手机和电脑处于同一 `wifi` 环境中
3. 打开自己的项目中 `package.json` 文件， 在 `dev` 版本中，添加一个 `--host` 指令，设置当前电脑的 `WIFI IP` 地址
    + 查看自己的 `WIFI IP` 在 `cmd` 终端 运行 `ipconfig` 查看无线网的 `ip` 

### `$route` 和 `$router` 区别
1. `$route` 是路由参数对象，所有路由中的参数 `param` `query` 都属于它
2. `$router` 是一个路由导航对象， 可以实现前进、后退
    ```javscript
            // 1. 传递字符串形式
            // this.$router.push('/home/goodsinfo/'+id);
            // 2. 传递对象
            // this.$router.push({path:'/home/goodsinfo/'+id});
            // 3. 传递命名的路由
            this.$router.push({name:'goodsinfo',params: {id}});
            // 4. 传递参数
            // this.$router.push({path:'/home/goodsinfo',query: {id: 88}});
            // 上式等于 /home/goodsinfo?id=88
    ```

### 加入购物车动画问题
1. 写死小球最终到达的位置，导致更换设备或是滑动页面后就出现终点错误或是起点错误的问题。
2. 小球的各种坐标应该由动态得出。
3. 计算终点和起点的位置，相减得出移动距离。
4. 原生方法 `domObject.getBoundingClientRect()`可以得出某个 `dom` 对象距离页面顶部和左侧的距离。