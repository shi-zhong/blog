---
title: aysnc 在es5下的一种实现
tags:
  - 语法实现
---
`async`  `await`是 `es6` 下简化`Promise`嵌套的语法糖，旨在简化`Promise`操作的复杂性，提高代码可读性。当一个函数被标记成`async`函数时，该函数的返回值会被标记成一个已完成的`Promise`。在`async`函数中，`await`会阻塞当前代码，当后继异步代码执行完毕后，获取其返回值。
```js
const asyncFunc = async () => {
	const a = await 5;
	const b = await 2;
	return a + b;
}
```

`await`能够让程序员用同步的方式来执行异步代码，在`js`中抛出错误和`promise`可以更改程序流，让代码跳过剩余部分和让代码结束之后继续执行。基于以上结论，有以下原型
```js

const asyncFuncES5 = () => asyncFunc((awaitFunc) => {
	const a = awaitFunc(new Promise(r => r(5)));
	const b = awaitFunc(2);
	return a + b;
})

```

  我们知道，通过缓存和回调可以模拟出异步转同步的效果，阻止异步扩散。而`awaitFunc`的调用方式让我联想到了`React.useState`，整体思路就是遇到`awaitFunc`就抛出错误终止函数，在异步代码结束后缓存值并重新执行代码。如果有缓存值则载入缓存，没有则中断进行异步。直到函数正常结束，标记`Promise.resolve`。
```js
function asyncFunc(callback) {
  return new Promise((resolve) => {
	let nextCount = 0;
	const caches = []
	const awaitFunc = (awaitCb) => {
      const cacheCount = nextCount;
	  if (caches[nextCount] === undefined) {
		const result = awaitCb	
		if (awaitCb instanceof Function) {
		  result = awaitCb();
		}
		if (result instanceof Promise) {
		  result.then(res => {
			caches[nextCount] = res;
			 try {
		  	  nextCount = 0
		      resolve(callback(awaitFunc));
			 } catch { }
		  })
		  throw "no cache";
		} else {
		  caches[nextCount++] = result;
		}
    } else {
	  nextCount++;
    }
    return caches[cacheCount];
  }
	try {
		resolve(callback(awaitFunc));
	} catch { }
  })
}

asyncFuncES5().then(r => console.log(r))

```