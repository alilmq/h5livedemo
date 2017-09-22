## Aliplayer播放器H5 live demo

包含全屏播放、评论、点赞、客户端长连接mqtt、支持在android微信全屏同层播放等功能。

## [体验demo](https://player.alicdn.com/aliplayer/)

## [参考文章](https://player.alicdn.com/aliplayer/docs/blogs/how-to-handle-h5-same-layer.html)

![移动版](https://player.alicdn.com/aliplayer/img/h5livedemo.png)  

### 安装依赖项

本Demo使用了ES6、webpack、gulp等技术。

 - [Node.js](https://nodejs.org/en/)
 - [Webpack](http://webpack.github.io) 
 - [gulp](https://gulpjs.com)

```sh
$ cd h5livedemo
$ npm install
```

### 编译

#### 开发环境

启动webpack dev server微服务，支持监听文件变化，实现时时打包，支持热模块替换。

```sh
$ cd h5livedemo
$ npm run dev
```

#### 产品环境

```sh
$ cd h5livedemo
$ npm run prod
```

