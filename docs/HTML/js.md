---
title: JS
---

### 基础数据类型

```javascript
undefined null boolean number string symbol(es6)
```

### JavaScript 原型特点

```javascript
instance.constructor.prototype = instance.__proto__;
```

JavaScript 对象是通过引用来传递的。
当修改原型时，与之相关的对象的相关属性也会一并修改。

### JavaScript 数据类型

- 栈： 原始数据类型（ undefined null boolean number string ）占据空间小，大小固定， 属于被频繁使用数据
- 堆： 引用数据类型（ object array function ）占据空间大，大小不固定，将会影响程序运行的性能。引用数据类型在栈中存储了指针，
  该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中地址，取址后从堆中获得实体。
- 两种类型存储的位置不同

````

### 数组的随机排序
```js
var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
arr.sort(() => Math.random() - 0.5)
````

### This

this 总是指向函数的直接调用者

若为 new 关键字实例出来的对象， this 则一直指向当前这个对象
在事件中， this 指向触发这个事件的对象（IE 中的 attachEvent 中的 this 总指向全局对象 window）

### 作用域链

全局函数无法查看局部函数的内部细节， 但内部函数可以查看其上层的函数细节， 直至全局细节。
当需要从局部函数查找某一属性或方法时， 如果当前作用域没有找到， 就会上溯到上层作用域查找，
直到全局函数， 这种形式就是作用域链。

### null vs undefined

| &nbsp  |                 null                 |             undefined              |
| ------ | :----------------------------------: | :--------------------------------: |
| 概念   | 表示一个对象是“没有值”的值，即值为空 | 表示一个变量声明了没有初始化(赋值) |
| JSON   |             有效的 JSON              |            无效的 JSON             |
| typeof |                object                |             undefined              |

### [parseInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

- 基础使用

  ```js
  parseInt(string, index);
  ```

  - string: 要被解析的值。如果不是一个字符串尝试将其转换为字符串。字符串开头的空白字符串将会被忽略。
  - radix(可选): 从 2 ～ 36， 代表该进位系统的数字。例如说指定 10 即为 10 进位。当没有指定或为 0 时按照 10 为基数来解析。
  - 若 string 无法被转换为 string 或 radix 不在 2 ～ 36 之内则解析为 NaN

- 计算方式

  ```js
  parseInt('10', 2)  1*2^1 + 0*2^0 = 2

  [ "1", "2", "3" ].map(parseInt) => [ 1, NaN, NaN ]
  ```

### hasOwnProperty

该方法去检查属性的时候只会从当前对象本上去查找属性，不会顺着原型链去查找。

### new

```js
var emptyObject = {};
emptyObject.__proto__ = Fnc.prototype;
Fnc.call(emptyObject);
```

### document.write vs innerHTML

- document.write: 只能重绘整个页面
- innerHTML: 局部重绘
