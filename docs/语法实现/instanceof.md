原理：在原型链上查找对象时候匹配。要求右值是一个函数`Object & callable`
```js
function InstanceOf(obj, constructor) {
	if (typeof obj !== 'object' || obj === null) return false;

	if (typeof constructor !== 'function') {
		throw new Error("Uncaught TypeError: Right-hand side of 'instanceof' is invalid")
	}
	
	if (obj.__proto__ === constructor.prototype) return true;

	else if (obj.__proto__ !== undefined) {
		return InstanceOf(obj.__proto__, constructor);
	} else {
		return false;
	}
}
```