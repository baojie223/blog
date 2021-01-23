# 面试相关

## 1

- 大文件上传
  - promise 有哪些方法
  - WebWorker

## 2

- 项目优化
  - fork-ts-checker、threadLoader、cacheLoader（webpack5 不再需要）

## 遇到过最难解决的问题？

- 对设备实时状态的检测

### rxjs

- 响应式编程、流、观察者模式、迭代器模式

### websocket 的优化？

#### 心跳重连机制

- 在 ws 的 onopen 事件中开启心跳检测，每隔一段时间发送一个心跳包，假如在规定的时间内没有收到服务器响应，那就认为服务器端断开了连接，此时客户端通过 ws.close 去关闭连接，然后触发 onclose 事件，并且在事件处理中进行 ws 的重连，假如没连接成功就会一直重连，但中间等待的时间可以设置为随着重连次数的增加逐渐增加，防止重连次数过多。

## 4

- 数组判断方法
  - 跨标签通讯

## 5

- typescript
  - 谈谈 any、unknown、never 的区别？

## 6

- 算法第 k 大的值
  - 快速排序

## 熟悉浏览器的缓存吗？

- 当我们去发起请求的时候，服务器会在响应头中加入 Cache-Control 进行缓存策略的控制
- 这个头部字段具有 6 种属性值：no-store、no-cache、must-revalidate、max-age、public、private，它们的含义分别是不允许缓存、使用缓存前必须验证、缓存失效后必须验证、缓存最多 x 秒（从响应头的 Date 开始计时）、是否可以缓存在代理服务器上
- 验证指的是通过条件请求，也就是在响应头中有 Last-modified 和 ETag 的情况下，使用 If-modified-since 和 If-none-match 来验证资源有效性，假如有效，返回 304，无效则返回 200 和新的资源

## 讲一下 vue 的源码

### 响应式

## 讲一下 vuex 的源码

### mutations 和 actions 的区别

- mutation 执行前会把\_committing 打开，然后就允许修改 state，修改完后立即关闭

## let const var 的区别

### babel 如何实现 let 和 const 的效果

- 在命名相同的变量前加下划线，后面加数字

## BFC 是什么？

### 如何清除浮动？
