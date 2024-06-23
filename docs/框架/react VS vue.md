---
title: react 和 vue 同等功能写法对比
---

React 和 Vue 是现在前端领域中常用的基础框架，两者运用了虚拟DOM的思想，抽象了UI和逻辑之间的关系，保证了开发效率的提升。
本文对于两个框架的基础语法进行对比和总结。
(本文所有react组件都以函数式组件展示，所有vue组件以组合式api展示。)

### 从组件入手
无论何种语法，在这两类框架中，都难以逃脱组件的概念。


首先是一个普通的函数式组件和等价的vue组件

<CodeGroup>
  <CodeGroupItem title="React">

```jsx:no-line-numbers
const Parent = (props: Props) => {
  const [message, setMessage] = useState('message');
  return (
    <>
      <div>{message}</div>
      <Child message={message} handleMessage={setMessage} />
    </>
  )
}
```

^3114dd

</CodeGroupItem>
<CodeGroupItem title="Vue">

```vue:no-line-numbers
<script setup lang="ts">
const message = ref('message');
const handleMsg = (msg: string) => message.value = msg;
</script>

<template>
  <div>{{ message }}</div>
  <Child :message="message" @message="handleMsg" />
</template>

```
</CodeGroupItem>
</CodeGroup>

|      | React    | Vue                       |
| ---- | -------- | ------------------------- |
| 数据绑定 | useState | ref / reactive            |
| 模板语法 | {单括号}    | { { 双括号 }}                |
| 参数声明 | 函数入参     | defineProps / defineEmits |
| 参数传递 | 直接传递     | v-bind                    |
| 事件绑定 | on+事件    | v-on                      |
| 组件插槽 | children | slot                      |
| 空标记  | <></>    | template                  |


### 在生命周期中注册事件
<CodeGroup>
  <CodeGroupItem title="React">

```jsx:no-line-numbers
const Parent = (props: Props) => {
  const ref = useRef();
  useEffect(() => {
    const eventListener = (e: Event) => {}
    if (ref.current) ref.current.addEventListener('event', eventListener)
    return () => {
      if (ref.current) ref.current.removeEventListener('event', eventListener)
    }
  }, [])
  return (
      <div ref={ref}>ref</div>
  )
}
```
</CodeGroupItem>
<CodeGroupItem title="Vue">

```vue:no-line-numbers
<script setup lang="ts">
const rref = ref();

const eventListener = (e: Event) => {}

onMounted(() => {
  if (ref.value) 
    ref.value.addEventListener('event', eventListener)
})
onUnMounted(() => {
  if (ref.value) 
    ref.value.removeEventListener('event', eventListener)
})
</script>

<template>
  <div ref="rref">ref</div>
</template>

```
</CodeGroupItem>
</CodeGroup>

&ensp;&ensp;&ensp;&ensp;在这一步注册函数的过程中，由于react的更新逻辑，组件函数会重新执行，所以在useEffect中声明的普通函数和变量会拥有新的内存地址，失去和注册函数的联系。但是，通过useState声明的更新函数会保持同一个引用，此时只能重新注册函数。但这样的效率是低下的，尤其是当监听鼠标事件等频繁触发的事件，不停地注册注销函数可能会使页面卡死。

&ensp;&ensp;&ensp;&ensp;通常的，可以通过在注册函数中，只使用更新函数来将需要的数据更新到state中，在useEffect中结合state中的值进行进一步的处理。也可以通过useRef保存值的相同引用，但这也会引起其他的问题，例如对ref的修改并不会使视图更新，需要使用另一个State或者reducer进行强制更新，这种方法需要考虑每一处引用不同的情况，写法更加复杂和冗余。
```jsx:no-line-numbers
const Index = () => {
  const ref = useRef()
  const [msg, setMsg] = useState('')

  useEffect(() => { 
    const eventListener = (e: Event) => setMsg(e.target.value)
    if (ref.current) 
      ref.current.addEventListener('event', eventListener)
    return () => {
      if (ref.current) 
        ref.current.removeEventListener('event', eventListener)
    }
  }, [])

  useEffect(() => {
    // handle message
  }, msg)

  return (
    <>
      <input ref={ref} />
      <div>{/*other data */}</div>
    </>
  )
}
```