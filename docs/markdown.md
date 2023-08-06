---
lang: zh-CN
title: markdown
description: 语法 
---
### 容器

::: tip
```markdown:no-line-numbers
  ::: tip :::
```
:::

::: warning
```markdown:no-line-numbers
  ::: warning :::
```
:::

::: danger
```markdown:no-line-numbers
  ::: danger :::
```
:::

::: details 细节
```markdown:no-line-numbers
  ::: details :::
```
:::

### 代码块高亮

```ts{3,8-10}
// ts: no-line-numbers 取消数字
// ts{3,8-10}
import { defaultTheme, defineUserConfig } from 'vuepress';

export default defineUserConfig({
    title: '你好， VuePress',
    
    theme: defaultTheme({
        logo: 'https://vuejs.org/images/logo.png',
    }),
})
```

### 模板语法

`:no-v-pre` 指令挂在代码块的文件格式之后，用于取消markdown的编译，使得内部`{{ 模板语法}}`被当成vue解析

### Emoji
`:EMOJICODE:` VuePress 2 已经发布 :tada: ！

### 生成目录
`[[toc]]` 
[[toc]]

### 组件
<script setup>
  import V from '@@/Home.vue'
</script>

<v></v>

```markdown:no-line-numbers
<script setup>
  import V from '@@/Home.vue'
</script>

<v></v>
```

- VuePress - <Badge type="tip" text="v2" vertical="top" />

<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn install
```
  </CodeGroupItem>
  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```
  </CodeGroupItem>
</CodeGroup>

### 样式
使用 style 标签改写全局样式
```md
<style>
  h3 {
    color: blue;
  }
</style>
```