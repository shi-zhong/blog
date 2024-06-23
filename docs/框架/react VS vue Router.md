---
sidebar: "false"
---

1. 配置路由映射
<CodeGroup>
  <CodeGroupItem title="React">

```jsx:no-line-numbers

createRoutesFromElements(
	<Route path="/" element={<Root />}>
		<Route path="dashboard" element={<Dashboard />} />
		{/* ... etc. */}
	</Route>
)
// => 编译后

const routes = [
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "team",
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },
]


// 声明式路由
const routes = useRoutes(routes[]);
```
</CodeGroupItem>
<CodeGroupItem title="Vue">

```js:no-line-numbers
// 声明式路由
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        path: 'profile',
        component: UserProfile,
      }, // /user/:id/profile
      {
        path: 'posts',
        component: UserPosts,
      }, // /user/:id/posts
    ],
  },
]
```
</CodeGroupItem>
</CodeGroup>


2. 路由匹配

|              | React        | Vue                      |
| ------------ | ------------ | ------------------------ |
| 动态路由匹配 | `/:id`       | `/:id`                   |
| 可选片段     | `/:id?`      | `/:id?`                  |
| 通用匹配     | `/*`         | `/:pathMatch(.*)`        |
| 自定义正则   |              | `/orderId(\\d+)`         |
| 重复匹配     |              | `/repeat+` \| `/repeat*` |
| 精确匹配     | canSensitive | sensitive                |


3. 路由占位符(子路由出口)

|            | React        | Vue               |
| ---------- | ------------ | ----------------- |
| 路由占位符 | `<Outlet />` | `<router-view />` |


4. 路由导航

|              | React                                                | Vue                                              |
| ------------ | ---------------------------------------------------- | ------------------------------------------------ |
| 声明式       | `<link to="" preventScrollReset? replace? state? />` | `<router-link :to="" />`                         |
| 编程式       | `navigete(path, option)`                             | `router.push({ path, name, query, param, hash})` |
| 编程式(剩余) |                                                      | `router.(replace\| go)`                          |
| 编程式入口   | `navigate = useNavigate()`                           | `this.$router \| useRouter()`                    |


5. 信息传递

|              | vue                 | react                       |
| ------------ | ------------------- | --------------------------- |
| props注入    | props: true         | &#x2716;                    |
| 路由信息获取 | $route.params/query | useParams / useSearchParams |

6. 路由API(hooks)

| vue                    | react            |
| ---------------------- | ---------------- |
| \*beforeEach           | &#x2716;         |
| -beforeRouteUpdate     | &#x2716;         |
| +beforeEnter           | loader(async)    |
| -beforeRouteEnter      | &#x2716;         |
| \*beforeResolve        | &#x2716;         |
| \*afterEach            | &#x2716;         |
| -created               | &#x2716;         |
| -beforeRouteEnter.next | &#x2716;         |
| -mounted / -update     | -useEffect()     |
| -beforeRouteLeave      | -useBeforeUnload |
