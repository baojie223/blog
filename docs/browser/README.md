# 浏览器工作原理

## 浏览器架构

浏览器早期都是单进程架构, 导致的问题是不稳定, 不流畅, 不安全, 后来 chrome 开启了多进程架构时代, 中间也经过了多次迭代, 目前是面向服务架构, 由浏览器主进程, 各种服务进程(GPU 进程, 网络进程, 文件进程等), 每个页面单独的渲染进程(对于同一站点, 即协议与根域名相同的站点, chrome 会复用渲染进程), 插件进程, 共同构成.

各页面渲染进程的独立使得页面脚本的执行互不干扰, 解决了不稳定不流畅的问题, 同时各个进程是在沙箱中运行的, 也更安全了.

## 数据传输

网络层的 IP 协议负责把数据包送到目标主机, 传输层的 TCP/UDP 协议负责把数据包送到目标应用端口, 其中 TCP 协议通过三次握手, 传输数据, 四次挥手保证了数据稳定性.

浏览器多个标签均发起请求时, 源端口是相同的, 但网络进程知道每个 TCP 连接对应的标签, 所以接收到数据后, 会将内容分发到目标标签页的渲染进程.

## 从输入 URL 到页面展示, 中间发生了什么?

这个问题我用 chrome 浏览器的行为来描述一下.

1. 浏览器地址栏判断输入的内容是否符合 URL 规则, 如果不符合, 会使用默认的搜索引擎合成带搜索关键字的 URL, 如果符合, 会加上协议, 把它合成为完整的 URL, 同时当前页面也会触发 beforeunload 事件.

2. 接下来就进入页面资源请求阶段, 浏览器进程会通过 IPC 将 URL 请求发送至网络进程中, 由网络进程发起真正的请求. 首先网络进程会查找本地缓存, 如果找到了缓存资源就直接返回给浏览器进程, 没有找到则进入网络请求流程.网络请求的第一步是 DNS 解析, 获取服务器 IP 地址, 如果是 HTTPS 协议, 则还要建立 TLS 连接. 接着就是利用 IP 地址建立 TCP 连接, 建立完成后浏览器会构建请求行和请求头, 并带上和该域名相关的 Cookie, 发送给服务器. 服务器接收到请求消息后, 生成响应数据发送给浏览器的网络进程. 网络进程在接收到响应行和响应头后, 就开始解析.

如果返回的状态码是 301 或者 302, 代表服务器要浏览器重定向到别的 URL, 则网络进程会读取响应头中的 Location 字段获取重定向的地址, 然后重新开始页面资源请求.

如果返回的是 200, 浏览器会根据 Content-Type 字段决定如何显示响应体的内容, 假如该字段被浏览器判断为下载类型, 那么这次请求会被提交到浏览器的下载管理器, 如果是 HTML, 浏览器进程会向渲染进程发起"提交文档"的消息.

3. chrome 会为每个页面分配一个渲染进程. 唯一的例外就是当从 A 网站内部打开 B 网站时, 如果是同一站点(即协议与根域名相同), 则会复用之前的渲染进程.

4. 渲染进程接收到"提交文档"的信息后, 会和网络进程建立传输数据的管道, 等文档数据传输完成后, 渲染进程会返回"确认提交"的信息给浏览器进程, 浏览器进程收到消息后, 会更新浏览器界面状态, 导航流程就结束了, 进入下一步渲染阶段.

5. 渲染阶段的处理流程叫做渲染流水线, 包括了多个子阶段.

构建 DOM 树

样式计算, 会把所有的 CSS 样式, 包括 link 中的外部文件, style 标签, 元素的 style 属性, 转换成 styleSheets, 并且对其中的属性值进行标准化操作, 然后计算每个节点的样式, 根据 CSS 继承和层叠的特性, 将每个节点的最终样式保存在 ComputedStyle 的结构内.

布局, 计算出 DOM 树中可见元素的几何位置, 分为两个步骤, 构建布局树和布局计算, 构建布局树会忽略掉所有不可见的元素.

分层, 当元素有了层叠上下文属性或者需要被裁剪

## 浏览器安全

1. 跨站脚本攻击（XSS）

- 类型：存储型、反射性、DOM 型
- 防范策略：
  - 服务器对输入的内容进行过滤或转码
  - 使用 CSP（内容安全策略）：通过 Content-Security-Policy 字段开启，可以做到只执行白名单中的脚本
  - 使用 HttpOnly 保护重要的 Cookie

2. 跨站请求伪造（CSRF）

## XMLHttpRequest

1. 使用 xhr 封装一个请求函数

2. 跨域问题

- 产生的原因: 浏览器的同源策略(协议, 域名, 端口均相同即为同源)

## 宏任务和微任务

1. 宏任务和微任务分别是什么?

页面中的大部分任务都是在浏览器主线程中执行的, 为了让这些任务有序执行, 就引入了事件循环和消息队列的机制, 渲染进程内部维护一个或多个消息队列, 比如延迟消息队列和普通消息队列, 然后主线程不断地从队列中取出任务并执行, 这些在消息队列中的任务就是宏任务.

每个宏任务都会有一个自己的微任务队列, 每当宏任务执行结束时, 会依次执行微任务队列中的任务, 如果在执行微任务的时候产生了新的微任务, 也会继续推入这个队列中, 而微任务由两种方式生成, 一种是 Promise 的 resolve 和 reject, 另一种是 MutationObserver 监控的 DOM 节点发生变化.

2. 微任务产生的原因?

宏任务的时间粒度比较大, 不能精确控制执行的时间间隔, 无法满足高实时性的需求, 比如监听 DOM 的变化.

## Promise

1. 如何实现一个 Promise?
