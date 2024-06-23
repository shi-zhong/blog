1. `Suspense` 内部封装了错误处理函数，当内部抛出为`Promise`的错误时， 会给这个`promise`添加一个`then`方法。在数据请求(包括异步组件和数据)完成后，会执行这个回调函数，改变 `Suspense`内部的状态，切换组件状态。`lazy`异步组件是符合`Suspense`内部规范的子功能组件。
	当使用自定义的数据获取函数时，需要封装三种内部状态：`uninit`，`error`，`resolved`，并用闭包返回。每次父组件`Suspense`状态变化，子组件渲染，就会调用闭包的函数，第一次抛回`promise`，第二次根据请求状态返回结果。
	
```tsx
const fetchData = (url) => new Promise(resolved, failed).then(dataFn);

const useSuspenseDataFetch = (fetch: Promise) => {
	let status: 'uninit' | 'pending' | 'error' = 'uninit';
	let response;

	const suspender = fetch.then(
		res => {
			status = 'resolve';
			response = res;
		},
		err => {
			status = 'error';
			response = err;
		}
	)

	const handler = {
		pending: () => throw suspender,
		error: () => throw response,
		default: ()=> response
	}
	
	const read = ()=> {
		return hander[status] ? handler[status]() : handler.default();
	}

	return { read };
}

// child.jsx
const resource = useSuspenseDataFetch(fetchData('url').then(handleData)

const Child = () => {
	const data = resource.read();
	return Nodes;
}

const Parent = () => {
	return (
		<Suspense fallback={<div>Fail.</div>}>
			<Child />
		</Suspense>
	)
}
```
2. Hooks
	1. useState, useEffect, useRef
	2. useCallback, useMemo
		1. react默认渲染所有子组件，memo后根据props渲染
	3. useContext, createContext,context.Provider
```tsx
const myContext = createContext(defaultValue);
function MyFC() {
	const context = useContext();
}
function MyParent() {
	return (
		<myContext.Provider value={}></myContext.Provider>
	)
}
```
      4. useDeferredValue, useId
      5. useReducer(reducer, init, initFunc?)
      6. forwardRef((props, ref) => Element)
      7. useImperativeHandle(ref, () => handler)
