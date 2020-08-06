# Node.js

## 模块

### events

EventEmitter 就是一个发布订阅模式的案例，它是 node 中许多模块的基础。

```javascript
class EventEmitter {
  map = {}
  on(event, cb) {
    if (!this.map[event]) this.map[event] = []
    this.map[event].push(cb)
  }
  emit(event, ...args) {
    for (let cb of this.map[event]) {
      cb.apply(this, args)
    }
  }
}
```

### stream

stream 模块继承自 EventEmitter，分为 readable，writable，duplex，transform。

### fs

学会了 createReadStream 和 createWriteStream 的用法，分别返回一个可读和可写的流。

### Buffer

一个对象，类似数组，元素是 2 位 16 进制，即一个字节

## 异步 I/O

首先 node 中的调用顺序是: node 核心模块 -> c++内建模块 -> 通过 libuv 根据不同平台进行系统调用

当我们发起异步调用的时候, 会根据之前的调用顺序, 走到 libuv 这个封装层, 在这层上会创建一个请求对象, 并且我们在 javascript 层中传入的参数和回调函数也会被挂在这个对象上, 之后这个对象会被推入线程池中等待执行, 这是第一部分.
第二部分是回调通知部分, 线程池中的I/O操作调用完毕后, 会将结果挂在请求对象上, 然后通知系统操作完成, 并将线程归还线程池. 事件循环的每个Tick中会从线程池中取出完成的请求对象, 并将该对象推入I/O观察者队列中, 然后事件循环会不断从观察者队列中取出请求对象, 根据请求结果执行其中的回调函数, 这就完成了一次回调.
