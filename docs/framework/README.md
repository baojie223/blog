# 开发框架

## Vue.js

### 2.x

1. 父子组件的生命周期执行顺序是子组件在父组件之前挂载卸载，也就是在 beforeMount、beforeUpdate、beforeDestroy 之后的生命周期是子组件先执行。

2. 响应式原理：每个 Vue 实例都有一个对应的 Watcher 实例

### 3.0 相关

1. 学会了 ref 的用法。

### Vue Router

1. 路由守卫：

- 全局：beforeEach、beforeResolve、afterEach
- 路由独享：beforeEnter
- 组件独享：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave
- 执行顺序：beforeRouteLeave => beforeEach => beforeRouteUpdate => beforeEnter => beforeRouteEnter => beforeResolve => afterEach

## React

### 实践

1. 样式表可以选择 material-ui 的 css-in-js 方案，@material-ui/styles，提供了 Hook API，使用上相当现代。
