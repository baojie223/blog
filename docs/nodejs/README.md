# Node.js

## 模块

### events

EventEmitter就是一个发布订阅模式的案例，它是node中许多模块的基础。

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

stream模块继承自EventEmitter，分为readable，writable，duplex，transform。

