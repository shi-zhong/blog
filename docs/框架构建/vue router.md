1. `beforeEach` 在路由发生变化才触发，导航到本身不触发，参数变化时触发。
2. `beforeRouteUpdate` 路由匹配不变，参数更新，组件重用触发
3. `beforeEnter` 路由变化触发
4. `beforeRouteEnter` 第一次进入匹配项触发
5. `beforeResolve` 路由变化触发
6. `afterEach` 必定触发
7. `-----------------------------------------------------`
8. `created`
9. `beforeRouteEnter next`
10. `mounted / update` 
11. `beforeRouteLeave` 路由离开当前匹配项
12. `--------------------------------------------------`

总结：
1. 路由变化(url)一定触发 `beforeEach` 和 `beforeResolve`
2. 匹配到的路由项变化，触发 `beforeEnter` 和 `beforeRouteEnter`
3. 路由变化触发组件更新 `update`
4. 多个路由项匹配同一个组件时，组件将被复用，只触发`update`更新 ex: /test2/:A -> /test/:A 两者都使用Test组件， 导航更新只触发`update`
5. 组件内路由守卫只支持在router配置项中直接注册的组件，子组件的钩子不会在路由变化时触发。
6. 路由变化会导致直接组件更新