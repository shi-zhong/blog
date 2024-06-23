1. 
```ts
interface Route {
	path: Path;
	element: ReactNode;
	//async function for request data before route jump beforeEnter; 
	loader: ({ request, params }) => void;
	id: string;
	action: any;
	children: Route[]
}
```
2.  
```jsx
// 组件式路由
createRoutesFromElements((
	<Route path="/" element={APP}>
		<IndexRoute element={Default} />
		{/* default for path '/' */}
		<Route path="index" element={Index} />
		{/* path to /index */}
		<Route path="*" element={<Navigate to="/" state={state} />
	</Route>
))
// 声明式路由
const routes = useRoutes(routes[]);
// 声明式转跳
const navigate = useNavigate()
navigate('/', { state: state })
// 路由匹配组件占位符
<Outlet />
```
3.  传递数据
```tsx
return (
	// to='..' relative='path'
	<Link to='/' state={state} /> 
)

const location = useLocation()
console.log(location.state)
// 获取参数
const params = useParams()
console.log(params.keyword)
// 路径参数 ?query=any
const [searchParams as URLSearchParams, setSearchParams as ({[key:string]: any}) => void ] = useSearchParams();
const q = searchParams.get('query')
const navigation = useNavigation()
render((
	<div>
		{navigation.state === 'loading' && <Spinner />}
	</div>
))
```
4. Loader
	1. 路由中的`Loader`对应`beforeRouteEnter`,在单独的路由配置中执行，负责在路由渲染前向服务器获取数据并校验(返回Response)。
	2. 在渲染的组件中，可以通过`useLoaderData`钩子获取数据。或者通过`useRouterLoaderData(id: string)`获取指定id路由中的数据。
	3. 当`loader`抛出异常，可以再最近的`errorElement(路由中定义)`中，使用`useRouteError`捕获异常。
5. Action
	1. 参数，返回值类似`Loader`，数据钩子用`useActionData`
	2. 执行时机：使用`GET`导航至某路由或者使用`form`提交表单
	3. 当组件使用`form`进行提交时，会阻塞原请求，调用`action`钩子获取`form`数据
6. Deferred Data
	1. 使用路由拦截加载请求会导致网页阻塞，需要展示Loading状态
	2. `loader`内使用`defer`表示需要渲染`loading`状态，会直接渲染目标组件
	3. `<Await resolve={}>`在目标组件中使用，配合`Suspense`展示`Loading`。`Await`接受子组件和函数，函数参数代表请求的返回值，使用子组件则需要调用`useAsyncValue`钩子来获取数据。
	4. 
	```jsx
	  <Suspense fallback={<IssueCommentsSkeleton />}>
        <Await resolve={comments}>
          <IssueComments />
        </Await>        
        <Await resolve={history}>
          {(resolvedHistory) => (
            <IssueHistory history={resolvedHistory} />
          )}
        </Await>
      </Suspense>
      ```
7.  `useFetcher`
	在不进行导航的条件下，对路由中的loader和action进行调用