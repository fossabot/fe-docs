---
title: Promise
---

## [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Promise 函数用于描述一个异步函数完成、失败

### 关于一些名词解释

- pending: Promise 的初始状态，既不是成功也不是失败
- fulfilled: Promise 操作成功完成
- rejected: Promise 操作失败
- settled: Promise 属于完成状态，无所谓成功或失败

### 关于用法

```javascript
new Promise(funtion ( resolve, reject ) { /* .... */ })
```

Promise 接受一个参数为一个带有两个参数的回调函数，该回调会在返回 promise 实例前被调用。
resolve 和 reject 在被调用时会分别产生 promise 的 fulfilled 和 rejected 状态。
若在执行该函数的过程中产生错误，则该 promise 状态会变为 rejected，返回值会被忽略。

###### 举个简单的 🌰

```javascript
var correctPromiseExp = new Promise((res) => {
  res(1);
});
// 该promise最终会以fulfilled状态并返回1

var errorPromiseExp = new Promise((res) => res(ok));
// 该promise最终会以rejected的状态返回。
```

###### 关于链式

由于`Promise.prototype.then`和`Promise.prototype.catch`方法返回`promise`对象，所以他们可以被链式调用。

```javascript
var exp = new Promise((resolve, reject) => {
                                              var jsonString = "{"a":1}";
                                              try {
                                                jsonString = JSON.parse(jsonString)
                                                resolve(jsonString)
                                              } catch(error) {
                                                reject(error)
                                              }
                                            })
// 捕获异常算是promise里面一个分情况返回结果的常规操作。

// 常规有两种处理方式
// 1 promise.then(fn(fulfilled), fn(rejected))
exp.then(
  fulfilledMessage => console.log(fulfilledMessage),
  rejectedError => console.error(rejectedError)
).finally(finally => console.log(finally))

// 2 promise.then(fn(fulfilled)).catch(rejected)
exp.then(fulfilledMessage => console.log(fulfilledMessage))
   .catch(rejectedError => console.error(rejectedError))
   .finally(finally => console.log(finally))

// 这里要说的是，成功即调用.then, 失败即调用.catch, 或是第一种的分别两个函数参数, 所以本质上在异步操作的完成和绑定处理方法之间不存在竞争关系。
```

### 属性和方法

- `Promise.length`  
  这里始终是 1，表示的是构造器参数的数目。

- `Promise.all(array<Promise>)`  
  接收一个`Promise`为元素的数组作为参数，同时执行当前数组内的所有 promise， 并按照对应的顺序返回一个数组在相应的状态结果内。

```javascript
var p1 = new Promise((resolve, reject) => resolve('p1')),
  p2 = new Promise((resolve, reject) => reject('p2')),
  p3 = new Promise((resolve, reject) => resolve('p3'));
Promise.all([p1, p2, p3])
  .then(([p1Result, p2Result, p3Result]) => {
    console.log(p1Result, p2Result, p3Result);
  })
  .catch(([p1Error, p2Error, p3Error]) => {
    console.error(p1Error, p2Error, p3Error);
  });
// 值得注意的是，这里的结果会直接error: p2
// 执行中若有rejected的结果则当前promise队列会直接导向rejected状态。
```

- `Promise.race(array<Promise>)`  
  接收一个`Promise`为元素的数组作为参数，同时执行当前数组内的所有 promise，如若当中某个 promise 成功或失败即立马将当前 promise 的结果作为整体 promise 的结果

```javascript
var p1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve('p1'), 1000),
);
var p2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve('p2'), 2000),
);
var p3 = new Promise((resolve, reject) =>
  setTimeout(() => resolve('p3'), 3000),
);
Promise.race([p1, p2, p3])
  .then((res) => console.log(res)) // 注意这里是单个的返回结果，和all不同，all返回的是同序的一个数组
  .catch((error) => console.log(error)); // 同上
```

- `Promise['reject' | 'resolve'](any)`  
  返回一个状态为失败/成功的 Promise 对象，信息为传入的参数。这里注意的是，当使用 Promise.resolve 时，若传入的值为非 Promise 对象则状态为 fulfilled, 若为 Promise 对象则结果由 Promise 对象的结果决定

```javascript
Promise.resolve(1); // 这个时候是fulfilled状态
Promise.resolve(Promise.reject(2)); // 这个时候为rejected状态
```
