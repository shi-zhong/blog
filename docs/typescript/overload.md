---
title: Ts函数重载
---

1. 常规函数重载
```ts
function Adder(a: number, b: number): number;
function Adder(a: string, b: string): string;
function Adder(a: number | string, b: number | string) {} // 断言
```
2. interface 函数重载
```ts
interface Adder {
	(a: number, b: number): number;
	(a: string, b: string): string;
}

const Adder: Adder = () => {} // 不行就断言
```
3. type 函数重载
```ts
type Adder = {
	(a: number, b: number): number;
	(a: string, b: string): string;
}

const Adder: Adder = () => {} // 断言
```