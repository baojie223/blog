# JavaScript

> 参考资料：
>
>   红宝书
>
>   深入理解ES6

## 基本概念

- 数据类型
  - 基本数据类型: undefined null number string boolean
  - 复杂数据类型: object
- 操作符:
  类型转换的基本顺序：number string boolean object.valueOf() object.toString() 
  - 一元操作符: a++ a-- ++a --a +a(相当于用Number进行类型转换) -a
  - 位操作符: ~a(求反码，等于-a-1), a & b, a | b, a ^ b, << a, >>a, >>>a 
  - 乘性操作符: *, /, %
  - 加性操作符: +, -
  - 关系操作符: >, >=, <, <=
  - 相等操作符: ==, != (先进行类型转换再比较), ===, !== (直接比较)
  - 条件操作符：a ? b : c
  - 赋值操作符：= += *= ...
  - 逗号操作符：,
- 流控制语句
  - if else
  - switch 
  - while
  - do while
  - for
  - for in
  - label break continue
  - with: 改变作用域至一个特定的对象中
- 函数
  - arguments
  - 不能重载，因为没有函数签名，但TypeScript中实现了！
