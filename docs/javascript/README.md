# JavaScript

> 参考资料：
>
> 红宝书
>
> 深入理解 ES6

## 基本概念

- 数据类型
  - 基本数据类型: undefined null number string boolean
  - 复杂数据类型: object
- 操作符:
  类型转换的基本顺序：number string boolean object.valueOf() object.toString()
  - 一元操作符: a++ a-- ++a --a +a(相当于用 Number 进行类型转换) -a
  - 位操作符: ~a(求反码，等于-a-1), a & b, a | b, a ^ b, << a, >>a, >>>a
  - 乘性操作符: \*, /, %
  - 加性操作符: +, -
  - 关系操作符: >, >=, <, <=
  - 相等操作符: ==, != (先进行类型转换再比较), ===, !== (直接比较)
  - 条件操作符：a ? b : c
  - 赋值操作符：= += \*= ...
  - 逗号操作符：,
  - instanceof: 只要是原型链中出现过的构造函数, 就会返回true
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
  - 不能重载，因为没有函数签名，但 TypeScript 中实现了！
- 执行环境和作用域链
  - 每个函数都有自己的执行环境，每个执行环境都有一个对应的变量对象，当一个函数执行时，该函数的执行环境会被推入一个环境栈中，某个变量需要使用时，会从栈顶的变量对象开始搜索，找不到就继续往下找，直到全局环境，这条搜索的路径就被称为作用域链。
  - catch 和 with 可以延长作用域链，但注意，它们只是创建一个新的变量对象（使用一个给定的对象）用于搜索。
  - 垃圾回收：有两种算法，分别为标记清除和引用计数，标记清除就是在变量脱离作用域后被标记，然后等待回收，引用计数就是被赋值的时候引用加一，假如为零，就会被清除。后者已经基本不被使用，IE9 仍然会存在循环引用的问题。

## 引用类型

### Object

### Array

#### 方法

1. 检测类型：instanceof 假如有多个全局环境就无法准确判断，Array.isArray() 好用
2. 转换方法：valueOf, toString, toLocaleString
3. 栈和队列：push, pop, unshift, shift
4. 重排序：reverse, sort 不给比较函数会将比较的值转换成 string 再比较
5. 操作：concat, slice, splice
6. 位置：indexOf, lastIndexOf
7. 迭代：forEach, map, filter, every, some
8. 归并：reduce, reduceRight

### Date

#### 方法

1. new Date() 内部会根据参数的不同，调用 Date.parse 和 Date.UTC 将参数转换为毫秒数，不传参数的话就像调用了 Date.now
2. 转换：toDateString ...
3. 操作：getTime, setTime ...

### RegExp

#### 方法

1. 实例方法：exec 和 test，其中 exec 在全局模式下每执行一次，就会匹配一次，直到字符串末尾
2. 静态方法：input, leftContext, rightContext, lastMatch, lastParen, multiline, 以及用于存储捕获的$1 - $9

### Function

#### 方法

1. call，apply，bind: 扩充作用域
2. caller: 调用该函数的外部函数，假如是在全局作用域中调用，则为 null
3. toString, toLocaleString, valueOf: 字符串形式返回函数的定义

#### 内部变量

1. arguments：callee 该函数引用的指针，可以用来与函数名解耦
2. this：可由 call,apply,bind 指定

### 基本包装类型

- new Object()会根据传入参数的类型调用不同的包装类型
- 访问基本类型值的时候，会调用包装函数生成一个对象，操作完成后该对象会被立即销毁。

1. Boolean
2. Number
3. String: 用于转换的方法非常多，令人发指！

### Global 对象

- 内置的顶级对象，浏览器通过 window 对象放置所有的 global 对象属性和方法，包括一些特殊值如 undefined,null,NaN,Infinity,以及很多构造函数

### Math 对象

## 面向对象

### 理解对象

