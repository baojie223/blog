# CSS

## 布局

首先 css 世界中，存在 5 种布局方式，分别为文档流，定位，float，flex，grid，下面就来逐个总结。

### 文档流

### 定位

### float

### flex

首先，flex 布局的关键点在两条轴上，分别为主轴和交叉轴，由此产生的属性有 6 个，分别为：
父级：

- justify-content，控制子级元素在主轴上的排布
- align-items，控制子级元素在交叉轴上的排布
- flex-direction，控制 flex 的方向
- flex-wrap: 控制是否换行
- flex-flow: 混合属性，flex-direction 和 flex-wrap
- align-content: 换行后，多条主轴在交叉轴上的表现

子级：

- align-self: 控制自己在交叉轴上的表现
- flex-basis: 元素的宽度
- flex-grow: 在主轴上填充的速度
- flex-shrink：在主轴上压缩的速度
- flex：混合属性，flex-basis、flex-grow、flex-shrink
- order: 改变元素的顺序

> 参考资料：
>
> [https://juejin.im/post/58e3a5a0a0bb9f0069fc16bb](一劳永逸的搞定 flex 布局)

### grid
