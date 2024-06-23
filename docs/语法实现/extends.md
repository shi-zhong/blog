继承是面向对象编程中常见一种拓展方式 ，`js`作为吸收了面向对象编程思想的语言，自然是包含了这种语法实现。`extends`关键字作为一个语法糖在`es6`中得以实现。在`js`中，继承的关系是通过原型链得以体现的，当对象原型出现在对象实例的原型链上时，称该对象继承自目标对象，可以通过`instanceof`关键字来判断对象的继承关系。

```js
const Extends = (parent, child) => {
  const p = new parent()
  
  const c = new child();

  c.__proto__ = p;

}
```