1. 属性类型。分为数据属性和访问器属性，数据属性的特性为 configurable，enumerable，writable，value，访问器属性的特性为 configurable，enumerable，get，set。
2. 定义属性。可以使用字面量定义数据属性（访问器属性不行），那么特性的值都为 true；可以用 Object.defineProperty 和 Object.defineProperties 定义，没有明确写的属性特性都为 false 或者 undefined。
3. 读取属性。使用 Object.getOwnPropertyDescriptor 获取属性的特性。

### 创建对象

1. 工厂模式

```javascript
function createPerson(name, age) {
  const o = new Object();
  o.name = name;
  o.age = age;
  o.say = function() {
    console.log(this.name);
  };
}
```

2. 构造函数模式

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = function() {
    console.log(this.name);
  };
}
```

3. 原型模式

```javascript
function Person() {}

Person.prototype.name = 'bao';
Person.prototype.age = 24;
Person.prototype.say = function() {
  console.log(this.name);
};
```

- 一个函数被创建后,会自动添加上 prototype 属性,指向一个原型对象,而 prototype 也默认拥有一个 constructor 属性,指向这个函数.
- 判断原型的方法: Object.prototype.isPrototypeOf, Object.getPrototypeOf
- 实例属性和原型属性: in 可以判断两种属性, for in 可以枚举可枚举的两种属性, Object.keys()获取可枚举的实例属性, Object.getOwnPropertyNames()获取所有实例属性
- 缺点: 假如某个属性是引用类型, 那么一旦被修改会影响所有实例对象

4. 组合构造函数模式和原型模式

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.say = function() {
  console.log(this.name);
};
```

- 最常用的模式

5. 动态原型模式

```javascript
function Person(name) {
  this.name = name;
  if (typeof this.say == 'undefined') {
    Person.prototype.say = function() {
      console.log(this.name);
    };
  }
}
```

- 上一张模式的改进, 可能是为了看起来更聚合一点

6. 寄生构造函数模式

```javascript
function Person(name, age) {
  const o = new Object();
  o.name = name;
  o.age = age;
  return o;
}
```

- 看起来像构造函数模式, 好处是可以实现一些继承的功能
- 缺点是无法使用 instanceof 判断对象类型

7. 稳妥构造函数模式

```javascript
function Person(name, age) {
  const o = new Object();
  const _name = name;
  const _age = age;
  o.say = function() {
    console.log(_name);
  };
  return o;
}
```

- 好处是外界无法访问私有变量, 很安全

### 继承

一般OO语言都会支持两种继承, 分别是接口继承和实现继承, 接口继承继承方法签名, 类似于TS中继承一个抽象类, 实现继承继承实际的方法, 就是普通的继承.


1. 原型链

- 定义: 原型链就是原型和实例的链条, 子类型实例指向的原型, 同时又是父类型的一个实例, 然后层层递进, 直到Object的原型对象
- 缺点: 原型包含引用类型值的时候, 会造成污染; 无法传递参数

2. 借用构造函数(经典继承)

- 优点: 可以传递参数
- 缺点: 函数不能复用

3. 组合继承

- 定义: 使用构造函数继承属性, 使用原型链继承方法, 最常用
- 优点: 函数可以复用
- 缺点: 两次调用父类型构造函数

4. 原型式继承

- ES5后可以使用Object.create()来实现

5. 寄生式继承

- 采用工厂模式, 在原型式继承的基础上增加一些方法的定义

6. 寄生组合式继承

- 将组合继承中方法的继承, 由原型链继承换成寄生式继承, 是最理想的继承方式
- 优点: 拜托了组合继承调用两次父类型构造函数的缺点

## 函数表达式

- 定义函数的两种方式: 函数声明, 函数表达式. 函数声明存在函数声明提升的特征.

### 递归

### 闭包

- 定义: 闭包是指有权访问另一个函数作用域中变量的函数. 常用的创建方法是在一个函数内部创建另一个函数.