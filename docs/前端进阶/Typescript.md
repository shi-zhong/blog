1. 使用`#`来声明一个私有属性
2. `readonly` 可以在 `interface`, `type` 和 `class`构造函数阶段中被使用, 
3. `keyof`  `typeof` `in` `keyof` `[]` `infer` `partical` `NonNullable` 
4. 协变和逆变，用于描述函数类型转换的兼容性。
	1. `Cat` 继承于 `Animal`，`(Animal):viod` 继承于 `(Cat): void` 函数参数逆变
5. 想要遍历一个联合类型，通过泛型的`extends`<u>*分发类型*</u>
```ts
// 在extends子句中，T会被分发
type K<T> = T extends any ? T : never;
```
6. as 不作为断言使用，而是作为条件语句
``` ts
type Type<T, K> = {
	[Q in typeof T as T[Q] extends K ? Q: never]: T[Q];
	// as 不作为断言而是条件语句，给后方提供了一个Q变量的分发
}
```
2. 遍历一个类型
```ts
type MapArray<T> = T extends (infer P)[] ? P: never;
type ArrayType<T extends Array<any>> = T[number];
type C = ArrayType<[1,2,3,'test']> // 1 | 2 | 3 | 'test'
type D = MapArray<[1,2,3,'test']> // 1 | 2 | 3 | 'test'

type K = keyof {};
type valueof<T> = T[keyof T];
```
4. 
```ts
type A = keyof any; //  string | number | symbol
type B = keyof { a:string } // 用extends排除string类型的key后, 'a'仍存在
```
5.  `Array`
```ts
type NotEmpty<T> = [T, ...T[]];

const arr = ["foo", "bar", "baz"] as const;
// type is : "foo" | "bar" | "baz"
type Values = typeof arr[number];

type obj = {
  [index in Values]?: boolean;
};

// const obj: {
//   foo?: boolean;
//   bar?: boolean;
//   baz?: boolean;
// };

```
6. 通过模板字符串进行匹配
```ts
type TrimLeft<V extends string> = V extends ` ${infer R}` ? TrimLeft<R> : V;
```
7. 获取值的联合
```ts
// 联合转交叉
type ToUnionOfFunction<T> = T extends any ? (x: T) => any : never;

type UnionToIntersection<T> = ToUnionOfFunction<T> extends (x: infer P) => any ? P : never;

// 交叉转联合
type ToIntersection<T> = T extends any ? () => T: never;
type IntersectionToUnion<T> = ToIntersection<T> extends () => infer P ? P:never;
```
8. Function
```ts
type append<F extends (...argu: any) => any, A>
= (a: A, ...b: Parameters<F>) => ReturnType<F>
```
9. Never 表示空的联合类型，遇到never直接停止执行后续分发判断
```ts
type IsNever<T> = [T] extends [never] ? true : false; // Yes
type IsNever<T> = T extends never ? true : false; // No
// ?:
// -?:
```
10. 准确类型
```ts
type Exclusive<T1, T2 extends T1> = {
	// 通过限定一个新的类型是否是准确类型
	[K in keyof T2]: K extends keyof T1 ? T2[K] : never;
}
```