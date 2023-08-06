---
lang: zh-CN
title: markdown
description: 语法 
---
### 容器

::: tip
```markdown
  ::: tip :::
```
:::

::: warning
```markdown
  ::: warning :::
```
:::

::: danger
```markdown
  ::: danger :::
```
:::

::: details
```markdown
  ::: details :::
```
:::

### Code

```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress';

export default defineUserConfig({
    title: '你好， VuePress',
    
    theme: defaultTheme({
        logo: 'https://vuejs.org/images/logo.png',
    }),
})
```

<style>
  h3 {
    color: blue;
  }
</style>

<script setup>
  import V from '@@/Home.vue'
</script>

<v></v>

### template

```:no-v-pre
data.query("{{ data?.CallUrl }}/{{data?.url}}").{a:1,b:2}
```

:EMOJICODE:
VuePress 2 已经发布 :tada: ！
[[toc]]

ts:no-line-numbers