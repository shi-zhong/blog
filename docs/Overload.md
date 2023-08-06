---
lang: zh-CN
title: 使用ts进行函数重载
description: 语法 
---
### 引言
函数重载在项目中经常遇到，在进行重载时，弱类型的js可以只进行部分类型检查，而在ts中，经常由于ts的愚蠢而爆红。不同版本的ts会有不同的结果，为了避免不断的重复令人头疼的重载，可以定义一个`overload`重载函数自动进行类型重载。

### ts中的类型重载
ts中有三种办法可以进行类型重载
1. `function`类型重载
```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: object, b: object): object;
function add(a: number|string|object, b:number|string|object) {
  // 函数实现
}
```
在这种函数重载时，实现函数的参数类型无法被推断，必须显示声明联合类型，而不是保持隐式的`any`。在某些版本中，只需要声明`typeof a === 'number'`就能够分别函数重载，但某些版本必须对每个入参进行类型断言(不要相信任何一个函数调用者)。

2. `interface` 和 `type` 函数重载
```ts
interface Add {
  (a: number, b: number): number;
  (a: string, b: string): string;
  (a: object, b: object): object; 
}

type Add = {
  (a: number, b: number): number;
  (a: string, b: string): string;
  (a: object, b: object): object; 
}
```
在这一版的函数重载中，通过给变量声明类型，可以在函数实现中省略入参的类型，ts会根据声明的类型自动推断参数的类型，但是在函数实现上依旧严苛。同时这两种类型定义还可以拓展函数，声明函数的属性。
```ts
type Add = {
  (a: number, b: number): number;
  (a: string, b: string): string;
  (a: object, b: object): object; 
  base: number;
}
type Add = {
  (a: number, b: number): number;
  (a: string, b: string): string;
  (a: object, b: object): object; 
} & {
   base: number;
}
```
### 函数重载函数
通过自定义重载函数可以绕过部分严苛的类型检查，在使用者保证入参的情况下，获取更好的编程体验，而不是与ts斗智斗勇。 

在设计上，一个重载函数需要做到两件事：第一件事情，在初始化时注册所有的重载，记录函数类型和函数体；第二件事，在函数调用时区分入参，找到正确的重载函数进行执行，返回其值。

所以大致有以下设计
```ts{5-13}
export const OverLoad = <T extends { [key: string]: (...argu: any[]) => any }>(
  types: OverlaodProps<T>
) => {
  const mapper = new Map<string, Function>();
  const overloadFn: any = (...argus: any) => {
    const i = argus.map((i: any) => GetTrueType(i)).join('/');

    if (mapper.has(i)) {
      return mapper.get(i)!(...argus);
    } else {
      return overloadFn.default(i);
    }
  };

  overloadFn.default = (i: string) => {
    console.error('No Function Overload Matched.', i);
    return 'No Function Overload Matched.';
  };

  // 动态添加重载函数
  const OverLoadAdder = (key: keyof T, argus: string, fn: Function) => {
    overloadFn[key] = fn;
    mapper.set(argus, fn);
  };

  for (let key in types) {
    OverLoadAdder(key, types[key]!.argus, types[key]!.fn);
  }

  overloadFn.OverLoadAdder = OverLoadAdder;

  return overloadFn as unknown as OverloadFn<T>;
};
```

在上述函数中，高亮部分为真正的重载函数，根据传入参数的类型，从map缓存中获取函数，然后执行后返回。剩下的部分均为锦上添花。在参数的设计上，采用了如下结构
```ts
export type OverlaodProps<
  T extends { [key: string]: (...argu: any[]) => any }
> = {
  [key in keyof T]?: {
    argus: string;
    fn: T[key];
  };
};
```
函数传入了一个对象，属性名为重载函数分支名称，属性值是一个包括了所有重载参数类型的字符串和函数体，即`Map<string, Function>`键值对。分开书写便于代码的整洁。现在函数已经可以正常工作了，不过遗憾的是，ts并没有办法从输入中读出函数的重载类型，因为入参是运行时，而ts永远处于静态编译时。下一个目标就是让ts获得函数的重载类型。

根据之前的介绍，很容易得出只需要定义一个`type`赋值给接受这个函数返回值的变量就行了
```ts
type customFn = any;
const cf: customFn = overload({} as any);
```
这样类型提示也正常了，cf可以正常使用，`overload`内部实际上用了`as any`的断言，所以它不在乎。这样这个函数的问题解决了？
其实没有，我们不能保证我们在传入参数对象的时候不出错，我们传入的参数可能和函数的重载完全不符，这和我们使用ts背道而驰，使用ts就是为了减少类型错误，我们可以一处小心，但是我们不能处处小心。我们需要对入参进行类型校验，所以有了如下思路
```ts
const overload = <T>(argu: Props<T>) => {
  return (()=>{}) as unknown as T;
}
```
使用泛型约束参数和返回值类型。

首先我们可以根据传入的泛型知道每个重载的类型，接着推出其余类型。在现有的函数设计中，我希望重载函数不仅可以使用`fn(a, b)`调用，还希望能够具名调用其中某一个重载，这个设计可以让函数的实现体在不同的部位出现。于是有
`T extends { [key: string]: (...argu: any[]) => any }`传入了对象让每个重载都有名字。
我们首先获取函数重载，先将对象中每个值拿出来再交叉
```ts
type UnionFunc<
  T extends { [key: string]: (...argu: any[]) => any }
> = UnionToIntersection<T[keyof T]> // 联合转交叉，函数重载是交叉

// 同时还需要定义每个分支函数类型 overload.addnumber : (a: number,b: number) => number
type ExtraAdder<T extends { [key: string]: (...argu: any[]) => any }> = T & {
  OverLoadAdder: OverLoadAdder<T>; // 用于注册重载的函数
  default: () => any;
}

export type OverloadFn<T extends { [key: string]: (...argu: any[]) => any }>
  = UnionFunc<T> & ExtraAdder<T>;
```

接下来通过泛型获取定义的传参类型
```ts
export type OverlaodProps<
  T extends { [key: string]: (...argu: any[]) => any }
> = {
  [key in keyof T]?: {
    argus: StringArrayToSingleString<
      ParameterArrayToVariableString<Parameters<T[key]>>,
      '/'
    >; // 省略 遍历参数数组，转换成字符串，再将字符串使用‘/’拼接
    fn: T[key];
  };
};

```
Adder同上, 本质上adder也是函数的一种重载，不过不调用实现方法。
```ts
type OverLoadAdder<
  T extends { [key: string]: (...argu: any[]) => any },
  K = keyof T
> = K extends keyof T
  ? (
      k: K,
      a: StringArrayToSingleString<
        ParameterArrayToVariableString<Parameters<T[K]>>,
        '/'
      >,
      fn: T[K]
    ) => void
  : never;
```