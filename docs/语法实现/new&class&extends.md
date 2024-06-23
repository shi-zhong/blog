`new`操作符的作用方式调用构造函数，开辟新内存并将`this`指向新对象。

```js
const MyNew = (myClass, ...argus) => {
  const obj = {};
  myClass.call(this, obj);
  obj.constructor = myClass
  return obj;
}
```

`class`是实现类的语法糖
```js
class A {
  constructor() {}
  a = 1
  b() {}
  static aa = 2
  static bb () {}
}

// the same as
function A {
  this.a = 1
}

A.prototype.b = function(){}
A.aa = 2
A.bb = function () {}

```
组合式继承
1. 在子类构造函数中调用父类构造函数,实现属性继承
2. 调用父类构造函数，替换子类原型实现方法继承(修改原型构造函数指向)
```js
function SuperType(name) { }

function SubType(name, age) { } 

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType; 
SubType.prototype.sayAge = function () { }; 
```
寄生式组合继承
1. 同组合式继承，区别在于使用一般函数替代父类构造函数来减少原型创建开销。
```js
function SuperType(name) { }

function SubType(name, age) { } 

inherit(SubType, SuperType); 
SubType.prototype.sayAge = function () { };

function inherit(target, origin) {
  function F(){}
  F.prototype = origin.prototype
  target.prototype = new F();
  target.proortype.constructor = target
}
```