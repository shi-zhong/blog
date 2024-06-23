1. var: 变量提升, 覆盖声明
2. 数组变化
	1. `...` 扩展运算符, 浅拷贝, 结构生成数组
		``` js
		console.log(...['a','b','c']);
		
		function push(a,...rest){}
		// array cppy
		const [...a2] = a1;
		```
	2. Array
		* Array.from() 将类数组结构转为数组。
		* Array.of() 将传入参数组成数组， 参数少于两个时，参数代表元素个数
3. 对象变化
	1. 属性简写
		```js
		// 简写无法作为构造函数
		const obj = {
		  f() {
			this.foo = 'bar';
		  }
		};
			
		new obj.f() // 报错
		```
		2. 属性名表达式
			```js
			cosnt a = {
				[foo] = 'bar',
				[bar](){}
			}
			```
		3. super 关键字，指向对象的原型对象
		4. 扩展运算`...`
4. 函数变化
	1. 默认值
	```js
	function foo({x, y = 5} = {}) {
	  console.log(x, y);
	}
	
	foo() // undefined 5
	```
	2. f.length 返回函数(无默认值)参数个数
	3. f.name
	4. 函数参数作用域
	5. 箭头函数
5. Set And Map / WeakSet And WeakMap
	1. WeakSet 无法遍历，且只能保存引用类型，引用不计入对象回收计数器
6. Promise
	1. 构造
		```js
		// 构造
		const promise = new Promise((resolve, reject) =>{});
		```
	2. 实例方法有 `Promise.then(onFulfillef, onRejected)` ，`Promise.catch`，`Promise.finally`
	3. 构造函数方法有 
		1. `Promise.all([a,b,c])` 与门 
		2. `Promise.race([a,b])` 或门
		3. `Promise.allSettled([a,b,c])` 全部结束
		4. `Promise.resolve(opt)`
		5. `Promise.reject(opt)`
7. Generator
	1. 返回遍历器对象 `Symbol.iterator`  
	2. 使用 `yield` 暂停内部代码执行
	3. `await`，`async` 语法糖自动执行 `next` 函数
8. Proxy
	1. Proxy(target, handler)
	2. handler
	```js 
   handler = {
	   get(target, key, proxy){},
	   set(target, key, value, proxy){},
	   deleteProperty(target, key){}
   }
	```
9. Module
	1. CommonJs `module.export = {}`
	2. AMD `require(['dependence'], callback)`
	3. CMD
	4. `export` `import` `import().then`
10. Decorator
	1. 语法糖
		```js
		// 装饰类
		@Deco
		class A{}

		A = Deco(A) || A;
		```
	2. 高阶函数 传递参数
		```js
		function Deco(argu) {
			return function(targetClass) {
				targetClass.argu = argu;
			}
		}
		```
	3. 装饰属性 `function DecoProperty(targetClass, key, descriptor)` 
	4. 洋葱模型