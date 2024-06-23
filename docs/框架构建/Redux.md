###### 全局store核心状态存储
```tsx
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({reducer: {}})；

// 从 store 本身推断 `RootState` 和 `AppDispatch` 类型  
export type RootState = ReturnType<typeof store.getState>;  
export type AppDispatch = typeof store.dispatch;

render(<Provider store={store}><App /></Provider>)
```
###### 局部store: Slice
```ts
import { createSlice } from '@reduxjs/toolkit';
const init: State = (...{});

export const counterSlice = createSlice({
  name: 'counter',
  initialState: init,
  reducers: {
    increment: (state, action: PayloadAction<T>) => {
	  // state为proxy过的对象
      state.value += action.payload;
    },
  },
});

// 为每个 reducer 函数生成 Action
// Action 是自动生成 dispatch对象的方法
// (data: T) => ({ action: 'counter/increment', payload: data})
export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
```
###### 使用
```tsx
import { increment: action } from './counterSlice';

export const getterCounterValue = (state) => state.counter.value

export function Counter() {
  // 全是工具函数闭包
  const count = useSelector(getterCounterValue, equalFunc?);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(increment(number))}>
        {count}
    </button>
  );
}
```
######  connect函数
```ts

const mapStateToProps = (state: store, ownProps: Props) => ({
	// 运行时注意数据没有变化时，返回相同的引用以保持组件性能
	// 使用selector来获取数据，selector拥有缓存
	state: store.data
});

const mapDispatchToProps = {
	[key: string]: actions; // action 自动调用 dispatch
} || (dispatch, ownProps) => ({});

connect(mapStateToProps, mapDispatchToProps)(Component);
```