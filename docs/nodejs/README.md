# Node.js

## 模块

### events

EventEmitter 就是一个发布订阅模式的案例，它是 node 中许多模块的基础。

```javascript
class EventEmitter {
  map = {};
  on(event, cb) {
    if (!this.map[event]) this.map[event] = [];
    this.map[event].push(cb);
  }
  emit(event, ...args) {
    for (let cb of this.map[event]) {
      cb.apply(this, args);
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
