1. 数据类型
	1. 基本数据类型(`number`, `string`,  `boolean`, `null`, `undefined`, `symbol`,`bigint`)
	2. 引用类型 Object(`object, Array, Function`)
2. == 和 ===
3. 深拷贝 和 浅拷贝
4. 闭包
5. 原型链
	1. 原型是`js`中为了模仿类所提出的一种机制，通过共有构造函数的原型，对象实例之间享同一内存地址的方法。`class.prototype === obj.__proto__`
	2. 所有对象都是原始类`Object`的实例，所有类都是原始类`Object`的子类，所有对象共享`Object.prototype`。(`Object.create(null)`除外)
	3. 对象(函数)拥有`__proto__`属性，函数原型有`constructor`属性，构造函数(非箭头函数)拥有`prototype`属性 。
	4. 所有函数继承自`Function Function.__proto__ === Function.prototype`。函数也是对象`Function.prototype.__proto__ === Object.prototype`
	
6. 继承
	```js
	// 使用原型链进行继承
	// 在子类的构造函数中通过绑定this调用父类构造函数开辟独立内存绑定属性
	// 通过clone函数，将父类原型对象绑定到子类，实现方法继承
	// 同时更改父类原型对象复制品的构造函数实现闭环
	function clone (parent, child) {
	    // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
	    child.prototype = Object.create(parent.prototype);
	    child.prototype.constructor = child;
	}
	
	function Parent6() {
	    this.name = 'parent6';
	    this.play = [1, 2, 3];
	}
	Parent6.prototype.getName = function () {
	    return this.name;
	}
	function Child6() {
	    Parent6.call(this);
	    this.friends = 'child5';
	}
	
	clone(Parent6, Child6);
	
	Child6.prototype.getFriends = function () {
	    return this.friends;
	}
	```
7. this
	1. 在函数内的关键字，指向调用该函数的对象。
	2. 非严格模式，全局函数调用绑定global，严格模式绑定undefined.
	3. new 过程中，this绑定至实例对象，若构造函数返回对象，则绑定至返回的对象
	4. new绑定优先级 > 显示绑定优先级 > 隐式绑定优先级 > 默认绑定优先级
8. 事件流 capture -> target -> bubbling
9. instanceof(查看是否在原型链) typeof(查看数据类型)
	1. `Object.prototype.toString`，调用该方法，统一返回格式`“[object Xxx]”`的字符串
10. 事件代理：父节点代理子节点事件以节省性能
11. new 
	1. 创建新对象
	2. 绑定原型
	3. 绑定this
	4. 根据构造函数返回值，返回相应对象
12. 事件循环
	1. 实现单线程非阻塞的方法，当执行主线程时，先执行宏任务，在宏任务执行期间，将遇到的微任务放入微任务队列，执行完当前宏任务后，清空微任务列表，执行下一个宏任务。
	2. 微任务包括：`Promise.then`，`MutationObserver`,`Proxy`，`procecss.nextTick`...
	3. 宏任务包括：`script`(同步代码层)，`setTimeout/setInterval`，`UI rendering`...
	4. await会在执行完紧跟的代码后，阻塞之后的代码。
13. BOM（Browser Object Model）
	1. window 作为全局对象和浏览器窗口API接口
	2. location url解析对象
	3. navigator 浏览器属性对象
	4. screen 物理屏幕属性
	5. history 浏览器历史记录
14. 尾递归
15. 内存泄露
	1. 标记清除和引用计数
16. 本地存储
	1. cookie
	2. localStrorage
	3. sessionStorage
	4. indexedDB
17. 函数缓存
	1. 闭包
	2. 柯里化
	3. 高阶函数
18. 数字精度丢失 0.1 + 0.2 = 0.3
	1. `bignumber.js` 数字库
	2. `num.toPrecision` 调整精度
	3. 放大成整数后运算缩小
19. 防抖和节流
20. 可视区域
	1. `offsetTop` / `scrollTop`
	2. `getBoundingClientRect`
	3. `Intersection Observer` 重叠观察者
21. 大文件断点续传
	1. 分片上传
	2. 断点续传
22. 上拉加载，下拉刷新
23. 单点登录
	1. 同域名使用`cookie`保存`token`到父域
	2. 不同域名使用独立认证中心（服务器如何知道谁在访问？？）
24. 常见攻击
	1. XSS
	2. CSRF
	3. SQL注入
25. `Function.prototype.call(this, ...argus)`/`Fucntion.prototype.apply(this,[...argus])`
26. 类型转换规则
	1. `Boolean`类型优先转换成数字类型。
	2. `Number`和`String`比较，优先转换成数字。
	3. 引用类型优先抽象成基础类型